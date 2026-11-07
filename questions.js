// 原創練習題；非 AWS 官方試題，亦非實際考試題目。資料核實日：2026-11-07。
window.QUESTIONS = [
  {
    "id": "Q001",
    "domain": "D1",
    "topic": "IAM 角色",
    "question": "EC2 Auto Scaling 會頻繁替換節點。每台主機只需讀取同一 S3 prefix，要求零人工金鑰輪替且不將長期憑證放入主機。哪個方案管理負擔最低？",
    "options": [
      "為每台主機建立 IAM user，將其 access key 放入加密 Parameter Store",
      "每次開機由部署系統產生 presigned URL，涵蓋未來一年的下載",
      "在 launch template 指定 instance profile，角色只授予該 prefix 的 s3:GetObject",
      "使用同一個 IAM user access key，以 Secrets Manager 自訂輪替並推送至所有節點"
    ],
    "answers": [
      2
    ],
    "explanation": "EC2 instance profile 讓 SDK 取得自動更新的暫時角色憑證，且可將權限限制到指定物件 prefix；不需要自行維護身分金鑰分發系統。",
    "optionExplanations": [
      "仍建立長期金鑰，並需解決讀取 Parameter Store 的身分啟動問題。",
      "Presigned URL 有有效期限限制，也不適合作為長期動態工作負載身分。",
      "正確：符合動態節點、最小權限與免長期金鑰要求。",
      "可以自建輪替，但仍散布長期憑證且管理負擔高於角色。"
    ],
    "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
  },
  {
    "id": "Q002",
    "domain": "D1",
    "topic": "跨帳戶存取",
    "question": "開發帳戶的部署角色須切換為正式帳戶的 DeployRole，使用暫時憑證執行部署。哪些設定共同建立跨帳戶 AssumeRole 授權？（選 2 項）",
    "options": [
      "DeployRole 的 trust policy 信任指定來源角色",
      "僅為兩帳戶建立 VPC peering 即授予 AssumeRole",
      "只把來源角色 ARN 放入 DeployRole 的 permissions boundary",
      "來源角色的身分政策允許對 DeployRole 呼叫 sts:AssumeRole",
      "只在 DeployRole 附加部署資源的 Allow 政策就建立來源信任"
    ],
    "answers": [
      0,
      3
    ],
    "explanation": "跨帳戶角色切換需要目標信任與來源呼叫權限；目標角色的身分政策另外控制切換後可做的部署動作。",
    "optionExplanations": [
      "正確：目標信任指定來源。",
      "網路連通不是 IAM 授權。",
      "Boundary 是權限上限，不是 trust policy。",
      "正確：來源獲准呼叫角色切換。",
      "部署權限與允許誰切換是不同政策。"
    ],
    "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html"
  },
  {
    "id": "Q003",
    "domain": "D1",
    "topic": "IAM 政策評估",
    "question": "身分政策允許刪除 S3 物件，但 bucket policy 對該角色的相同刪除請求明確 Deny。如何判定？",
    "options": [
      "身分政策與資源政策任一 Allow 就能覆蓋 Deny",
      "請求被拒絕；適用的 explicit deny 覆蓋 Allow",
      "只要角色屬於 bucket owner 帳戶，資源政策 Deny 就不評估",
      "假設使用 permissions boundary 的 Allow 能覆蓋 bucket policy Deny"
    ],
    "answers": [
      1
    ],
    "explanation": "政策評估須納入所有適用的明確拒絕；同帳戶、角色身分或 boundary 都不是繞過資源政策拒絕的理由。",
    "optionExplanations": [
      "任一 Allow 的邏輯不能覆蓋明確 Deny。",
      "正確：明確拒絕優先。",
      "同帳戶請求仍受適用的資源政策 Deny 限制。",
      "Boundary 不授權，也不能覆蓋 Deny。"
    ],
    "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html"
  },
  {
    "id": "Q004",
    "domain": "D1",
    "topic": "Organizations SCP",
    "question": "企業要阻止組織成員帳戶在非核准 Region 建立資源，即使帳戶管理員附加 AdministratorAccess 也不得繞過。最佳護欄？",
    "options": [
      "只在管理帳戶的管理員角色加上區域 Deny",
      "只在每個 VPC 建立禁止非核准 Region CIDR 的 NACL",
      "於適當 OU 套用 SCP，限制相關區域動作並保留必要例外",
      "只啟用 AWS Config 區域合規規則，視為預防式拒絕所有建立操作"
    ],
    "answers": [
      2
    ],
    "explanation": "SCP 限制成員帳戶可用權限上限，需審慎處理全球服務及必要例外；仍不自行授予身分權限。",
    "optionExplanations": [
      "只影響該角色，不限制其他帳戶管理員。",
      "NACL 不根據 AWS API 的建立區域授權。",
      "正確：跨成員帳戶的預防式權限護欄。",
      "Config 主要偵測與評估，單靠規則不是 API 預防式拒絕。"
    ],
    "source": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html"
  },
  {
    "id": "Q005",
    "domain": "D1",
    "topic": "IAM Identity Center",
    "question": "企業已有 SAML IdP，數百名員工需依團隊存取 20 個 AWS 帳戶，權限要集中撤銷且不建立每帳戶 IAM user。哪個方案最符合？",
    "options": [
      "在各帳戶分別建立 SAML provider、角色與信任政策，逐帳戶維護映射",
      "整合 IAM Identity Center 與企業 IdP，以群組及 permission sets 指派各帳戶存取",
      "用 Cognito user pool 管理員工，將所有 AWS console 權限映射到單一角色",
      "透過 Organizations consolidated billing 集中帳務後，員工即自動取得各帳戶 console 權限"
    ],
    "answers": [
      1
    ],
    "explanation": "Identity Center 提供跨帳戶工作人員存取管理，集中使用群組與 permission sets，可降低逐帳戶聯合身分配置負擔。",
    "optionExplanations": [
      "直接 SAML federation 可行，但需更多逐帳戶配置與維護。",
      "正確：集中管理多帳戶工作人員與權限。",
      "Cognito 主要面向應用使用者登入，不是此多帳戶工作人員授權的最佳工具。",
      "合併帳單不授予員工 AWS console 存取權。"
    ],
    "source": "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html"
  },
  {
    "id": "Q006",
    "domain": "D1",
    "topic": "KMS 跨帳戶",
    "question": "帳戶 B 的角色需讀取帳戶 A 的 SSE-KMS S3 物件，金鑰是 A 的 customer managed key。哪些授權應共同納入？（選 2 項）",
    "options": [
      "A 的 KMS key policy 允許適當的跨帳戶使用",
      "只需在 S3 bucket policy Allow GetObject，KMS 會沿用同一授權",
      "把 B 的角色加入 A 的 VPC security group，就自動取得 KMS 權限",
      "只要啟用 KMS automatic key rotation，就不再需要跨帳戶 key policy",
      "B 的身分政策允許所需 S3 與 kms:Decrypt，且 S3 資源端允許跨帳戶讀取"
    ],
    "answers": [
      0,
      4
    ],
    "explanation": "S3 與 KMS 分別授權，跨帳戶讀取須通過物件存取及金鑰使用檢查。",
    "optionExplanations": [
      "正確：金鑰端建立跨帳戶授權。",
      "S3 Allow 不自動授予解密。",
      "Security group 是網路控制，不是金鑰授權。",
      "輪替不取代使用權限。",
      "正確：身分與物件存取授權也必要。"
    ],
    "source": "https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html"
  },
  {
    "id": "Q007",
    "domain": "D1",
    "topic": "祕密管理",
    "question": "ECS 應用使用 RDS 密碼，法遵要求每 30 天自動輪替；應用不得因輪替重新部署，且團隊不想維護自製密碼輪替排程。應選？",
    "options": [
      "Parameter Store SecureString 加 EventBridge 排程，自行開發並維護更新資料庫密碼的 Lambda",
      "將密碼設定為 ECS task definition 環境變數，單靠 RDS 自動備份更新它",
      "把密碼放在 KMS 加密的 S3 物件，僅啟用 KMS automatic key rotation",
      "Secrets Manager 儲存祕密並配置適用的自動輪替，應用執行期讀取並適當更新快取"
    ],
    "answers": [
      3
    ],
    "explanation": "Secrets Manager 提供祕密管理與適用的輪替整合。應用需在執行期取用最新版本，並處理快取及連線更新，避免把祕密固定在部署設定。",
    "optionExplanations": [
      "可以自建，但違反不想維護自製輪替流程的目標。",
      "環境變數不會因資料庫備份而自動更新，通常還涉及新任務啟動。",
      "輪替 KMS key material 不會變更資料庫密碼。",
      "正確：提供輪替流程且減少自建維護。"
    ],
    "source": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html"
  },
  {
    "id": "Q008",
    "domain": "D1",
    "topic": "Security Group",
    "question": "兩 AZ 的應用 ASG 會頻繁換 IP。RDS 只應接受這些應用節點的資料庫連線，不接受同 VPC 其他主機。最佳規則？",
    "options": [
      "在 RDS security group 入站允許資料庫埠，來源參照應用 security group",
      "在 RDS security group 允許整個 VPC CIDR 的資料庫埠",
      "在資料庫子網 NACL 允許所有應用所在子網的全部埠，且不限制 RDS SG",
      "每次 ASG 擴縮由人員將新節點私有 IP 加入 RDS security group"
    ],
    "answers": [
      0
    ],
    "explanation": "SG 來源參照隨附屬網路介面成員變化，可避免開放整個網段與維護個別動態 IP。",
    "optionExplanations": [
      "正確：精準授權應用群組。",
      "整個 VPC 包含不相關主機，範圍過大。",
      "子網範圍及全部埠過寬，也缺少資源層精準規則。",
      "可行但人工更新不可靠且管理負擔高。"
    ],
    "source": "https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html"
  },
  {
    "id": "Q009",
    "domain": "D1",
    "topic": "NACL",
    "question": "自訂 NACL 允許用戶端連到 EC2 的 TCP 443 入站；SG、路由與服務皆正常，但 TLS 連線逾時。NACL 尚未允許任何出站。應補？",
    "options": [
      "僅允許出站目的埠 443，即足以回覆任何 HTTPS 用戶端",
      "只在 SG 加入相同的入站 443 規則",
      "只把入站 NACL 規則號改為更小，不新增出站規則",
      "允許回到用戶端暫時連接埠的出站流量"
    ],
    "answers": [
      3
    ],
    "explanation": "NACL 無狀態，伺服器回覆流量的目的埠通常是用戶端暫時連接埠；必須明確允許回程。",
    "optionExplanations": [
      "443 是伺服器接收埠，不是通常的用戶端回程目的埠。",
      "SG 已正常，重複規則不修復 NACL 出站。",
      "入站排序不會建立出站 Allow。",
      "正確：補齊無狀態過濾的回程。"
    ],
    "source": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html"
  },
  {
    "id": "Q010",
    "domain": "D1",
    "topic": "S3 私有存取",
    "question": "同 Region 的私有 EC2 讀 S3，要求不經 NAT，且 GetObject 必須由指定 VPC endpoint 進入。應做哪些設定？（選 2 項）",
    "options": [
      "只在 endpoint policy Allow 該 bucket，就假設其他公開路徑全被禁止",
      "使用 bucket policy 的 aws:SourceIp 等於 NAT 公有 IP 來辨識該 endpoint",
      "建立 S3 gateway endpoint 並關聯使用中的路由表",
      "只為 S3 建立 Route 53 private hosted zone，不建立任何 endpoint",
      "以 bucket policy 檢查 aws:SourceVpce，配合所需 Allow 及非指定來源的限制"
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "Gateway endpoint 提供私有路徑，bucket policy 才能在資源端限制請求來源；endpoint policy 不會自動封鎖其他路徑。",
    "optionExplanations": [
      "Endpoint policy 只控制經該 endpoint 的請求。",
      "Endpoint 請求應用適用的 VPC 條件鍵，不是 NAT 公有 IP。",
      "正確：建立 S3 私有路由。",
      "DNS 設定不會自行建立服務連線。",
      "正確：在資源端辨識指定 endpoint。"
    ],
    "source": "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html"
  },
  {
    "id": "Q011",
    "domain": "D1",
    "topic": "PrivateLink",
    "question": "SaaS 供應商要向數百個客戶 VPC 提供內部 TCP API。雙方 CIDR 可能重疊，客戶不得取得供應商其他子網的路由。哪個方案最適合？",
    "options": [
      "供應商與每個客戶建立 VPC peering，交換所有服務子網路由",
      "將供應商與客戶接到同一 Transit Gateway，直接公告重疊 CIDR",
      "供應商建立以 NLB 為基礎的 PrivateLink endpoint service，客戶建立 interface endpoints",
      "為所有客戶建立 Site-to-Site VPN，讓客戶直接路由至供應商服務私有 IP"
    ],
    "answers": [
      2
    ],
    "explanation": "PrivateLink 提供指定服務的私有入口，不要求雙方建立完整網段可達性；適用於重疊 CIDR 與服務層隔離。",
    "optionExplanations": [
      "Peering 不支援重疊 CIDR，且帶來較廣路由連通。",
      "Transit Gateway 不會自動解決重疊 CIDR 的路由問題。",
      "正確：以服務入口隔離雙方網路。",
      "直接 VPN 路由仍須處理重疊位址，且增加大量連線管理。"
    ],
    "source": "https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html"
  },
  {
    "id": "Q012",
    "domain": "D1",
    "topic": "S3 預設加密",
    "question": "舊 S3 bucket 含 2022 年未加密物件；新上傳已使用預設加密。稽核要求確認歷史資料。哪個判斷正確？",
    "options": [
      "啟用 bucket default encryption 時會自動就地重寫全部歷史物件",
      "啟用 versioning 後，所有既有物件版本都會改用當前 default key",
      "把預設加密改為 SSE-KMS 後，舊 SSE-S3 及未加密物件都立即改成該 KMS key",
      "新上傳至少使用 SSE-S3；歷史未加密物件需另行加密複製或 Batch Operations"
    ],
    "answers": [
      3
    ],
    "explanation": "Default encryption 控制新寫入，不會回溯重寫舊物件。既有資料需要規劃重寫、版本與費用影響。",
    "optionExplanations": [
      "預設設定不會啟動歷史物件重寫。",
      "版本控制不改變既有版本的加密。",
      "更換預設金鑰不會重新加密舊物件。",
      "正確：區分新寫入與既有資料。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-encryption-faq.html"
  },
  {
    "id": "Q013",
    "domain": "D1",
    "topic": "S3 Object Lock",
    "question": "法規要求指定物件版本保存七年，期間連 root 都不能刪除或縮短保留期。最適合的固定保留模式？",
    "options": [
      "Object Lock governance mode，授權管理員 s3:BypassGovernanceRetention",
      "S3 Object Lock compliance mode，設定適當保留期限",
      "只啟用 versioning，再允許管理員刪除任何 noncurrent version",
      "只啟用 MFA Delete，認定持有 MFA 的 root 也永遠不能刪除"
    ],
    "answers": [
      1
    ],
    "explanation": "Compliance mode 的受保護物件版本在保留期內不可刪除或縮短期限；需正確設定 WORM 保留政策。",
    "optionExplanations": [
      "Governance 可由具適當權限者繞過。",
      "正確：滿足不可繞過的固定保留。",
      "版本控制本身不阻止永久刪除物件版本。",
      "MFA Delete 增加刪除驗證，不等於不可刪除的合規保留。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html"
  },
  {
    "id": "Q014",
    "domain": "D1",
    "topic": "CloudFront OAC",
    "question": "S3 存放 SSE-KMS 私有教材，必須只讓指定 CloudFront distribution 回源，不允許讀者繞過分發直接讀取。哪些設定適當？（選 2 項）",
    "options": [
      "改用 S3 website endpoint 並附加 OAC，認定它支援相同簽署存取",
      "只向觀看者提供 signed URL，但保留 S3 可直接讀取的公開政策",
      "使用 S3 REST bucket origin 與 OAC 簽署回源請求",
      "以限定 distribution 的 bucket policy 授權，並為 SSE-KMS 設定必要 key policy",
      "以 OAI 的舊有設定取代 OAC，認定無需其他條件就支援所有 SSE-KMS 情境"
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "OAC 保護 CloudFront 到 S3 的來源存取，SSE-KMS 還需要金鑰授權；觀看者授權與來源封鎖是不同層。",
    "optionExplanations": [
      "Website endpoint 不支援這種 OAC 保護。",
      "Signed URL 不會自動關閉直接 S3 公開路徑。",
      "正確：適用於私有 S3 bucket origin。",
      "正確：同時控制來源與 KMS 使用。",
      "OAI 對 SSE-KMS 有限制，不能如此視為等價。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html"
  },
  {
    "id": "Q015",
    "domain": "D1",
    "topic": "CloudFront 簽名 URL",
    "question": "會員平台透過同一 CloudFront distribution 發送影片；會員購買後只能在接下來 10 分鐘取得指定單一影片。S3 已用 OAC 保護。應新增何者？",
    "options": [
      "為該影片產生有效期 10 分鐘的 CloudFront signed URL",
      "把該影片的 CloudFront TTL 設成 10 分鐘",
      "僅保留 OAC，讓 distribution 依 IAM 自動辨識每位會員是否已付費",
      "為 S3 物件產生 presigned URL，讓使用者直接從 S3 下載"
    ],
    "answers": [
      0
    ],
    "explanation": "Signed URL 處理觀看者對特定 CloudFront 資源的時效授權；OAC 處理 CloudFront 到來源的授權，兩者用途不同。",
    "optionExplanations": [
      "正確：保留 CloudFront 分發且限制指定資源有效期限。",
      "TTL 控制快取新鮮度，不控制會員是否可存取。",
      "OAC 不驗證會員購買資格。",
      "可提供 S3 暫時存取，但會繞過題目要求的 CloudFront 分發路徑。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html"
  },
  {
    "id": "Q016",
    "domain": "D1",
    "topic": "AWS WAF",
    "question": "ALB 後方公開 API 遭受 SQL injection 與單一來源高頻 HTTP 請求。團隊需最快導入託管應用層規則，且不先修改程式碼。應選？",
    "options": [
      "訂閱 Shield Advanced，僅依其網路層 DDoS 防護過濾所有 SQL injection",
      "在 ALB 關聯 AWS WAF web ACL，啟用適當 managed rules 與 rate-based rules",
      "使用 Security Group 允許 443 並以規則匹配 HTTP request body",
      "使用 NACL 限制 TCP 443，每分鐘依 URL 路徑自動計數封鎖"
    ],
    "answers": [
      1
    ],
    "explanation": "WAF 可檢查 HTTP 請求內容並套用託管與限速規則；仍須後續修復應用輸入處理與安全查詢。",
    "optionExplanations": [
      "Shield Advanced 不應被當成 SQL injection 內容規則的替代。",
      "正確：直接對應應用層內容與請求速率。",
      "Security Group 不解析 HTTP body，也沒有此內容規則。",
      "NACL 是子網封包過濾，無 URL 及 HTTP 速率規則。"
    ],
    "source": "https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html"
  },
  {
    "id": "Q017",
    "domain": "D1",
    "topic": "AWS Shield",
    "question": "企業已有 WAF，但還要求進階 DDoS 支援、適用資源的 DDoS 成本保護與事件專家協助。應加評估？",
    "options": [
      "AWS Shield Advanced，確認訂閱與受保護資源條件",
      "只新增 WAF SQL injection managed rule，取代所有進階 DDoS 支援",
      "只使用 Shield Standard，假設包含與 Advanced 完全相同的支援與成本保護",
      "只使用 GuardDuty 威脅發現，讓它自動提供所有 DDoS 流量清洗"
    ],
    "answers": [
      0
    ],
    "explanation": "Shield Advanced 提供進階 DDoS 能力與適用的支援／成本保護；WAF 內容規則及偵測服務不是相同保障。",
    "optionExplanations": [
      "正確：對應額外 DDoS 支援需求。",
      "SQL 規則不提供題目要求的支援及成本保護。",
      "Standard 與 Advanced 的保障範圍不同。",
      "威脅發現不等於 DDoS 流量緩解服務。"
    ],
    "source": "https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html"
  },
  {
    "id": "Q018",
    "domain": "D1",
    "topic": "Cognito",
    "question": "消費者行動 App 需自助註冊、社群登入並取得 JWT，API Gateway 驗證登入者 token。最合適的身分目錄？",
    "options": [
      "只使用 Cognito identity pool，認定它本身提供完整本機使用者密碼目錄",
      "使用 IAM Identity Center，為所有外部消費者建立多帳戶 permission sets",
      "Amazon Cognito user pool",
      "用 IAM users 管理每位消費者，再把 access keys 當成標準登入 JWT"
    ],
    "answers": [
      2
    ],
    "explanation": "Cognito user pool 提供應用使用者目錄、登入與 token；identity pool 的重點是交換暫時 AWS 憑證，兩者用途不同。",
    "optionExplanations": [
      "Identity pool 不取代 user pool 的使用者目錄及登入功能。",
      "Identity Center 主要服務工作人員 AWS 存取，不是此消費者登入用途。",
      "正確：託管消費者驗證與 JWT。",
      "IAM access keys 不是應用登入 JWT，管理也不適合大量消費者。"
    ],
    "source": "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools.html"
  },
  {
    "id": "Q019",
    "domain": "D1",
    "topic": "稽核與合規",
    "question": "稽核要調查「誰呼叫刪除 API」及「SG 在何時變成對全網開 SSH」。哪些服務分別直接支援這兩種問題？（選 2 項）",
    "options": [
      "只查 VPC Flow Logs，即可重建每次 SG 規則變更的呼叫者",
      "CloudTrail 記錄適用 API 呼叫活動與身分",
      "只查 CloudWatch CPU metric，即可還原全部 API request parameters",
      "只依 Trusted Advisor 當前建議，就能還原所有歷史 SG 組態與每次呼叫者",
      "AWS Config 記錄受支援資源組態歷史並可評估合規"
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "CloudTrail 解釋活動與呼叫者，Config 解釋資源組態及合規變化；需事先啟用適當記錄並規劃保留。",
    "optionExplanations": [
      "Flow Logs 是網路流量紀錄，不是完整 SG API 稽核。",
      "正確：API 活動稽核。",
      "CPU metric 不包含 API 呼叫細節。",
      "當前建議不等於完整歷史稽核軌跡。",
      "正確：資源組態歷程。"
    ],
    "source": "https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html"
  },
  {
    "id": "Q020",
    "domain": "D1",
    "topic": "敏感資料發現",
    "question": "資料治理團隊要定期掃描大量 S3 物件內文，找出信用卡號與身分資料，並回報敏感物件。希望最少自建分析。應選？",
    "options": [
      "GuardDuty S3 Protection，直接用存取事件推斷每個物件內文的信用卡號",
      "AWS Config managed rules，解析每個 S3 物件內容並分類個資",
      "Amazon Macie 的 sensitive data discovery",
      "IAM Access Analyzer，從 bucket policy 列出所有含身分證字號的物件"
    ],
    "answers": [
      2
    ],
    "explanation": "Macie 專門支援 S3 敏感資料發現與分類；存取威脅、組態合規、政策外部存取分析並不等同物件內文分類。",
    "optionExplanations": [
      "GuardDuty 偵測威脅活動，不以此功能全面分類物件內文。",
      "Config 聚焦受支援資源組態及合規，不是物件內容掃描引擎。",
      "正確：對 S3 內容進行敏感資料分析。",
      "Access Analyzer 分析授權與外部存取，不掃描信用卡內文。"
    ],
    "source": "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html"
  },
  {
    "id": "Q021",
    "domain": "D1",
    "topic": "威脅偵測",
    "question": "資安要以最少自建分析偵測疑似遭竊 AWS 憑證的異常 API 行為，並產生威脅發現。哪項最直接？",
    "options": [
      "只使用 IAM Access Analyzer 的外部資源存取分析，視為執行期異常 API 偵測",
      "Amazon GuardDuty",
      "只用 AWS Config 確認資源 tags 合規，視為帳戶行為分析",
      "只部署 Amazon Inspector，認定主機套件弱點掃描可取代 API 行為威脅偵測"
    ],
    "answers": [
      1
    ],
    "explanation": "GuardDuty 以支援的活動來源偵測潛在威脅，適合異常帳戶行為；政策分析、組態評估與弱點掃描各處理不同風險。",
    "optionExplanations": [
      "Access Analyzer 的此分析聚焦授權暴露面。",
      "正確：託管執行期威脅偵測。",
      "組態 tags 合規不等於異常身分活動偵測。",
      "Inspector 聚焦弱點，不取代帳戶 API 行為分析。"
    ],
    "source": "https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html"
  },
  {
    "id": "Q022",
    "domain": "D1",
    "topic": "Session Manager",
    "question": "私有 EC2 的維運禁止任何 SSH 入站，也不想維護 bastion 或 SSH key。主機可安裝受管代理且具有服務連線。最佳登入方案？",
    "options": [
      "Systems Manager Session Manager，配置所需角色、代理與 endpoints 或對外連線",
      "部署 public bastion，透過私有 IP SSH 至 EC2",
      "只啟用 EC2 Instance Connect，保持所有 SSH 目的端口封鎖且不提供其他工作階段通道",
      "建立 Site-to-Site VPN，直接以 SSH 登入但不新增主機端入站規則"
    ],
    "answers": [
      0
    ],
    "explanation": "Session Manager 透過代理與 IAM 提供受管工作階段，可避免 SSH 入站及金鑰維護。",
    "optionExplanations": [
      "正確：符合零 SSH 入站與免 bastion。",
      "仍需目標主機 SSH 入站，也需維護 bastion。",
      "SSH 型連線仍需對應網路路徑與存取條件。",
      "VPN 只提供網路可達，不繞過主機 SG 對 SSH 的封鎖。"
    ],
    "source": "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html"
  },
  {
    "id": "Q023",
    "domain": "D1",
    "topic": "ACM 與 TLS",
    "question": "區域性網站要在 ALB 終止公有 HTTPS，團隊希望由 AWS 管理憑證與適用的續期，不自行分發私鑰。應選？",
    "options": [
      "只在 us-east-1 請求憑證，再假設任何 Region 的 ALB 都能直接使用",
      "只替後端 EC2 安裝自簽憑證，ALB listener 維持 HTTP",
      "將外部購買憑證匯入 ACM 後，假設 ACM 一定自動替所有匯入憑證續期",
      "在 ALB 所在 Region 用 ACM 請求並完成網域驗證，將憑證掛到 HTTPS listener"
    ],
    "answers": [
      3
    ],
    "explanation": "ALB 的 ACM 憑證需位於相同 Region；AWS 核發且符合條件的憑證可提供託管續期，仍須維持驗證條件。",
    "optionExplanations": [
      "us-east-1 是 CloudFront 等特定用途條件，不是跨區 ALB 通用憑證。",
      "不能讓 ALB 對用戶端提供所需的公有 HTTPS。",
      "匯入憑證不享有與 ACM 核發憑證相同的自動續期流程。",
      "正確：區域與 listener 配置符合需求。"
    ],
    "source": "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html"
  },
  {
    "id": "Q024",
    "domain": "D1",
    "topic": "私有子網與 NAT",
    "question": "私有 IPv4 EC2 要從網際網路下載更新，但不能接受外部主動連線。使用 public zonal NAT Gateway 時，哪些設定共同建立出口？（選 2 項）",
    "options": [
      "只把私有子網 0.0.0.0/0 指到 IGW，主機仍無公有 IP",
      "NAT 位於公有子網並有 Elastic IP，該子網具備 IGW 路由",
      "使用 private NAT Gateway 並將其流量送至 IGW 上網",
      "私有子網預設 IPv4 路由指向 NAT Gateway，並允許必要流量",
      "只建立 IPv6 egress-only IGW，就假設能處理所有 IPv4 更新請求"
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "Public NAT Gateway 為私有 IPv4 工作負載提供對外來源轉換；需要完整私有子網至 NAT 再至 IGW 路徑。",
    "optionExplanations": [
      "無公有位址的 IPv4 主機不能只靠 IGW 上網。",
      "正確：建立可上網的公有 NAT。",
      "Private NAT 不提供經 IGW 的網際網路出口。",
      "正確：將私有流量送進 NAT。",
      "Egress-only IGW 處理 IPv6，不取代 IPv4 NAT。"
    ],
    "source": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html"
  },
  {
    "id": "Q025",
    "domain": "D1",
    "topic": "S3 傳輸加密",
    "question": "法遵要求 S3 GetObject 與 PutObject 一律使用 TLS，即使身分已有物件讀寫 Allow。哪個資源層控制最直接？",
    "options": [
      "只將 default encryption 設成 SSE-KMS",
      "只啟用 S3 Block Public Access",
      "Bucket policy 明確拒絕 aws:SecureTransport 為 false 的請求",
      "只在 bucket CORS AllowedMethods 中移除 HTTP 方法"
    ],
    "answers": [
      2
    ],
    "explanation": "明確拒絕非安全傳輸能在 S3 端強制 TLS；靜態加密、公有授權與瀏覽器 CORS 是不同控制。",
    "optionExplanations": [
      "SSE-KMS 處理靜態資料，不強制傳輸協定。",
      "Block Public Access 不會保證所有授權請求使用 TLS。",
      "正確：依安全傳輸條件強制拒絕。",
      "CORS 不以 HTTP/HTTPS 作為這種身分存取控制。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html"
  },
  {
    "id": "Q026",
    "domain": "D1",
    "topic": "Root 帳戶",
    "question": "企業要建立 AWS 日常維運流程，root 仍保留給必要的帳戶專屬操作。哪個組合最合適？",
    "options": [
      "為 root 建長期 access key，再放進 Secrets Manager 自動輪替以供日常部署",
      "只對 root 設複雜密碼，不用 MFA；日常用同一 root 操作便於一致授權",
      "把 AdministratorAccess 指派所有員工，認定它與最小權限角色管理等效",
      "Root 啟用 MFA 並避免 access keys；日常使用聯合身分及暫時角色權限"
    ],
    "answers": [
      3
    ],
    "explanation": "Root 應高度保護並降低使用頻率；日常聯合身分及角色提供較佳追責與最小權限控制。",
    "optionExplanations": [
      "保存及輪替不能合理化以 root 金鑰日常部署。",
      "MFA 與具名身分仍必要，共用 root 不利追責。",
      "全員管理員不符合按職責最小權限。",
      "正確：分離最高權限帳戶操作與日常維運。"
    ],
    "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html"
  },
  {
    "id": "Q027",
    "domain": "D1",
    "topic": "混合網路加密",
    "question": "企業已用 Direct Connect 連機房與 AWS，但法遵要求傳輸內容採 IPsec。既有路由架構支援相關整合，應如何補強？",
    "options": [
      "在適用架構上建立 Site-to-Site VPN over Direct Connect 並驗證路由",
      "只建立第二條 Direct Connect，認定冗餘專線等於 IPsec",
      "只開啟 VPC Flow Logs，讓記錄功能同時加密封包",
      "只設定 Direct Connect BGP MD5，認定所有應用 payload 因而以 IPsec 加密"
    ],
    "answers": [
      0
    ],
    "explanation": "Direct Connect 專用連線、BGP 對等驗證與 IPsec 是不同概念；VPN 可在適用架構提供所需傳輸加密。",
    "optionExplanations": [
      "正確：以 VPN 加上 IPsec。",
      "冗餘改善韌性，不等同資料加密。",
      "Flow Logs 是記錄，不加密傳輸。",
      "BGP MD5 保護控制平面會話，不加密應用資料。"
    ],
    "source": "https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-aws-transit-gateway-vpn.html"
  },
  {
    "id": "Q028",
    "domain": "D1",
    "topic": "權限邊界",
    "question": "平台允許開發人員自行建立 IAM 角色，但所有新角色只能在限定服務權限內工作。目標是帳戶內精準委派，應用何者？",
    "options": [
      "只把 IAM managed policy 附加給開發者，假設它自動成為所有新角色的上限",
      "只為開發者角色設定 trust policy，將它當成新角色動作權限上限",
      "只啟用 IAM Access Analyzer findings，將事後偵測視為預防式限制",
      "強制新角色附加指定 permissions boundary，並限制開發者修改或移除它"
    ],
    "answers": [
      3
    ],
    "explanation": "Boundary 設定被委派身分的最大可授權範圍；還需限制建立者繞過邊界，且實際 Allow 仍由其他政策提供。",
    "optionExplanations": [
      "建立者自身政策不會自動成為被建立角色的 boundary。",
      "Trust policy 控制誰能切換，不控制角色可做的動作上限。",
      "偵測工具不能取代預防式授權限制。",
      "正確：建立可強制的帳戶內權限上限。"
    ],
    "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html"
  },
  {
    "id": "Q029",
    "domain": "D1",
    "topic": "KMS 與資料權限",
    "question": "應用 IAM role 能列出 S3 bucket，GetObject 也已明確 Allow；讀 SSE-KMS 物件仍回 AccessDenied，路由正常。最應檢查？",
    "options": [
      "只增加 s3:ListBucket，假設列出物件權限同時授予解密",
      "只啟用 S3 Bucket Key，假設它自動略過 KMS 授權",
      "只在 bucket CORS 中允許應用來源，假設伺服器端解密權限隨之開啟",
      "角色的 kms:Decrypt 與 key policy／適用 grants 是否有效，金鑰是否可用"
    ],
    "answers": [
      3
    ],
    "explanation": "SSE-KMS 讀取有獨立金鑰授權，GetObject Allow 不足以取代 kms:Decrypt 及可用 key 的必要條件。",
    "optionExplanations": [
      "ListBucket 不授予物件解密。",
      "Bucket Key 優化 KMS 請求，不取消授權。",
      "CORS 不授予 KMS 解密權限。",
      "正確：檢查獨立的解密授權層。"
    ],
    "source": "https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html"
  },
  {
    "id": "Q030",
    "domain": "D1",
    "topic": "S3 Block Public Access",
    "question": "企業不需要公開 S3 網站，但開發團隊常誤設公開 ACL 或 bucket policy。要集中預防意外公開，最佳控制？",
    "options": [
      "只啟用 versioning，依靠歷史版本保證物件不公開",
      "只加密所有物件，認定 SSE-S3 會拒絕所有匿名 GetObject",
      "只用 Access Analyzer 定期通知，再由人員手動修復每次公開政策",
      "啟用適當的帳戶層 S3 Block Public Access，確認既有需求相容性"
    ],
    "answers": [
      3
    ],
    "explanation": "Block Public Access 可在帳戶層阻擋公開設定效果；加密與版本不是公開授權控制，偵測通知也不是即時預防。",
    "optionExplanations": [
      "版本控制不管理公有授權。",
      "SSE-S3 不會自動拒絕所有已授權的匿名讀取。",
      "通知有價值，但不取代題目要求的集中預防。",
      "正確：集中預防式限制。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html"
  },
  {
    "id": "Q031",
    "domain": "D2",
    "topic": "多 AZ 網站",
    "question": "單一 AZ 的網站須在一個 AZ 故障時仍可服務。最佳改進？",
    "options": [
      "把 ASG 跨兩個 AZ 部署，前置 ALB 並移除單 AZ 相依",
      "在單一 AZ 建立兩台更大型 EC2 並置於 ALB 後",
      "只把資料庫改為 Multi-AZ，應用層仍只有單 AZ",
      "只為 EC2 定期建立 AMI，故障後人工在另一 AZ 重建"
    ],
    "answers": [
      0
    ],
    "explanation": "跨 AZ 運算與負載平衡可降低單 AZ 故障影響，資料層和出口等相依也必須具備對應韌性。",
    "optionExplanations": [
      "正確：分散故障範圍。",
      "同 AZ 的節點仍共享 AZ 故障範圍。",
      "應用層仍會因該 AZ 中斷而不可用。",
      "可協助還原，但不等於故障當下仍持續服務。"
    ],
    "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html"
  },
  {
    "id": "Q032",
    "domain": "D2",
    "topic": "RDS Multi-AZ 模式",
    "question": "團隊說「所有 RDS Multi-AZ 的備援都不能讀」。哪項修正正確？",
    "options": [
      "Multi-AZ DB instance 的單一 standby 不提供讀取；Multi-AZ DB cluster 的 readers 可讀",
      "傳統 Multi-AZ DB instance 的 standby 可直接接收報表查詢，DB cluster readers 不可讀",
      "兩種部署的所有備援節點都只用於 failover，讀取只能靠額外 read replicas",
      "只要名稱包含 Multi-AZ，就代表備援節點採非同步複寫且都可讀"
    ],
    "answers": [
      0
    ],
    "explanation": "需辨別 DB instance deployment 與 DB cluster deployment，不能把兩種模式的讀取行為混為一談。",
    "optionExplanations": [
      "正確：兩種部署行為不同。",
      "將兩種模式的讀取行為顛倒。",
      "Multi-AZ DB cluster 的 readers 可服務讀取。",
      "Multi-AZ 與非同步 read replica 不能一概混為一談。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html"
  },
  {
    "id": "Q033",
    "domain": "D2",
    "topic": "SQS 緩衝",
    "question": "促銷時前端每秒接收數千筆訂單，後端處理較慢。使用者接受非同步完成，但已接收工作需耐久保存；目標減少自建基礎設施。最佳設計？",
    "options": [
      "由 ALB 增加 idle timeout，讓所有同步連線等待直到後端完成",
      "在 ElastiCache 的單一快取 key 累積全部訂單，設定 30 秒 TTL",
      "以前端記憶體保存訂單，僅在 CPU 低於門檻時批次傳給後端",
      "前端寫入 SQS，後端 workers 依 backlog 擴縮並實作冪等"
    ],
    "answers": [
      3
    ],
    "explanation": "SQS 讓接收與處理速率解耦，以耐久佇列吸收尖峰；成功處理後刪除訊息，並防止重複副作用。",
    "optionExplanations": [
      "只延長等待不緩衝工作，且會持續占用連線。",
      "短 TTL 快取不適合作為此耐久工作來源。",
      "主機故障或替換可能遺失記憶體訂單。",
      "正確：耐久排隊且可按工作量擴縮。"
    ],
    "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html"
  },
  {
    "id": "Q034",
    "domain": "D2",
    "topic": "SQS FIFO",
    "question": "付款事件要求每個訂單依序處理，發送端重試可能重複送出。哪些設計適當？（選 2 項）",
    "options": [
      "所有訂單使用相同 MessageGroupId，以便無限制提高每訂單的平行處理",
      "只把 visibility timeout 設成 5 分鐘，就視為已完成發送去重",
      "設定 deduplication ID，且消費端以交易 ID 實作冪等",
      "以 FIFO queue 並為同訂單使用相同 MessageGroupId",
      "收到 FIFO 訊息後不需要冪等或刪除，佇列會和外部付款交易自動形成原子提交"
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "FIFO 對訊息群組提供順序，並在去重視窗抑制重複發送；外部交易與重試仍需冪等控制。",
    "optionExplanations": [
      "單一群組會不必要地序列化所有訂單。",
      "Visibility timeout 與發送去重是不同功能。",
      "正確：發送去重加業務冪等。",
      "正確：以群組維持訂單內順序。",
      "外部業務交易不會自動與訊息形成原子提交。"
    ],
    "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html"
  },
  {
    "id": "Q035",
    "domain": "D2",
    "topic": "Visibility Timeout",
    "question": "SQS workers 平均處理 4 分鐘，偶爾 8 分鐘；目前 visibility timeout 為 30 秒，同筆工作經常同時執行。何者最直接處理原因？",
    "options": [
      "把 message retention period 從 4 天提高為 14 天",
      "將 visibility timeout 設為合理處理視窗，長任務以 ChangeMessageVisibility 延長，成功後刪除",
      "啟用 long polling 到最大等待時間，保持 visibility timeout 不變",
      "只降低 batch size 為 1，並將 queue 改成 FIFO 就不必處理執行逾時"
    ],
    "answers": [
      1
    ],
    "explanation": "可見性逾時過短會讓尚未完成的訊息重新被取得。保留期、long polling 與排序不能取代適當的處理視窗；冪等仍必要。",
    "optionExplanations": [
      "Retention 控制可保存多久，不控制取得後的隱藏時間。",
      "正確：對應訊息過早重現的原因。",
      "Long polling 降低空輪詢，不延長處理中的可見性逾時。",
      "FIFO 仍需要正確 visibility timeout 與冪等。"
    ],
    "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html"
  },
  {
    "id": "Q036",
    "domain": "D2",
    "topic": "Dead-letter Queue",
    "question": "少數格式錯誤訊息無限重試，拖累正常工作。應如何隔離？",
    "options": [
      "只提高 visibility timeout 到數小時，讓所有失敗工作更晚重現",
      "設定 DLQ 與合理 maxReceiveCount，再分析並修復後重送",
      "只啟用 long polling，假設它可辨識並隔離格式錯誤訊息",
      "降低 batch size 到 1，仍允許相同錯誤訊息無限重試"
    ],
    "answers": [
      1
    ],
    "explanation": "DLQ 隔離多次處理失敗的訊息，避免 poison messages 持續干擾；需監控 DLQ 並規劃補處理。",
    "optionExplanations": [
      "延後重現不隔離永久格式錯誤。",
      "正確：隔離失敗並保留調查資料。",
      "Long polling 處理空輪詢，不分類 poison messages。",
      "可能降低批次影響，卻未解決無限失敗重試。"
    ],
    "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"
  },
  {
    "id": "Q037",
    "domain": "D2",
    "topic": "Fan-out",
    "question": "每筆訂單事件須由出貨、發票、分析三個服務各處理一次業務工作。分析服務可能離線數小時，其工作需保留，其餘服務不得受影響。最佳架構？",
    "options": [
      "SNS topic 各自訂閱獨立 SQS queue，三個服務分別消費自己的佇列",
      "讓三個服務競爭同一個 SQS queue，依 message attributes 識別自己要的工作",
      "SNS topic 直接訂閱三個 HTTP endpoints，不建立各自工作緩衝",
      "將三服務放進同一個 ASG，透過 ALB round robin 傳遞事件"
    ],
    "answers": [
      0
    ],
    "explanation": "Fan-out 加各自耐久佇列，使每個服務收到獨立工作副本，並可獨立累積、重試與擴縮。",
    "optionExplanations": [
      "正確：每個服務有獨立副本與失敗隔離。",
      "同 queue 是競爭消費，不能保證三個服務都收到每筆事件。",
      "缺少各服務獨立的長時間工作緩衝，需額外設計持久化與失敗處理。",
      "ALB 分散請求，不將每筆事件複製給所有服務。"
    ],
    "source": "https://docs.aws.amazon.com/sns/latest/dg/sns-sqs-as-subscriber.html"
  },
  {
    "id": "Q038",
    "domain": "D2",
    "topic": "EventBridge",
    "question": "平台接收多個 AWS 與 SaaS 來源的結構化事件，要依 source、detail-type 和 detail 欄位將事件送到不同目標。目標是避免維護事件路由程式。應選？",
    "options": [
      "用單一 SQS queue，讓所有消費者取得訊息後自行檢查並丟棄不匹配工作",
      "建立 Kinesis Data Streams，要求每個消費者自行實作所有內容路由",
      "EventBridge event bus 與 event pattern rules",
      "用 ALB path-based routing 直接匹配非 HTTP 事件的 JSON detail 欄位"
    ],
    "answers": [
      2
    ],
    "explanation": "EventBridge 對結構化事件提供內容匹配與目標路由，適合不想自行維護事件分發邏輯的整合需求。",
    "optionExplanations": [
      "競爭消費及自行丟棄可能讓正確處理者收不到工作。",
      "可建置自訂處理，但增加題目希望避免的路由程式管理。",
      "正確：託管事件內容匹配。",
      "ALB 是 HTTP 請求路由，不是事件匯流排的 JSON 規則引擎。"
    ],
    "source": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html"
  },
  {
    "id": "Q039",
    "domain": "D2",
    "topic": "Step Functions",
    "question": "核貸流程要執行驗證、徵信、等待人工審批與最終付款，各步驟有不同重試政策，需可視化執行歷程。最低協調程式負擔的方案？",
    "options": [
      "將全部流程放在單次 Lambda，輪詢資料庫等待人工完成",
      "只用 EventBridge rules 串接事件，另以自建資料表維護流程進度、逾時與補償",
      "使用 Step Functions Standard workflow，配置分支、重試、逾時與適用的回呼等待",
      "用單一 SQS queue 的 visibility timeout 代表整個多步驟審批狀態"
    ],
    "answers": [
      2
    ],
    "explanation": "Step Functions 將長時間、多步驟與具狀態的協調顯式建模，降低自行實作重試、等待及進度追蹤的負擔。",
    "optionExplanations": [
      "單次執行有時間限制，忙等也浪費資源。",
      "可以設計事件編排，但增加自建協調及觀測的負擔。",
      "正確：有狀態且可觀察的流程協調。",
      "可見性逾時不是完整流程狀態機。"
    ],
    "source": "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html"
  },
  {
    "id": "Q040",
    "domain": "D2",
    "topic": "暖備援",
    "question": "企業要求 Region 中斷後快速恢復，預算可維持另一區域的小型完整系統。何種災備策略最符合？",
    "options": [
      "Pilot light，只保留核心資料與必要元件，應用多數容量待災難時建立",
      "Multi-site active-active，兩區域同時以完整容量接受正式流量",
      "Backup and restore，僅保留備份並於災難後建立全部服務",
      "Warm standby"
    ],
    "answers": [
      3
    ],
    "explanation": "Warm standby 預先運行縮小版完整環境，災難時擴容。能否達到 RTO/RPO 仍須實測。",
    "optionExplanations": [
      "不是題目已運行完整縮小環境的策略。",
      "屬於兩端主動服務，固定成本與設計不同。",
      "尚未運行完整備援系統，通常重建時間較長。",
      "正確：完整但縮小的備援。"
    ],
    "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html"
  },
  {
    "id": "Q041",
    "domain": "D2",
    "topic": "RTO 與 RPO",
    "question": "系統容許最多遺失 5 分鐘資料，且須於 30 分鐘恢復服務。哪兩項分別正確？（選 2 項）",
    "options": [
      "資料備份每 30 分鐘一次就必然符合 5 分鐘 RPO",
      "RPO 為 5 分鐘",
      "RTO 為 30 分鐘",
      "只要 DNS TTL 為 5 分鐘，就已證明資料庫 RPO 不超過 5 分鐘",
      "RTO 只計算新 EC2 啟動時間，不含資料還原與驗證"
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "RPO 描述可容忍的資料回溯時間，RTO 描述恢復服務的時間目標；兩者決定備份與備援設計。",
    "optionExplanations": [
      "30 分鐘備份間隔可能遺失超過 5 分鐘資料。",
      "正確：資料遺失時間目標。",
      "正確：服務恢復時間目標。",
      "DNS 快取時間與資料複寫／遺失目標不同。",
      "恢復服務的整體時間需包含必要還原與驗證。"
    ],
    "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html"
  },
  {
    "id": "Q042",
    "domain": "D2",
    "topic": "Route 53 Failover",
    "question": "企業有主站與預先備妥的災備站。平時所有 DNS 流量應回主站，只有主站健康檢查失敗才回備站；可接受 DNS 快取造成的切換延遲。應選？",
    "options": [
      "Route 53 failover routing，正確設定 primary/secondary 與健康檢查",
      "Route 53 weighted routing，主站與備站各設 50 權重",
      "Route 53 latency routing，讓使用者總是去網路延遲最低的站",
      "Route 53 geolocation routing，依使用者國家固定指定站台"
    ],
    "answers": [
      0
    ],
    "explanation": "Failover routing 直接表達主備模式；實際切換還受 TTL、快取和健康檢查閾值影響。",
    "optionExplanations": [
      "正確：健康狀態驅動主備回覆。",
      "50/50 會在健康時也將流量送備站。",
      "Latency 選擇低延遲位置，不等於固定主站優先。",
      "Geolocation 依地理位置，不直接表達題目主備優先需求。"
    ],
    "source": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html"
  },
  {
    "id": "Q043",
    "domain": "D2",
    "topic": "NAT 高可用",
    "question": "兩個 AZ 的私有子網共用 AZ-A 的單一 zonal NAT Gateway。要降低 AZ-A 中斷的影響，應怎麼做？",
    "options": [
      "各 AZ 設置 NAT Gateway，各私有子網優先路由到同 AZ 的 NAT",
      "保持單一 zonal NAT，但把第二 AZ 私有子網預設路由同時指向它",
      "只在第二 AZ 建立 NAT，卻不修改該 AZ 私有子網路由",
      "以兩個 NAT 共用單一 AZ 的方式取代原本 NAT"
    ],
    "answers": [
      0
    ],
    "explanation": "對 zonal NAT 設計，各 AZ 獨立出口可避免另一 AZ 中斷連帶失去對外連線，並減少跨 AZ 路徑。",
    "optionExplanations": [
      "正確：隔離出口故障範圍。",
      "仍依賴原 AZ 的單一出口。",
      "沒有導向新 NAT 的路由便無法使用它。",
      "兩個裝置仍共享單一 AZ 故障範圍。"
    ],
    "source": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html"
  },
  {
    "id": "Q044",
    "domain": "D2",
    "topic": "EFS 韌性",
    "question": "多 AZ 的 Linux Web workers 需共享 POSIX 檔案，並在單 AZ 故障時繼續存取。應選？",
    "options": [
      "選用 EFS One Zone，將其他 AZ 的 mount target 視為跨 AZ 資料副本",
      "使用單一 EBS io2 Multi-Attach，直接讓不同 AZ 的 EC2 同時掛載",
      "Regional EFS 並在各使用 AZ 建立 mount targets",
      "只在一台 EC2 提供 NFS，並用定期快照取代線上備援"
    ],
    "answers": [
      2
    ],
    "explanation": "Regional EFS 跨多 AZ 儲存，提供多主機共享檔案存取；應使用各 AZ 的 mount target 並正確設定 SG。",
    "optionExplanations": [
      "One Zone 的資料不因此變成 Regional 多 AZ 儲存。",
      "EBS volume 不能任意跨 AZ 掛載。",
      "正確：託管區域性共享檔案。",
      "快照可還原但不消除 NFS 主機的單點故障。"
    ],
    "source": "https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html"
  },
  {
    "id": "Q045",
    "domain": "D2",
    "topic": "備份治理",
    "question": "企業要為多帳戶 EC2 與 RDS 統一排程、保留與跨帳戶備份政策。最佳工具？",
    "options": [
      "只用 EBS Data Lifecycle Manager，就認定同時覆蓋 RDS 與全部跨帳戶備份政策",
      "AWS Backup 搭配 Organizations 支援的政策與備份保管庫",
      "只在每個 RDS 個別開啟 automated backups，其他資源手動管理",
      "各帳戶自行維護 cron scripts，沒有集中政策與合規報告"
    ],
    "answers": [
      1
    ],
    "explanation": "AWS Backup 集中管理受支援資源的保護政策與復原點；需確認各服務及區域的功能支援。",
    "optionExplanations": [
      "DLM 的適用範圍不等於統一跨服務備份。",
      "正確：集中備份治理。",
      "僅處理 RDS，缺乏題目所需集中跨資源治理。",
      "可自建但管理及稽核負擔較高。"
    ],
    "source": "https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html"
  },
  {
    "id": "Q046",
    "domain": "D2",
    "topic": "S3 跨區域複寫",
    "question": "企業要複寫新 S3 物件至另一區域。哪些設定是基本必要條件？（選 2 項）",
    "options": [
      "來源與目的貯體啟用版本控制",
      "只建立 Cross-Region Replication rule，假設不需要目的端版本控制",
      "用 S3 Event Notifications 指向目的 bucket，視為自動完整物件複寫",
      "僅為來源開啟 versioning，並假設 replication rule 會自動回溯所有舊物件",
      "設定 replication rule 與具有必要權限的角色"
    ],
    "answers": [
      0,
      4
    ],
    "explanation": "S3 replication 需要版本控制與複寫授權。歷史物件通常需另外用 Batch Replication 處理。",
    "optionExplanations": [
      "正確：雙方版本控制。",
      "來源與目的的版本控制都是必要條件。",
      "事件通知不會單憑目的 bucket 設定完成物件複寫。",
      "目的端也需版本控制，舊物件通常需 Batch Replication。",
      "正確：規則及授權。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html"
  },
  {
    "id": "Q047",
    "domain": "D2",
    "topic": "CloudFormation",
    "question": "公司希望災難時在另一區域重建一致的網路與應用資源，減少手動遺漏。最佳做法？",
    "options": [
      "只保存 golden AMI，認定它已包含 VPC、路由、IAM 與資料庫的完整重建規格",
      "以 CloudFormation 描述基礎設施並測試重建流程",
      "只建立 EC2 與 RDS snapshots，不記錄網路及服務依賴",
      "依人工 runbook 逐項在主控台建立資源，不進行模板驗證或重建演練"
    ],
    "answers": [
      1
    ],
    "explanation": "Infrastructure as Code 可重建基礎設施，但不自動備份業務資料；參數、祕密與區域差異仍須規劃。",
    "optionExplanations": [
      "AMI 主要保存主機映像，不包含完整帳戶基礎設施。",
      "正確：可重複的資源部署。",
      "資料副本不等於可重複的整體部署規格。",
      "人工方式較易遺漏，也缺乏可驗證的一致部署。"
    ],
    "source": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"
  },
  {
    "id": "Q048",
    "domain": "D2",
    "topic": "RDS Read Replica",
    "question": "RDS MySQL 主節點因大量唯讀報表 CPU 偏高。交易寫入量低，報表可接受數秒延遲，且應用能修改連線端點。哪個方案最直接擴展讀取？",
    "options": [
      "只啟用傳統 Multi-AZ DB instance deployment，將報表送到其單一 standby",
      "只在主節點前方新增 RDS Proxy，讓相同昂貴查詢都繼續在主節點執行",
      "建立 read replica，將報表連線導向 replica endpoint",
      "只增加自動備份的保留天數，讓報表從備份讀取即時 SQL"
    ],
    "answers": [
      2
    ],
    "explanation": "Read replica 將讀取工作卸載至獨立可讀副本；非同步複寫的延遲符合題目可接受範圍。",
    "optionExplanations": [
      "傳統單 standby 不服務應用讀取。",
      "Proxy 減少連線負擔，不會把查詢運算自動分散至新資料庫。",
      "正確：直接增加讀取運算容量。",
      "備份保留不提供可查詢的即時報表端點。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html"
  },
  {
    "id": "Q049",
    "domain": "D2",
    "topic": "Aurora Global Database",
    "question": "既有 Aurora 應用要以託管儲存層跨 Region 複寫支援跨洲本地讀取，並建立 Region 故障復原能力。應評估？",
    "options": [
      "Aurora Global Database",
      "只建立同 Region 的 Aurora Replicas，將讀取端點當成另一 Region 的本地入口",
      "只把 RDS Multi-AZ DB instance 的 standby 放在第二 AZ，視為跨 Region DR",
      "只在另一 Region 複製定期快照，讓使用者直接查詢尚未還原的快照"
    ],
    "answers": [
      0
    ],
    "explanation": "Aurora Global Database 提供跨區域複寫與區域讀取；實際 RPO/RTO 受配置及切換方式影響，不應假設永遠零遺失。",
    "optionExplanations": [
      "正確：跨區域 Aurora 架構。",
      "區域內 replicas 不提供另一 Region 本地資料庫副本。",
      "另一 AZ 仍屬同 Region。",
      "快照須還原，不是持續可讀的區域資料庫。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html"
  },
  {
    "id": "Q050",
    "domain": "D2",
    "topic": "ASG 自我修復",
    "question": "EC2 程序故障時作業系統仍運作，ALB 已把 target 判為 unhealthy，但 ASG 未替換它。應檢查？",
    "options": [
      "ASG 是否啟用 ELB health checks 並設定適當 grace period",
      "只縮短 ALB deregistration delay，認定它會自動改變 ASG 健康來源",
      "只調整 ASG CPU target tracking threshold，以 CPU 取代應用健康檢查",
      "把 ASG desired capacity 從 2 提高至 3，卻維持只用 EC2 health checks"
    ],
    "answers": [
      0
    ],
    "explanation": "ASG 若只使用 EC2 健康檢查，未必察覺應用層不健康；可整合 ELB 健康檢查觸發替換。",
    "optionExplanations": [
      "正確：納入應用健康訊號。",
      "連線排空設定不會自行啟用 ELB 健康檢查。",
      "CPU 擴縮不是應用故障替換機制。",
      "增加容量可能緩解影響，但不修正未替換不健康節點的原因。"
    ],
    "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html"
  },
  {
    "id": "Q051",
    "domain": "D2",
    "topic": "無狀態應用",
    "question": "ALB 後方 EC2 存放本機登入 session，擴縮或故障後使用者經常登出。最佳改善？",
    "options": [
      "只啟用 ALB sticky sessions，將登入資料繼續留在每台 EC2 本地",
      "只提高 ASG health check grace period，避免任何節點被替換",
      "將 session 外部化到具備適當韌性的 ElastiCache 或 DynamoDB",
      "把本機 session 改存同一台主機的 EBS，不建立共享資料層"
    ],
    "answers": [
      2
    ],
    "explanation": "將 session 與運算節點分離，節點可替換而不綁定登入狀態；選擇資料層時仍需考慮持久性與失效策略。",
    "optionExplanations": [
      "可維持正常節點黏著，但節點故障仍遺失本機狀態。",
      "無法解決狀態與節點綁定，還可能延長故障。",
      "正確：建立可替換運算節點。",
      "EBS 本地綁定不會自動供其他替代節點即時共用。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html"
  },
  {
    "id": "Q052",
    "domain": "D2",
    "topic": "Lambda 重試",
    "question": "S3 事件觸發 Lambda 寫入帳務，重試後發現重複扣款。哪些改善合理？（選 2 項）",
    "options": [
      "以交易識別碼建立冪等寫入",
      "僅設定 Lambda reserved concurrency 為 1，認定不會再處理相同事件",
      "以原子條件寫入防止同筆交易再次產生副作用",
      "收到事件立即標記成功，尚未完成扣款也永久忽略重試",
      "只減少函數重試次數，不在資料層辨識重複交易"
    ],
    "answers": [
      0,
      2
    ],
    "explanation": "事件與重試可能造成重複處理；冪等識別與原子資料更新共同避免重複業務副作用，不能只先查再無條件寫。",
    "optionExplanations": [
      "正確：辨識同筆業務交易。",
      "序列執行仍可能重複處理同筆事件。",
      "正確：防止併發重試造成重複更新。",
      "中途失敗可能導致漏處理，需原子地管理狀態與副作用。",
      "降低重試不保證沒有重複，也可能降低成功率。"
    ],
    "source": "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"
  },
  {
    "id": "Q053",
    "domain": "D2",
    "topic": "最小成本災備",
    "question": "小型內部系統允許數小時停機、可接受一天資料差距，目標最低固定費用。應優先考慮？",
    "options": [
      "維持另一 Region 完整暖備援，全天支付必要運算容量",
      "兩 Region active-active，投入衝突處理與全球路由",
      "備份與還原，並定期演練",
      "在第二 Region 預留最大峰值容量，即使大部分時間無流量"
    ],
    "answers": [
      2
    ],
    "explanation": "寬鬆 RTO/RPO 常適合 backup and restore。低成本不代表免演練，還原程序需證明符合時間目標。",
    "optionExplanations": [
      "可降低恢復時間，但固定成本高於此寬鬆目標通常所需。",
      "適合較嚴格需求，此題可能過度設計。",
      "正確：以較長恢復時間換取低成本。",
      "持續保留峰值容量不符合最低固定成本目標。"
    ],
    "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html"
  },
  {
    "id": "Q054",
    "domain": "D2",
    "topic": "資料庫遷移",
    "question": "公司要將內部資料庫遷往 RDS，切換前持續同步新增資料，以縮短停機。哪些步驟合適？（選 2 項）",
    "options": [
      "只做一次 full load，來源持續寫入期間不配置 CDC",
      "使用 DMS full load 加 CDC，確認來源日誌與權限",
      "假設 DMS 會無需檢查就正確轉換所有不相容預存程序",
      "DMS 顯示 full load 完成就立即切換，不檢查 replication lag 或資料驗證",
      "驗證 schema 相容性與資料一致性，再規劃切換"
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "DMS 可先載入再持續變更複寫；schema 轉換、驗證、延遲與切換仍需另行設計。",
    "optionExplanations": [
      "會遺漏 full load 後的變更。",
      "正確：降低最後切換資料差距。",
      "Schema 相容與不支援物件仍需評估轉換。",
      "複寫延遲與資料一致性影響實際切換安全性。",
      "正確：遷移不能只看傳輸完成。"
    ],
    "source": "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html"
  },
  {
    "id": "Q055",
    "domain": "D2",
    "topic": "Pilot Light",
    "question": "次要區域只運行核心資料複寫及必要基礎元件，災難時才建立大部分應用容量。此策略稱為？",
    "options": [
      "Warm standby，次要區域已運行完整縮小版應用",
      "Multi-site active-active，兩區域同時接正式流量",
      "Pilot light",
      "Backup and restore，沒有持續運行核心資料服務"
    ],
    "answers": [
      2
    ],
    "explanation": "Pilot light 保留最核心的資料與必要元件，恢復時啟動其他資源；不同於已運行完整縮小系統的暖備援。",
    "optionExplanations": [
      "題目大部分應用仍未啟動，與暖備援不同。",
      "題目次要區域未主動提供正式服務。",
      "正確：核心常駐，其餘待啟動。",
      "題目已有常駐核心資料複寫，不只是備份。"
    ],
    "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html"
  },
  {
    "id": "Q056",
    "domain": "D2",
    "topic": "健康檢查設計",
    "question": "ALB 的 /health 只回固定 200，即使應用無法讀取必要資料仍顯示健康。應如何改善？",
    "options": [
      "讓健康端點反映服務必要相依，搭配適當閾值並避免昂貴查詢",
      "只使用 EC2 status checks，判斷作業系統正常就視為應用可服務",
      "改為 TCP port health check，只確認 socket 可連線而不檢查必要功能",
      "只延長 unhealthy threshold，讓故障目標更久保持 healthy"
    ],
    "answers": [
      0
    ],
    "explanation": "健康訊號應代表可處理實際請求的能力；檢查太淺會送流量到壞節點，太重則可能加劇故障。",
    "optionExplanations": [
      "正確：建立有意義且輕量的檢查。",
      "EC2 健康不代表應用及必要相依正常。",
      "TCP 通可能仍無法完成實際業務請求。",
      "調整閾值不改善健康訊號內容，還可能延誤偵測。"
    ],
    "source": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html"
  },
  {
    "id": "Q057",
    "domain": "D3",
    "topic": "ALB 路由",
    "question": "平台共用 api.example.com，/orders/* 要送訂單服務，/images/* 要送圖片服務，需在入口終止 TLS。最少額外元件的方案？",
    "options": [
      "建立 NLB TCP listener，直接依 HTTP path 選 target group",
      "用 Route 53 在同一 hostname 下依 URL path 回覆不同 IP",
      "替兩服務加入同一 target group，讓健康檢查回傳路徑決定請求去向",
      "建立 ALB HTTPS listener，使用 path-based rules 導向不同 target groups"
    ],
    "answers": [
      3
    ],
    "explanation": "ALB 具備 HTTP/HTTPS 路徑規則，可在一個入口終止 TLS 並路由至不同目標群組。",
    "optionExplanations": [
      "NLB 不依 HTTP URL path 進行規則路由。",
      "DNS 查詢不包含 URL path。",
      "健康檢查決定目標健康，不決定每筆請求的業務路徑。",
      "正確：直接支援應用層路徑分流。"
    ],
    "source": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html"
  },
  {
    "id": "Q058",
    "domain": "D3",
    "topic": "NLB",
    "question": "B2B 服務使用自訂 TCP 協定，客戶必須把入口固定 IPv4 加入防火牆允許清單。後端 EC2 跨兩個 AZ。應選？",
    "options": [
      "Application Load Balancer，讓客戶永久允許目前 DNS 解析得到的 IP",
      "Route 53 simple record 直接指向 ASG 中當前兩台 EC2 的私有 IP",
      "CloudFront distribution，將自訂 TCP 封包當成快取物件轉送",
      "Network Load Balancer，為每個啟用 AZ 配置適當的固定 IP／Elastic IP"
    ],
    "answers": [
      3
    ],
    "explanation": "NLB 提供適用的第四層負載平衡與每 AZ 靜態入口 IP，符合自訂 TCP 與固定允許清單需求。",
    "optionExplanations": [
      "ALB 使用 HTTP/HTTPS，且不應固定使用其當前解析 IP。",
      "私有 IP 對外不可直接路由，節點替換也會改變。",
      "CloudFront 不代理任意自訂 TCP 協定。",
      "正確：協定與位址需求皆符合。"
    ],
    "source": "https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html"
  },
  {
    "id": "Q059",
    "domain": "D3",
    "topic": "EBS 效能",
    "question": "關鍵 OLTP 資料庫要在單 EC2 上執行，儲存需要持續 80,000 IOPS、低延遲與高耐久；instance 已確認支援所需 EBS 效能。應優先評估？",
    "options": [
      "gp3，一律只增加容量至 16 TiB 就會自動提供 80,000 IOPS",
      "st1 Throughput Optimized HDD，因交易需求主要是大量小型隨機 I/O",
      "io2 Block Express Provisioned IOPS SSD",
      "sc1 Cold HDD，將 burst credits 視為可持續高 IOPS 保證"
    ],
    "answers": [
      2
    ],
    "explanation": "io2 Block Express 面向高 IOPS、低延遲及高耐久交易工作負載。還應檢查實際區域、instance 支援與成本。",
    "optionExplanations": [
      "gp3 不因單純增加容量就自動獲得此 IOPS，且須確認其上限。",
      "st1 以大型循序吞吐為重點，不適合此小型隨機交易需求。",
      "正確：針對持續高 IOPS 關鍵資料庫。",
      "Cold HDD 與 burst credits 不能保證此持續 IOPS。"
    ],
    "source": "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html"
  },
  {
    "id": "Q060",
    "domain": "D3",
    "topic": "Linux 共享儲存",
    "question": "ASG 的多台 Linux workers 要同時讀寫相同目錄，需標準 NFS 存取。最佳選擇？",
    "options": [
      "各節點使用獨立 EBS volume，依靠相同目錄名稱自動同步",
      "Amazon EFS",
      "使用 FSx for Windows File Server，保持既有 NFS client 完全不變",
      "用 S3 REST API 取代檔案目錄，假設不需調整 POSIX 檔案呼叫"
    ],
    "answers": [
      1
    ],
    "explanation": "EFS 提供託管 NFS 檔案系統，適合多主機共享。S3 是物件 API，不能假設等同 POSIX 檔案系統。",
    "optionExplanations": [
      "相同目錄名稱不會讓獨立磁碟成為共享檔案系統。",
      "正確：標準 NFS 共享檔案。",
      "Windows SMB 與既有 NFS client 的介面不同。",
      "物件 API 與標準檔案系統語意不同。"
    ],
    "source": "https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html"
  },
  {
    "id": "Q061",
    "domain": "D3",
    "topic": "FSx for Lustre",
    "question": "HPC 團隊在 EC2 執行大量平行訓練前處理，既有程式要求共享 POSIX 檔案路徑、高吞吐，資料集原本位於 S3，需直接整合。最佳選擇？",
    "options": [
      "FSx for Windows File Server，以 SMB 提供 Linux 平行運算所需的 Lustre 語意",
      "將 S3 bucket 直接視為區塊裝置，無需任何存取層就掛成 POSIX 磁碟",
      "每台 EC2 使用獨立 EBS volume，不另設同步或共享機制",
      "FSx for Lustre，依工作負載選部署型態並連結 S3 repository"
    ],
    "answers": [
      3
    ],
    "explanation": "FSx for Lustre 為平行高效能檔案工作負載設計，並可與 S3 資料儲存庫整合。",
    "optionExplanations": [
      "SMB 檔案系統不等於此處要求的平行 Lustre 工作負載。",
      "S3 是物件儲存 API，不是可直接掛載的區塊裝置。",
      "獨立 EBS 不會自動提供共享命名空間及資料一致性。",
      "正確：同時符合共享 POSIX、高吞吐及 S3 整合。"
    ],
    "source": "https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html"
  },
  {
    "id": "Q062",
    "domain": "D3",
    "topic": "FSx for Windows",
    "question": "企業要遷移既有 Windows 檔案共享，應用不能改寫，要求 SMB、Active Directory 與 NTFS ACL 相容。應優先選？",
    "options": [
      "Amazon EFS，將既有 SMB 連線設定保持不變即可使用 NFS",
      "直接以 S3 REST API 取代共享目錄，但不修改任何檔案呼叫",
      "FSx for Lustre，將 Windows ACL 直接當成 Lustre 的原生 NTFS ACL",
      "FSx for Windows File Server，設定適當 AD 整合"
    ],
    "answers": [
      3
    ],
    "explanation": "FSx for Windows File Server 提供原生 Windows 檔案系統功能、SMB 與 AD 整合，符合不可改寫的傳統應用。",
    "optionExplanations": [
      "EFS 使用 NFS，不是保留 SMB 介面的直接替代。",
      "REST 物件 API 與原始檔案呼叫不同。",
      "Lustre 不提供題目要求的原生 NTFS/SMB 相容。",
      "正確：對應既有 Windows 檔案語意。"
    ],
    "source": "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html"
  },
  {
    "id": "Q063",
    "domain": "D3",
    "topic": "DynamoDB 一致性",
    "question": "購物車寫入後必須立即在同區域讀到最新值。哪些陳述正確？（選 2 項）",
    "options": [
      "不能假設 GSI 提供 strongly consistent reads",
      "對 GSI 指定 ConsistentRead=true，就可以強制讀到最新寫入",
      "只開啟 DynamoDB Streams，就讓所有 GSI 變成強一致讀取",
      "對支援的 base table 讀取要求 strongly consistent read",
      "把 DAX cache TTL 設為零，視為 GSI 已提供強一致保證"
    ],
    "answers": [
      0,
      3
    ],
    "explanation": "DynamoDB base table 與 LSI 支援強一致讀取；GSI 僅提供最終一致，應依查詢路徑規劃。",
    "optionExplanations": [
      "正確：GSI 需接受最終一致。",
      "GSI 不支援 strongly consistent reads。",
      "變更串流不改變 GSI 的一致性模型。",
      "正確：使用正確讀取一致性。",
      "快取設定不改變底層 GSI 一致性支援。"
    ],
    "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"
  },
  {
    "id": "Q064",
    "domain": "D3",
    "topic": "DynamoDB DAX",
    "question": "DynamoDB 產品目錄讀取遠多於寫入，大量請求讀相同項目，可接受最終一致。團隊希望以最少程式改動將熱讀延遲降至微秒等級。應評估？",
    "options": [
      "增加一個 GSI，仍以相同 partition key 查詢相同項目以取得記憶體快取",
      "啟用 DynamoDB Streams，讓 GetItem 自動由 stream 回覆",
      "DynamoDB Accelerator（DAX）並使用適用的 DAX client",
      "增加 read capacity 即可保證所有網路請求達到微秒延遲"
    ],
    "answers": [
      2
    ],
    "explanation": "DAX 是 DynamoDB 專用的記憶體快取，適合可接受最終一致的重複熱讀取。需要使用對應 client 並規劃快取語意。",
    "optionExplanations": [
      "GSI 是索引存取路徑，不是記憶體熱讀快取。",
      "Streams 提供變更事件，不直接替代 GetItem。",
      "正確：針對 DynamoDB 的低延遲讀取快取。",
      "增加容量可緩解節流，但不能保證這種延遲目標。"
    ],
    "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html"
  },
  {
    "id": "Q065",
    "domain": "D3",
    "topic": "ElastiCache",
    "question": "產品目錄在 RDS，大量重複讀取造成 CPU 壓力。可容忍短暫過期，應用可修改，且希望熱查詢不必每次執行資料庫 SQL。最佳策略？",
    "options": [
      "使用 ElastiCache 的 cache-aside，設 TTL 並處理失效",
      "只使用 RDS Proxy，認定同一 SQL 結果會自動被記憶體快取",
      "只增加 RDS read replicas，仍讓每筆熱查詢執行資料庫 SQL",
      "只提高 RDS 最大連線數，讓更多重複查詢同時執行"
    ],
    "answers": [
      0
    ],
    "explanation": "Cache-aside 先查快取、未命中再讀資料庫並回填，可降低熱讀取壓力；需要設計失效與快取穿透處理。",
    "optionExplanations": [
      "正確：卸載重複讀取。",
      "Proxy 池化連線，不是查詢結果快取。",
      "可分攤讀取，但沒有達到避免每次查資料庫的目標。",
      "可能增加資料庫競爭，不移除熱查詢工作量。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html"
  },
  {
    "id": "Q066",
    "domain": "D3",
    "topic": "CloudFront",
    "question": "全球讀者下載相同靜態教材，來源在單一 Region，遠端延遲高。首選？",
    "options": [
      "只建立 RDS read replica，認定它會在全球邊緣快取靜態教材",
      "CloudFront 快取內容於邊緣位置",
      "只用 S3 Transfer Acceleration，將上傳加速視為完整 CDN 快取",
      "只用 Route 53 latency routing 指向同一個 Region 的相同來源"
    ],
    "answers": [
      1
    ],
    "explanation": "CloudFront 將可快取內容放近使用者，降低來源流量與全球存取延遲，需正確設定快取鍵與 TTL。",
    "optionExplanations": [
      "資料庫副本不分發教材物件到 CDN 邊緣。",
      "正確：CDN 邊緣快取。",
      "Transfer Acceleration 不等於具完整快取控制的 CDN。",
      "只有單一實際來源時，DNS 路由不建立邊緣內容副本。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"
  },
  {
    "id": "Q067",
    "domain": "D3",
    "topic": "Global Accelerator",
    "question": "即時遊戲以 TCP/UDP 傳輸，後端分布多 Region。要求固定全球入口 IP、依健康切換端點，且資料無法快取。哪個服務最適合？",
    "options": [
      "AWS Global Accelerator standard accelerator",
      "CloudFront，將遊戲的 UDP 封包透過一般 HTTP cache behavior 轉送",
      "只用 Route 53 latency routing，宣告其會提供固定全球 Anycast IP 並消除所有 DNS 快取",
      "單區域 NLB，透過提高 TCP idle timeout 自動把用戶送到其他 Region"
    ],
    "answers": [
      0
    ],
    "explanation": "Global Accelerator 提供靜態 Anycast 入口與 AWS 全球網路路由，適用健康導向的多區域非快取流量。",
    "optionExplanations": [
      "正確：符合固定 IP 與多區域網路入口。",
      "CloudFront 不提供任意 UDP 遊戲流量的此種代理。",
      "Route 53 提供 DNS 路由，不提供題目要求的固定 Anycast 網路入口。",
      "單區域 NLB 不會自行建立跨區域全球路由。"
    ],
    "source": "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html"
  },
  {
    "id": "Q068",
    "domain": "D3",
    "topic": "RDS Proxy",
    "question": "Lambda 短時間大量併發，造成 RDS 連線數耗盡。哪些措施可一起降低壓力？（選 2 項）",
    "options": [
      "只增加 Lambda concurrency limit，不改連線池或資料庫容量",
      "每次 invocation 都重建多條資料庫連線，以避免任何重用",
      "在 ALB 啟用 HTTP keep-alive，認定會自動池化後端 RDS 連線",
      "依資料庫可承受能力限制函數併發並規劃擴縮",
      "使用 RDS Proxy 池化及管理連線"
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "RDS Proxy 緩解大量短連線負擔；併發控制進一步避免後端超載。Proxy 不代表資料庫可承受無限流量。",
    "optionExplanations": [
      "可能更快耗盡資料庫連線與資源。",
      "增加建立連線負擔，方向相反。",
      "HTTP 入口連線與應用至 RDS 的連線不同。",
      "正確：控制送往後端的工作量。",
      "正確：減少資料庫連線建立負擔。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html"
  },
  {
    "id": "Q069",
    "domain": "D3",
    "topic": "容器運算",
    "question": "小型團隊要執行長時間運作的容器服務，不想管理 EC2 節點作業系統。最佳選擇？",
    "options": [
      "ECS on AWS Fargate",
      "ECS on EC2，仍由團隊維護節點 AMI、OS patch 與容量",
      "EKS managed node groups，認定團隊完全不需關心任何節點作業系統更新",
      "在 Elastic Beanstalk 使用 EC2-based container 環境，認定底層不再存在節點配置"
    ],
    "answers": [
      0
    ],
    "explanation": "Fargate 提供容器的無伺服器運算容量，免管理底層 EC2 節點；仍需配置服務、網路及任務資源。",
    "optionExplanations": [
      "正確：託管容器運算。",
      "能執行容器，但不符合免管理 EC2 節點目標。",
      "Managed node groups 簡化管理，仍有節點及更新責任。",
      "Beanstalk 簡化部署，但與 Fargate 的無需管理節點模型不同。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html"
  },
  {
    "id": "Q070",
    "domain": "D3",
    "topic": "串流平台",
    "question": "感測器每秒送出事件，兩個自訂分析消費者需獨立重讀資料且保留同一裝置順序。哪些設計合適？（選 2 項）",
    "options": [
      "讓所有獨立分析服務競爭同一 SQS queue，保證每個服務都收到每筆資料",
      "以裝置 ID 隨機加鹽，卻假設不同 partition keys 仍保有裝置完整順序",
      "Kinesis Data Streams，以裝置 ID 作 partition key",
      "每個消費者自行管理讀取進度並規劃保留期",
      "只用 Data Firehose 寫入 S3，假設它同時提供自訂消費者的可重讀 shard checkpoints"
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "Kinesis 提供可重讀的資料串流，partition key 決定分區順序；應監控熱門分區並規劃容量。",
    "optionExplanations": [
      "競爭 queue 不會為每個獨立服務保留副本。",
      "不同 partition keys 不能假設仍有單裝置全序。",
      "正確：同 key 維持分區順序。",
      "正確：獨立消費與重讀。",
      "Firehose 的傳遞模型不等同 Kinesis Data Streams 的消費者串流。"
    ],
    "source": "https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html"
  },
  {
    "id": "Q071",
    "domain": "D3",
    "topic": "Firehose",
    "question": "應用日誌要以最少管理工作持續送至 S3，可接受緩衝延遲，不需自行管理串流消費者。最佳選擇？",
    "options": [
      "使用 Kinesis Data Streams，另自建 EC2 consumer 負責緩衝、重試與寫 S3",
      "Amazon Data Firehose",
      "使用 SQS，由團隊維護輪詢服務再批次寫 S3",
      "只將事件發布 SNS topic，不配置訂閱者或 S3 寫入元件"
    ],
    "answers": [
      1
    ],
    "explanation": "Data Firehose 提供託管資料傳遞到 S3 等目的地，可緩衝、依配置轉換資料，不等於自訂可重讀串流平台。",
    "optionExplanations": [
      "可行但需管理額外消費者，不符合最少管理目標。",
      "正確：託管持續資料傳遞。",
      "需自建題目希望避免的資料傳遞流程。",
      "SNS 發布本身不會直接完成此 S3 持續傳遞。"
    ],
    "source": "https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html"
  },
  {
    "id": "Q072",
    "domain": "D3",
    "topic": "Athena",
    "question": "分析師偶爾以 SQL 查詢 S3 中 Parquet 日誌，不想維護資料倉儲叢集。應選？",
    "options": [
      "Amazon Athena",
      "建立常駐 Redshift provisioned cluster，每次先把全部 S3 日誌載入",
      "在 EC2 安裝 Presto，自行處理叢集擴縮及修補",
      "把所有 Parquet 先逐列匯入 RDS，再由資料庫執行偶發查詢"
    ],
    "answers": [
      0
    ],
    "explanation": "Athena 可直接查詢 S3 資料，搭配資料目錄、分割區與列式格式提高效率。",
    "optionExplanations": [
      "正確：無伺服器互動式 SQL。",
      "可分析資料，但對偶發查詢有較多容量與載入管理。",
      "自建引擎違反免維護叢集目標。",
      "新增資料庫與匯入流程，並非直接查 S3 的低負擔方案。"
    ],
    "source": "https://docs.aws.amazon.com/athena/latest/ug/what-is.html"
  },
  {
    "id": "Q073",
    "domain": "D3",
    "topic": "Redshift",
    "question": "BI 團隊每天對大型整合資料執行複雜 OLAP join，需託管資料倉儲與分析效能。應評估？",
    "options": [
      "使用 DynamoDB Scan 直接執行大量多表關聯 OLAP joins",
      "只以 RDS read replicas 無限擴展，將 OLTP 架構視為專用大規模資料倉儲",
      "Amazon Redshift",
      "使用 ElastiCache 儲存原始表，認定快取本身提供完整資料倉儲 SQL 最佳化"
    ],
    "answers": [
      2
    ],
    "explanation": "Redshift 面向資料倉儲與分析工作負載，可依需求選擇部署模式並優化資料組織及查詢。",
    "optionExplanations": [
      "DynamoDB 不提供此種原生關聯 OLAP 查詢模型。",
      "RDS 可執行 SQL，但此大型整合分析工作適合專用倉儲。",
      "正確：託管分析資料倉儲。",
      "快取不等於具有倉儲查詢引擎的分析系統。"
    ],
    "source": "https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html"
  },
  {
    "id": "Q074",
    "domain": "D3",
    "topic": "EMR",
    "question": "資料團隊既有大量 Spark 作業與開源大數據工具，需要彈性執行環境。最佳服務？",
    "options": [
      "把既有 Spark jobs 全部改寫成 Athena SQL，認定無需程式調整",
      "直接在 Glue Data Catalog 註冊資料，視為已啟動 Spark 執行環境",
      "使用 Redshift 儲存資料，認定它會原生執行所有既有 Spark libraries",
      "Amazon EMR"
    ],
    "answers": [
      3
    ],
    "explanation": "EMR 提供執行 Spark 等開源大數據框架的託管選項，適合移轉既有分散式分析作業。",
    "optionExplanations": [
      "可能適用部分查詢，但不是原樣執行既有 Spark 作業。",
      "Data Catalog 是中繼資料服務，不是 Spark 作業執行環境。",
      "倉儲 SQL 引擎不等同通用 Spark 執行平台。",
      "正確：開源大數據執行平台。"
    ],
    "source": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-what-is-emr.html"
  },
  {
    "id": "Q075",
    "domain": "D3",
    "topic": "DataSync",
    "question": "企業有數百 TB NFS 檔案要透過既有高速網路遷至 EFS，需增量同步與傳輸驗證。應選？",
    "options": [
      "以 DMS full load 遷移 NFS 檔案，視為一般檔案同步服務",
      "只部署 S3 File Gateway，但不建立讀取來源 NFS 的資料搬移流程",
      "以手動 rsync scripts 自建排程、驗證、重試與監控",
      "AWS DataSync"
    ],
    "answers": [
      3
    ],
    "explanation": "DataSync 自動化檔案或物件資料傳輸，可執行增量複製與驗證；須依來源目的配置適當連線與代理。",
    "optionExplanations": [
      "DMS 面向資料庫遷移，不是一般 NFS 到 EFS 同步。",
      "Gateway 提供檔案介面，不會自行完成此來源掃描遷移。",
      "可以自建，但維護負擔高於託管 DataSync。",
      "正確：大規模資料搬遷。"
    ],
    "source": "https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html"
  },
  {
    "id": "Q076",
    "domain": "D3",
    "topic": "Transit Gateway",
    "question": "企業有數十個 VPC 與內部機房，Peering 網狀連線管理困難。最佳網路簡化方案？",
    "options": [
      "為每對 VPC 建 Peering，讓全網狀路由隨 VPC 數量增加",
      "Transit Gateway 作中心輻射式連線，設計路由表隔離",
      "以一個中心 VPC 的 Peering 自動傳遞其他 VPC 的流量",
      "為所有 VPC 只建立 PrivateLink interface endpoints，視為完整 IP 網段間路由"
    ],
    "answers": [
      1
    ],
    "explanation": "Transit Gateway 集中連接 VPC 與混合網路，透過路由表管理可達性；Peering 不提供傳遞式路由。",
    "optionExplanations": [
      "可連通但連線與路由管理快速增加。",
      "正確：集中式網路樞紐。",
      "VPC Peering 不提供傳遞式路由。",
      "PrivateLink 提供服務連線，不取代此一般多網段路由樞紐。"
    ],
    "source": "https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html"
  },
  {
    "id": "Q077",
    "domain": "D3",
    "topic": "S3 大檔案上傳",
    "question": "跨洲使用者上傳大型影片，常因連線中斷重傳整檔。哪些措施可改善？（選 2 項）",
    "options": [
      "只使用單次 PutObject 並把 timeout 設很長，每次中斷仍重傳整檔",
      "只開啟 S3 versioning，假設可自動續傳中斷的上傳",
      "只把 CloudFront 設成長 TTL，認定它可分段續傳所有來源上傳",
      "使用 multipart upload，個別重試失敗的 parts",
      "評估 S3 Transfer Acceleration，實測跨洲路徑效益"
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "Multipart 降低失敗重傳成本，Transfer Acceleration 可改善部分遠距離傳輸；需測試並評估額外費用。",
    "optionExplanations": [
      "未解決整檔重傳成本與失敗範圍。",
      "Versioning 保存成功物件版本，不續傳未完成請求。",
      "下載快取 TTL 不取代上傳 multipart 機制。",
      "正確：只重試失敗部分。",
      "正確：評估邊緣加速路徑。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html"
  },
  {
    "id": "Q078",
    "domain": "D3",
    "topic": "Placement Group",
    "question": "同一 AZ 的 HPC 節點需要低延遲、高節點間吞吐，且已能接受緊密放置帶來的故障風險。應選？",
    "options": [
      "Cluster placement group",
      "Spread placement group，優先讓所有 HPC 節點分散硬體而不是緊密放置",
      "Partition placement group，將低節點延遲視為其唯一首要設計目標",
      "把 HPC workers 分布多 Region，假設全球距離不影響節點間延遲"
    ],
    "answers": [
      0
    ],
    "explanation": "Cluster placement group 將節點緊密放置以優化節點間網路；它不等於跨 AZ 高可用設計。",
    "optionExplanations": [
      "正確：以網路效能為重點。",
      "Spread 重點為降低相關硬體故障，不是此緊密網路需求。",
      "Partition 重點是分區故障隔離，不能直接等同 cluster 網路最佳化。",
      "跨 Region 往返延遲不符合此低延遲運算需求。"
    ],
    "source": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html"
  },
  {
    "id": "Q079",
    "domain": "D3",
    "topic": "Lambda 效能",
    "question": "API 的 Lambda 因每次建立 SDK client 與新連線而增加延遲。應優先如何改善？",
    "options": [
      "在 handler 每次建立新 SDK client，並禁止所有連線重用",
      "單純增加函數 timeout，認定建立連線延遲會因此下降",
      "在 handler 外初始化可安全重用的 client，搭配連線重用",
      "以全域變數快取每位使用者 token，讓後續不同用戶重用同一驗證狀態"
    ],
    "answers": [
      2
    ],
    "explanation": "執行環境可重用時，handler 外初始化可減少重複工作；不得假設環境永久存在，也應避免跨用戶狀態洩漏。",
    "optionExplanations": [
      "維持原本的重複初始化負擔。",
      "Timeout 是可執行時間上限，不是降低連線延遲機制。",
      "正確：重用無用戶私密狀態的資源。",
      "可能造成跨使用者敏感狀態洩漏。"
    ],
    "source": "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"
  },
  {
    "id": "Q080",
    "domain": "D3",
    "topic": "擴縮指標",
    "question": "SQS workers 的 CPU 常偏低但佇列大量累積，目標是控制每台機器待處理工作量。哪些措施合理？（選 2 項）",
    "options": [
      "只按 CPU target tracking 擴縮，忽略佇列積壓與等待時間",
      "只按 queue 總訊息數維持固定 target，不考慮目前 worker 數或處理速率",
      "把 SQS retention period 當成每台 worker 可接受 backlog 的直接指標",
      "以每個運作中 instance 的 backlog 作自訂擴縮指標",
      "根據平均處理時間與可容忍等待時間設定 backlog target"
    ],
    "answers": [
      3,
      4
    ],
    "explanation": "工作佇列的壓力可能不反映在 CPU。Backlog per instance 與訊息年齡能更貼近處理能力及等待目標。",
    "optionExplanations": [
      "CPU 無法充分代表此工作型態的壓力。",
      "總數不反映單節點負載及所需等待目標。",
      "保留期是訊息保存限制，不是處理能力指標。",
      "正確：衡量單節點未處理負載。",
      "正確：讓指標連結服務目標。"
    ],
    "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html"
  },
  {
    "id": "Q081",
    "domain": "D4",
    "topic": "S3 封存",
    "question": "法規資料需保存七年，預估每年不到一次還原，容許 48 小時內取得資料，且物件會保存超過最短儲存期。目標最低長期儲存費，先評估何者？",
    "options": [
      "S3 Glacier Instant Retrieval，因為取回可等兩天所以即時存取通常最省儲存費",
      "S3 Standard-IA，因為必須保存七年就不能使用封存類別",
      "S3 One Zone-IA，因為它保證跨多 AZ 保存法規唯一副本",
      "S3 Glacier Deep Archive"
    ],
    "answers": [
      3
    ],
    "explanation": "Deep Archive 適合極低頻且可等待還原的長期封存；最終需比較儲存、請求、取回與最短保留相關費用。",
    "optionExplanations": [
      "Instant Retrieval 的即時能力非必要，通常付出較高儲存費。",
      "長保存期不妨礙使用適用封存類別。",
      "One Zone-IA 不跨多 AZ 儲存，不應以此假設保護唯一副本。",
      "正確：儲存成本與極低頻／可等待特性匹配。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html"
  },
  {
    "id": "Q082",
    "domain": "D4",
    "topic": "S3 Intelligent-Tiering",
    "question": "有數百萬個大於 128 KB 的 S3 物件，讀取模式無法預測，所有物件仍須毫秒級即時存取。團隊希望自動降低冷資料成本。應選？",
    "options": [
      "對所有物件 30 天後一律轉 Glacier Deep Archive，不追蹤實際存取",
      "S3 Intelligent-Tiering，維持即時存取層且不啟用需還原的可選封存層",
      "S3 Standard-IA，假設它會依每個物件存取模式自動移回 Standard",
      "Intelligent-Tiering 並強制啟用所有可選 Archive Access 層，假設所有層皆即時取回"
    ],
    "answers": [
      1
    ],
    "explanation": "Intelligent-Tiering 可在不改變即時讀取需求的前提下自動使用即時存取層；可選需還原封存層不符合此題限制。",
    "optionExplanations": [
      "固定轉 Deep Archive 會破壞即時取回需求。",
      "正確：自動分層且保留即時取回。",
      "Standard-IA 不提供這種依存取模式自動移回行為。",
      "可選封存存取層可能需要還原等待。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering-overview.html"
  },
  {
    "id": "Q083",
    "domain": "D4",
    "topic": "S3 Lifecycle",
    "question": "原始日誌只在前 30 天常用，90 天後僅法遵留存。哪些管理方式合適？（選 2 項）",
    "options": [
      "只刪除 current version 的 delete marker，假設所有舊版本與未完成分段都已清除",
      "把所有小物件立即轉至最深封存，不評估 transition requests 與最短保存期",
      "建立 Lifecycle transitions，依取回需求選儲存類別",
      "清理未完成 multipart uploads，必要時管理 noncurrent versions",
      "只縮短 CloudFront TTL，認定 S3 noncurrent versions 會隨快取到期刪除"
    ],
    "answers": [
      2,
      3
    ],
    "explanation": "Lifecycle 可依物件年齡管理儲存。版本控制下須處理非目前版本；轉層費與最低儲存期也會影響效益。",
    "optionExplanations": [
      "刪除標記、舊版本與未完成 multipart 是不同儲存項目。",
      "轉層及最低儲存相關費用可能抵銷節省。",
      "正確：讓儲存符合使用階段。",
      "正確：移除不必要保留成本。",
      "CDN 快取期限不管理 S3 歷史版本生命週期。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html"
  },
  {
    "id": "Q084",
    "domain": "D4",
    "topic": "Spot Instances",
    "question": "影像轉檔工作可中斷、會把進度 checkpoint 到 S3，且可由 SQS 重新派送。希望降低大規模尖峰運算成本。最佳方案？",
    "options": [
      "為全年最高尖峰購買三年 Savings Plans 承諾，即使尖峰每月僅出現一天",
      "全部使用 Dedicated Hosts，因為單一組織的批次工作必須獨占實體主機",
      "以多 instance types／AZ 的 Spot pools 執行 workers，處理中斷與重試",
      "先買 On-Demand Capacity Reservations，假設未搭配折扣承諾也會自動享 Spot 價格"
    ],
    "answers": [
      2
    ],
    "explanation": "可中斷且可重試的批次工作適合 Spot。多容量池與 checkpoint 減少中斷影響，不應為少見尖峰過度承諾。",
    "optionExplanations": [
      "大量低利用承諾可能使尖峰節省變成閒置支付。",
      "沒有授權或合規需求，專用主機並非最低成本選擇。",
      "正確：讓工作容錯能力換取成本優勢。",
      "Capacity Reservation 主要保留容量，不自動提供 Spot 折扣。"
    ],
    "source": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html"
  },
  {
    "id": "Q085",
    "domain": "D4",
    "topic": "Savings Plans",
    "question": "企業有持續運算基線，可承諾一年每小時支出，但將在 EC2、Fargate 與 Lambda 間調整，且 EC2 family／Region 會變。哪種折扣彈性最符合？",
    "options": [
      "EC2 Instance Savings Plans，固定某 Region 的 instance family",
      "Compute Savings Plans",
      "只購買單一 AZ 特定規格的 zonal Reserved Instances",
      "使用 On-Demand Capacity Reservations，假設可跨 Fargate 與 Lambda 抵扣每小時用量"
    ],
    "answers": [
      1
    ],
    "explanation": "Compute Savings Plans 的適用運算範圍能跨 EC2 family、Region，並涵蓋合資格的 Fargate 與 Lambda 用量。承諾仍需對應穩定基線。",
    "optionExplanations": [
      "EC2 Instance Savings Plans 的 Region／family 彈性較受限。",
      "正確：跨運算型態與 EC2 配置的彈性最高。",
      "Zonal RI 較固定，也不抵扣 Fargate／Lambda。",
      "容量保留不是跨服務的此種折扣承諾。"
    ],
    "source": "https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html"
  },
  {
    "id": "Q086",
    "domain": "D4",
    "topic": "Right-sizing",
    "question": "正式 EC2 長期 CPU 與記憶體使用都很低，團隊卻準備直接承諾三年同規格。最佳先做什麼？",
    "options": [
      "先對目前規格承諾三年，再等一年後才蒐集利用率",
      "只看平均 CPU 就縮至最小規格，不檢查記憶體、尖峰或 I/O",
      "只把 On-Demand 改成不可中斷要求的 Spot，不評估業務容錯",
      "先分析指標並測試縮小或調整 family，再對穩定基線承諾折扣"
    ],
    "answers": [
      3
    ],
    "explanation": "先 right-size 避免把浪費用量鎖進承諾。測試時需涵蓋尖峰、記憶體、網路及儲存限制。",
    "optionExplanations": [
      "可能把過剩用量鎖進承諾。",
      "可能忽略其他瓶頸及尖峰，造成回歸。",
      "Spot 會中斷，需先確認工作負載能容忍。",
      "正確：先減浪費再買折扣。"
    ],
    "source": "https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/select-the-correct-resource-type-size-and-number.html"
  },
  {
    "id": "Q087",
    "domain": "D4",
    "topic": "S3 Endpoint 成本",
    "question": "私有 EC2 同區域大量讀寫 S3，所有流量都經 NAT Gateway。哪些做法最符合成本目標？（選 2 項）",
    "options": [
      "只把 NAT 換到另一 AZ，但所有 S3 流量仍經 NAT",
      "建立 S3 interface endpoints 並認定其小時及處理費一定比 gateway endpoint 低",
      "保留必要 bucket 與 endpoint policy，驗證流量不再走 NAT",
      "只在 endpoint policy 寫 Allow，但不建立 endpoint 或關聯路由表",
      "建立 S3 gateway endpoint 並關聯使用中的路由表"
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "S3 gateway endpoint 無額外 endpoint 費，可避免這部分流量經 NAT 的資料處理費；仍須檢查授權與路由。",
    "optionExplanations": [
      "不消除 NAT 處理費，可能增加跨 AZ 費。",
      "此同 VPC 同 Region 情境通常可使用無額外 endpoint 費的 gateway 類型。",
      "正確：確認路由與授權有效。",
      "政策本身不建立實際網路路徑。",
      "正確：使用適用的免費私有端點。"
    ],
    "source": "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html"
  },
  {
    "id": "Q088",
    "domain": "D4",
    "topic": "gp3 儲存",
    "question": "資料庫使用 gp2，需 6,000 IOPS 但僅需 200 GiB 容量。團隊不想為效能買大量未用空間。哪個方案應優先比較？",
    "options": [
      "把 gp2 擴為數 TiB，只為讓容量相關效能提高",
      "使用 gp3，獨立設定所需容量、IOPS 與吞吐",
      "換成 sc1，靠較高循序吞吐支撐小型隨機交易",
      "使用 io2 並預置遠高於需求的 IOPS，而不先估算 gp3 是否足夠"
    ],
    "answers": [
      1
    ],
    "explanation": "gp3 將容量與效能配置分離，可避免 gp2 為 IOPS 過度配置容量；仍需比較實際價格與 EC2/EBS 效能限制。",
    "optionExplanations": [
      "可以提高部分效能，但可能持續支付未使用容量。",
      "正確：以需求配置效能和容量。",
      "Cold HDD 不適合小型隨機 OLTP。",
      "io2 可滿足許多效能需求，但此題先過度配置通常不利成本。"
    ],
    "source": "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html"
  },
  {
    "id": "Q089",
    "domain": "D4",
    "topic": "DynamoDB 容量",
    "question": "新行動遊戲的 DynamoDB 流量無歷史資料，每天尖峰時間不定；團隊希望免預測與調整 provisioned capacity，願依實際讀寫請求計費。應選？",
    "options": [
      "Provisioned capacity 固定設定預期最低量且不使用擴縮",
      "On-demand capacity mode，仍設計良好 partition key 並監控配額／尖峰",
      "Provisioned capacity 為預期最大尖峰全天保留，忽略空閒利用率",
      "先建立大量 GSI，讓它們自動代替 base table 的容量規劃"
    ],
    "answers": [
      1
    ],
    "explanation": "On-demand 適合不確定及變動的請求流量，降低容量規劃負擔；不是免除良好資料模型、配額或熱分區設計。",
    "optionExplanations": [
      "最低固定容量可能使突增遭節流。",
      "正確：符合免 provisioned 規劃與按請求計費需求。",
      "可以預留但不符合降低容量規劃與閒置支出的目標。",
      "GSI 也有容量與計費，不替代容量模式選擇。"
    ],
    "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/capacity-mode.html"
  },
  {
    "id": "Q090",
    "domain": "D4",
    "topic": "停止閒置資源",
    "question": "開發 EC2 每天只用八小時且允許關機。最直接的持續節省方式？",
    "options": [
      "以排程停止不用的 instance，並盤點 EBS 等保留成本",
      "只從 SSH 登出，保持 EC2 running",
      "以作業系統 idle 狀態替代 instance stop，認定即不計運算費",
      "停止 EC2 後不盤點保留的 EBS、snapshot 或其他關聯資源費用"
    ],
    "answers": [
      0
    ],
    "explanation": "停止 EC2 可減少運算用量，但 EBS 等附屬資源仍可能計費，必須一起盤點。",
    "optionExplanations": [
      "正確：停止閒置計費資源。",
      "登出不停止 EC2 運算計費。",
      "Running 的低負載主機仍會產生運算費。",
      "可減少運算，但附屬儲存等仍可能持續計費。"
    ],
    "source": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html"
  },
  {
    "id": "Q091",
    "domain": "D4",
    "topic": "Athena 查詢成本",
    "question": "Athena 查詢 20 TB 的 CSV 日誌，分析師通常只讀近一天的三個欄位。結果正確但掃描費高。最佳優化？",
    "options": [
      "只把 CSV 切成更多小檔，保持全表掃描與相同未壓縮總資料量",
      "改用 SELECT *，只用 LIMIT 100 保證每次只掃描最初 100 列",
      "僅將 S3 Standard 改成 Standard-IA，宣告這會降低 Athena 每 TB 掃描單價",
      "轉換為壓縮 Parquet，依常用日期分割，查詢加入可裁剪分割區的條件"
    ],
    "answers": [
      3
    ],
    "explanation": "列式格式、壓縮與分割區裁剪可減少實際掃描資料，直接改善掃描型費用與查詢效能。",
    "optionExplanations": [
      "未減少資料掃描，過多小檔還可能增加額外負擔。",
      "LIMIT 不應被當成可保證少量掃描的成本機制。",
      "改儲存類別不會改變 Athena 的掃描計價，還可能增加取回費。",
      "正確：只讀需要的日期與欄位。"
    ],
    "source": "https://docs.aws.amazon.com/athena/latest/ug/performance-tuning-data-optimization-techniques.html"
  },
  {
    "id": "Q092",
    "domain": "D4",
    "topic": "預算告警",
    "question": "主管要求每月費用接近預算時通知，但不希望將告警誤認成絕對費用上限。應選？",
    "options": [
      "AWS Budgets 設定實際／預測門檻通知，理解告警有資料延遲",
      "只使用 Cost Explorer 每月人工檢查，不建立門檻通知",
      "只設定 CloudWatch billing alarm，認定它自動提供所有 forecast budget 能力",
      "只建立 Budgets 通知，就宣告任何服務都絕不可能超過預算金額"
    ],
    "answers": [
      0
    ],
    "explanation": "Budgets 可監控預算門檻並通知，也有可設定的動作；預算告警不是所有服務的即時硬性消費上限。",
    "optionExplanations": [
      "正確：適合預算通知需求。",
      "可分析歷史，但不符合自動接近預算通知。",
      "Billing alarm 與 Budgets 的預測／預算功能範圍不同。",
      "成本資料與通知有延遲，通知不等於全面硬上限。"
    ],
    "source": "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"
  },
  {
    "id": "Q093",
    "domain": "D4",
    "topic": "成本歸屬",
    "question": "多團隊共用 AWS 帳戶，需按專案分析歷史費用與支出趨勢。哪些措施合適？（選 2 項）",
    "options": [
      "使用 Cost Explorer 依已啟用標籤與服務分析成本",
      "只建立一般 tags，不啟用成本分配用途，就假設立即出現在所有費用分析維度",
      "把專案名稱僅寫進 EC2 Name 字串，不建立一致且可分組的成本標籤",
      "假設今天任意更改 tag 值，就會無條件重寫帳戶所有歷史成本歸屬",
      "制定一致 tags 並啟用適用的 cost allocation tags"
    ],
    "answers": [
      0,
      4
    ],
    "explanation": "一致標籤與成本分配啟用可支援費用分析，但標籤資料可用時間與歷史回填能力需依服務功能確認。",
    "optionExplanations": [
      "正確：分析趨勢與分組費用。",
      "成本分配標籤需要適當啟用與資料可用時間。",
      "自由文字命名不利一致跨服務成本分組。",
      "歷史回填與可用期間依服務功能，不能任意假設。",
      "正確：建立可計費分析的分類。"
    ],
    "source": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html"
  },
  {
    "id": "Q094",
    "domain": "D4",
    "topic": "CloudFront 與回源",
    "question": "大量重複靜態內容使來源傳輸與運算成本高，希望減少回源。應做？",
    "options": [
      "把 session ID 等每次不同的值加入所有靜態物件快取鍵",
      "對所有教材回應設定 Cache-Control: no-store",
      "配置 CloudFront，優化 cache policy 與可接受的 TTL",
      "只把來源 EC2 換更大規格，維持每次請求回源且無快取"
    ],
    "answers": [
      2
    ],
    "explanation": "有效快取可減少來源請求與資料傳送；CDN 自身仍計費，需依流量與地理分布比較總成本。",
    "optionExplanations": [
      "不必要的高基數快取鍵降低共用命中。",
      "禁止儲存會阻止所需快取效益。",
      "正確：提高有效快取命中率。",
      "可能提高成本，且未減少重複回源。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html"
  },
  {
    "id": "Q095",
    "domain": "D4",
    "topic": "S3 One Zone-IA",
    "question": "系統保存可從原圖重新產生的縮圖，存取少但仍須立即讀取，可承受單 AZ 資料遺失，僅需物件 API。應考慮哪個較低成本類別？",
    "options": [
      "S3 Standard，保留多 AZ 與頻繁即時存取能力，即使縮圖可重新產生",
      "S3 One Zone-IA",
      "S3 Glacier Deep Archive，即使應用仍要隨時立即讀取縮圖",
      "EFS Regional，為只需物件 API 的縮圖增加 NFS 共享功能"
    ],
    "answers": [
      1
    ],
    "explanation": "One Zone-IA 可用於可重建且低頻的資料；單 AZ 儲存風險不適合唯一不可重建副本。",
    "optionExplanations": [
      "可使用但不利用此可重建低頻資料的較低成本選項。",
      "正確：需求容許單 AZ 風險。",
      "取回等待不符合即時讀取縮圖需求。",
      "增加非必要檔案介面與費用，通常不利此物件情境。"
    ],
    "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html"
  },
  {
    "id": "Q096",
    "domain": "D4",
    "topic": "混合檔案儲存",
    "question": "內部應用須保留 SMB 存取，但希望把檔案持久化至 S3 並在本地快取常用內容。最佳選擇？",
    "options": [
      "S3 Transfer Acceleration，讓既有 SMB client 不經 gateway 就直接掛載 S3",
      "Volume Gateway，以 iSCSI block interface 取代 SMB，且不修改既有應用",
      "S3 File Gateway",
      "DataSync，認定排程傳輸工具會自動成為可供應用掛載的 SMB 本地快取"
    ],
    "answers": [
      2
    ],
    "explanation": "S3 File Gateway 提供 NFS/SMB 檔案介面並以 S3 為後端，透過本地快取降低常用資料的存取延遲。",
    "optionExplanations": [
      "加速傳輸不提供 SMB 檔案共享介面。",
      "Block interface 與既有 SMB 檔案呼叫不同。",
      "正確：檔案介面加 S3 後端。",
      "DataSync 搬移資料，不直接充當此持續檔案介面。"
    ],
    "source": "https://docs.aws.amazon.com/filegateway/latest/files3/what-is-file-s3.html"
  },
  {
    "id": "Q097",
    "domain": "D4",
    "topic": "網路傳輸成本",
    "question": "同 AZ 可完成的高流量服務卻反覆繞到另一 AZ 的中介元件，費用提高。最佳處理原則？",
    "options": [
      "將所有服務集中單 AZ 而不重新檢查既有容錯需求",
      "只更換成更大型 EC2，保持跨 AZ 高流量路徑不變",
      "只購買 Compute Savings Plans，認定會折抵所有跨 AZ 與 NAT 資料處理費",
      "分析路徑與跨 AZ 費用，在維持韌性下優先使用同 AZ 路徑"
    ],
    "answers": [
      3
    ],
    "explanation": "成本優化應辨識跨 AZ、NAT 與資料外傳等路徑成本，同時保留所需可用性，避免為省費而引入單點。",
    "optionExplanations": [
      "可能降低費用但破壞韌性需求，不能只看單項費用。",
      "運算規格不修正不必要的網路路徑。",
      "Compute 折扣不等於此類網路費用全額抵扣。",
      "正確：以量測改善流量路徑。"
    ],
    "source": "https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/cost_data_transfer_modeling.html"
  },
  {
    "id": "Q098",
    "domain": "D4",
    "topic": "Serverless 間歇負載",
    "question": "每天只有少量短時間 API 請求，團隊不想支付全天候閒置主機。應優先評估？",
    "options": [
      "全天保留依最高尖峰配置的 EC2，將低平均用量視為不計費",
      "API Gateway 加 Lambda，依實際用量評估總費用",
      "預先為最高尖峰購買長期運算承諾，不估算低利用率時的未使用承諾",
      "使用 Dedicated Host 專用容量，雖沒有特殊授權或合規需求"
    ],
    "answers": [
      1
    ],
    "explanation": "間歇短請求常適合用量型無伺服器服務；仍需評估請求量、執行時間、延遲與相關服務費用。",
    "optionExplanations": [
      "Running 運算容量即使閒置仍有費用。",
      "正確：降低閒置容量。",
      "很低的間歇用量可能造成大量承諾浪費。",
      "通常增加固定容量成本，與此需求不匹配。"
    ],
    "source": "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"
  },
  {
    "id": "Q099",
    "domain": "D4",
    "topic": "穩定工作負載",
    "question": "公司已有 right-size 後的固定 EC2 基線與可中斷批次尖峰。哪兩種採購配置最合理？（選 2 項）",
    "options": [
      "依極少出現的尖峰最高量購買長期承諾，保證平時也付出該承諾",
      "為可預測基線評估 Savings Plans 或適用 RI",
      "為可中斷且可重試尖峰評估 Spot，保留必要彈性",
      "僅有 Savings Plans 就視為所有 Region、AZ 的尖峰容量都受保證",
      "為了提高承諾利用率，把不可中斷資料庫與可中斷批次全放同一 Spot pool"
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "依負載特性組合承諾折扣與彈性容量，通常比所有用量採同一模式合理；折扣不等於容量保證。",
    "optionExplanations": [
      "過度承諾可能比保留峰值彈性更昂貴。",
      "正確：承諾穩定可預測用量。",
      "正確：以可中斷性換取低成本。",
      "Savings Plans 是折扣承諾，不是所有地點的容量保證。",
      "不同中斷容忍需求不應如此混合配置。"
    ],
    "source": "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html"
  },
  {
    "id": "Q100",
    "domain": "D4",
    "topic": "DynamoDB 穩定容量",
    "question": "DynamoDB 已運行半年，工作日流量穩定且可預測，目標在滿足尖峰下比較更低成本模式。應評估？",
    "options": [
      "僅按最低離峰用量固定 provisioned capacity，不使用擴縮",
      "Provisioned capacity 搭配 Auto Scaling，與 on-demand 以實際用量比較",
      "將所有 Query 改為全表 Scan，假設可減少固定流量的讀取成本",
      "增加多個重複 GSI，認定能免費分散 base table 讀寫而無額外容量費"
    ],
    "answers": [
      1
    ],
    "explanation": "可預測用量可評估 provisioned 加 Auto Scaling，但成本優勢須依實際讀寫量、利用率與擴縮行為計算。",
    "optionExplanations": [
      "可能在尖峰節流，不符合滿足業務需求。",
      "正確：以可預測性評估容量模式。",
      "Scan 常讀取更多不必要資料，可能增加消耗。",
      "GSI 有自己的儲存及讀寫成本，不是免費容量。"
    ],
    "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/capacity-mode.html"
  }
];
