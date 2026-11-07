/* 原創繁體中文課程。官方文件為延伸閱讀；查核基準 2026-11-07。 */
window.CURRICULUM = (() => {
  const lessons = [];
  const s = (title, body, ...bullets) => ({ title, body, bullets });
  const add = (id, title, domain, minutes, summary, objectives, sections, scenario, pitfalls, recap, links) => lessons.push({id,title,domain,minutes,summary,objectives,sections,scenario:{problem:scenario[0],solution:scenario[1],why:scenario[2]},pitfalls,recap,sources:links.map(([title,url])=>({title,url}))});
  add('foundations','第一課：網站怎麼運作，雲端幫你做什麼？','D0',25,'不用先懂 AWS。從打開一個訂餐網站開始，理解伺服器、資料儲存與雲端，再一步步認識 Region 和 AZ。',
  ['說出網站的程式、運算與資料各自做什麼','用城市與機房的差別理解 Region 和 AZ','分清備援與備份，解釋如何減少網站中斷'],[
    s('從需求開始，而不是從服務開始','架構題通常同時給出延遲、可用性、資料合規與營運負擔。先畫出使用者、應用程式與資料的流向，再找最嚴格的限制。最低成本只在滿足所有必要條件的方案之間比較。','列出硬性條件：資料駐留、協定、RTO、RPO。','標註優先目標：最低營運負擔、最低延遲或最低費用。'),
    s('Region、AZ 與故障邊界','Region 是地理區域，內有多個隔離的 Availability Zone。把應用分散到不同 AZ 能降低單一資料中心故障的影響；跨 Region 才能處理整個 Region 不可用的情境。邊緣節點主要服務內容傳遞與流量入口。','子網路只屬於一個 AZ；VPC 橫跨同一 Region 的 AZ。','多 AZ 不能直接等同跨 Region 災難復原。'),
    s('六大支柱','Well-Architected 包括營運卓越、安全性、可靠性、效能效率、成本最佳化與永續性。考試常要求你在其中做取捨：自動化可能增加前期工作，卻減少人為錯誤；備援增加費用，卻縮短中斷時間。','以監控、程序及自動復原支援營運。','避免把高規格機器當成所有效能問題的答案。'),
    s('共用責任與服務抽象層','AWS 負責雲端本身的基礎設施安全；客戶負責雲端內的資料與權限。EC2 的作業系統更新由客戶處理，RDS 由服務承擔更多維護，但客戶仍要設定網路、帳號、備份策略與應用安全。','託管服務減少維運，沒有消除客戶責任。','把可用性、耐久性與備份分開評估。')
  ],['電商不能因單一 AZ 故障而停止下單。','使用跨 AZ 的負載平衡與運算層，資料層採支援自動容錯的部署。','故障域是 AZ，所以先設計多 AZ；另依業務需求評估跨 Region。'],['把所有服務都當成全球服務。','認為託管服務不必管理權限。','只追求最便宜而忽略硬性需求。'],['先識別限制，再選服務。','多 AZ 對應 AZ 故障。','責任隨服務抽象層而改變。'],[['AWS Well-Architected','https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html'],['共用責任模式','https://aws.amazon.com/compliance/shared-responsibility-model/']]);

  add('exam-map','考綱地圖與情境題解法','D0',20,'把四大領域變成可執行的學習路線，並理解官方分數與練習正確率的差別。',
  ['對照四領域與任務','辨識單選及多選限制','建立錯題迭代流程'],[
    s('考試結構','SAA-C03 官方考試共 65 題、標準時間 130 分鐘，包含單選與多選。50 題計分，另 15 題為未標示的不計分題。不要花時間猜哪一題不計分，所有題目都應認真作答。','單選通常四個選項選一；多選依題目要求選指定數量。','720 是 100–1000 量尺中的及格分數，不能直接換算成答對 72%。'),
    s('四大領域的讀法','目前官方指南權重為安全 30%、韌性 26%、高效能 24%、成本最佳化 20%。同一服務可能跨多領域：S3 同時涉及權限、耐久性、吞吐量和儲存級別。課程依主要考點分類，複習時應交叉連結。','安全：身分、網路隔離、資料保護。','韌性：解耦、擴展、容錯、災備；效能與成本則比較工作負載適配。'),
    s('四步解題','先抓結果，再抓約束，然後比較選項，最後檢查是否增加不必要工作。題目若強調最少營運負擔，通常偏向合適的託管方案；若要求既有商用軟體授權或核心功能，則要保留相容性。','圈出必須、最低、最少、立即、依序等字眼。','逐項說明錯誤選項違反哪個條件，避免憑熟悉度選答案。'),
    s('學習與驗收','先讀課程，再畫資料流，最後做情境題。把錯題拆成知識不足、題意判讀、忽略限制三類。本站題目為原創練習，模擬分數只反映本站題庫表現，不預測官方考試結果。','每個核心服務至少能說明用途、限制、替代方案。','考前用官方指南與官方練習題再次核對範圍。')
  ],['模擬考答對 75%，是否保證官方通過？','不能；檢查領域弱點並補齊誤判理由，再用不同題目驗收。','AWS 採量尺分數，題目難度和計分方法與本站不同。'],['把 720 寫成 72% 及格。','認為某個領域必須各自及格。','背誦答案而沒有理解限制。'],['65 題、130 分鐘。','四領域 30/26/24/20。','用解釋排除法檢驗理解。'],[['官方考試指南','https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html'],['官方認證頁','https://aws.amazon.com/certification/certified-solutions-architect-associate/']]);

  add('iam','IAM：最小權限與政策判讀','D1',35,'用身分政策、資源政策、角色與明確拒絕設計最小權限。',
  ['讀懂 IAM policy 元素','區分權限政策與信任政策','排查 AccessDenied'],[
    s('政策是一份授權規則','政策包含 Effect、Action、Resource 與可選的 Condition。身分政策附加到使用者、群組或角色；資源政策附加在例如 S3 bucket 上。先確定誰做什麼、作用在哪個 ARN，再縮小範圍。','Action 避免不必要的萬用字元。','Condition 可限制來源、標籤、TLS 或組織範圍。'),
    s('角色與臨時憑證','角色本身不保存給人長期使用的密碼。受信任的主體透過 STS 取得有限期限憑證。EC2、Lambda 等工作負載應使用服務角色，不要把使用者 Access Key 寫入程式碼或 AMI。','信任政策決定誰能 AssumeRole。','權限政策決定取得角色後可以做什麼。'),
    s('Allow、Deny 與邊界','預設為隱含拒絕；適用政策中的明確 Deny 優先於 Allow。SCP 和 permissions boundary 是權限上限，並不自行授權。資源政策直接授權給不同種類 principal 的細節不同，不可把所有情況簡化成單一交集。','先找明確 Deny，再檢查實際 Allow 與限制。','跨帳號通常需要來源身分允許及目標資源／角色的信任。'),
    s('建立可維護的安全基線','人員使用聯邦登入、短期憑證與 MFA；root 保留給必要的帳號工作並保護其登入方式。使用 IAM Access Analyzer 檢查外部存取，依實際需求收斂政策，並用 CloudTrail 追蹤 API。','群組整理使用者權限，群組不能被 AssumeRole。','定期檢查未使用權限與憑證。')
  ],['EC2 需讀取指定 bucket 的報表，不能管理其他資源。','建立只允許該 bucket 物件 s3:GetObject 的角色，透過 instance profile 附加給 EC2。','角色提供自動更新的臨時憑證，避免管理長期金鑰。'],['只寫信任政策就以為能讀 S3。','把管理員權限給應用程式。','認為新加 Allow 能覆蓋明確 Deny。'],['信任與權限是不同問題。','明確 Deny 優先。','工作負載優先使用角色。'],[['IAM 政策評估','https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html'],['角色','https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html']]);

  add('organizations','Organizations、Control Tower 與企業登入','D1',25,'以多帳號隔離環境，使用組織護欄與集中身分管理。',
  ['設計 OU 與多帳號界線','理解 SCP 不授權','區分員工登入與客戶登入'],[
    s('帳號是強隔離邊界','把正式、測試、安全稽核與日誌放在合適的帳號，有助隔離權限、費用與配額。Organizations 提供集中帳務與階層式管理，OU 依治理需求分組，不必完全照公司部門結構。','集中付款不等於資源自動互通。','集中日誌帳號應限制一般工作負載管理員修改。'),
    s('SCP 的作用','服務控制政策限制組織成員帳號中的可用權限。即使 IAM 管理員有廣泛 Allow，仍會受適用 SCP 的限制。SCP 不會替使用者新增任何權限，也不是用來取代資源內細部授權。','先在測試 OU 驗證限制，避免一次影響所有成員。','理解組織根、OU、帳號階層的有效政策。'),
    s('Control Tower 與治理','Control Tower 協助建立受治理的多帳號環境，搭配 Account Factory 與控制措施。Organizations 是底層組織能力；Control Tower 提供較完整的落地區與治理流程，兩者並非互斥替代。','預防性控制阻止行為；偵測性控制找出偏差。','利用集中稽核與日誌降低單一帳號遭入侵的影響。'),
    s('IAM Identity Center 與 Cognito','Identity Center 適合員工集中登入多個 AWS 帳號與應用程式，透過 permission set 管理存取。Cognito 面向應用程式的終端使用者：user pool 處理驗證，identity pool 可換取受控的 AWS 臨時憑證。','企業 IdP 常透過 SAML 或支援的目錄整合。','不要為每個員工在每個帳號重複建立 IAM user。')
  ],['公司有 40 個帳號，希望員工一次登入且禁止測試環境建立特定服務。','使用 Identity Center 配置帳號權限，將測試帳號放入 OU 並附加 SCP。','集中登入處理身分；SCP 提供組織層級的上限。'],['把 SCP 當成 Allow 授權工具。','用 Cognito 代替企業多帳號治理。','以為合併帳務會共享所有資料。'],['多帳號提供隔離。','SCP 設上限。','Identity Center 管員工，Cognito 管應用使用者。'],[['Organizations SCP','https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html'],['IAM Identity Center','https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html'],['Control Tower','https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html']]);

  add('kms-secrets','KMS、TLS 與機密管理','D1',30,'同時設計靜態加密、傳輸加密、金鑰授權與憑證輪替。',
  ['解釋信封加密','辨識 KMS 權限依賴','選擇機密與憑證服務'],[
    s('分開看靜態與傳輸保護','靜態加密保護儲存媒體中的資料；TLS 保護傳輸中的內容。只開啟 S3 或 EBS 加密，不代表使用者到應用程式的網路連線也已加密。應用程式到資料庫亦應評估 TLS。','ACM 管理支援服務使用的 TLS 憑證。','HTTPS 需要憑證、適當 listener 與安全協定設定。'),
    s('信封加密的資料流','大量資料通常用資料金鑰在服務端或客戶端加密，再用 KMS key 保護該資料金鑰。KMS 提供集中金鑰管理與稽核，並不是把所有大型檔案直接送進 KMS API 加解密。','保存加密後資料金鑰，避免保存明文資料金鑰。','區分 AWS owned、AWS managed 與 customer managed key 的控制權。'),
    s('有資料權限仍可能無法解密','使用 SSE-KMS 的資料存取會涉及 KMS 授權。跨帳號分享時必須同時考慮資源政策與金鑰政策；AWS managed key 的跨帳號使用限制常使 customer managed key 成為合適選項。','金鑰政策、IAM 與 grants 各有角色。','輪替不代表立即重新加密所有既有資料。'),
    s('Secrets Manager 與 Parameter Store','Secrets Manager 適合需生命週期與輪替管理的資料庫密碼、API 機密；Parameter Store 適合集中設定，也能用 SecureString 保存敏感值。選擇時比較輪替整合、功能需求與費用，不能假設任何一項自動輪替所有自訂密碼。','程式執行時以角色讀取，避免寫進原始碼。','快取與輪替要配合，避免過期機密長期駐留。')
  ],['資料庫密碼需定期輪替，應用程式不能包含固定密碼。','使用 Secrets Manager 與支援的輪替流程，應用角色只允許讀取指定 secret。','集中保存與輪替減少憑證外洩與手動更新風險。'],['認為磁碟加密等於 HTTPS。','忽略 KMS key policy。','把 secret 放入公開環境檔。'],['加密需要資料、金鑰和授權一起設計。','TLS 與靜態加密互補。','機密應集中保存與輪替。'],[['KMS 密碼學基礎','https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html'],['Secrets Manager','https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html'],['ACM','https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html']]);

  add('vpc','VPC、子網路與路由','D1',35,'從封包的路徑理解公有與私有子網路，避免只背誦名稱。',
  ['計算 CIDR 與設計子網路','說明 IGW、NAT 的差異','逐跳排查連線問題'],[
    s('位址規劃','VPC 的 CIDR 決定可用位址範圍，子網路將它切分並放置於指定 AZ。預留擴展空間並避免與企業網路或其他 VPC 重疊，否則未來 peering、VPN 或 Transit Gateway 整合會更困難。','運算與資料層分開子網路，便於路由與防護。','每個子網路有 AWS 保留位址，不能直接把 CIDR 全部算作主機。'),
    s('公有與私有由路由決定','公有子網路具有通往 Internet Gateway 的路由，但 EC2 還需要公有 IPv4 或適當 IPv6、允許的安全規則才能與網際網路通訊。把 EC2 放入公有子網路不會自動讓它可被外界連線。','路由採最長前綴匹配。','VPC 內有 local 路由；安全群組與 NACL 仍然生效。'),
    s('NAT 的角色','IPv4 私有運算可透過公有 NAT Gateway 主動存取外部更新站，不接受網際網路任意建立入站連線。傳統區域性架構要考慮 NAT 的 AZ 故障域及跨 AZ 流量費；依區域與模式查官方部署選項。','公有 NAT Gateway 的對外路徑需要 IGW。','IPv6 僅需主動出站時可考慮 egress-only IGW。'),
    s('排查順序','從 DNS 解析、來源路由、目的路由、安全群組、NACL、服務 listener 與回程逐層檢查。不能只因安全群組開放就斷言網路通；例如回應流量若被無狀態 NACL 擋住仍會失敗。','Reachability Analyzer 分析網路組態路徑。','Flow Logs 觀察允許或拒絕的流量中繼資料。')
  ],['私有 EC2 需要下載套件，但不應接受外部主動連線。','規劃 NAT 出站路徑，EC2 保持私有位址並使用最小範圍安全規則。','NAT 讓連線由內部發起，路由與防火牆控制暴露面。'],['把公有子網路等同所有主機都有公網。','忘記檢查回程路由。','讓私有資料庫直接暴露網際網路。'],['先看路由，再看位址和規則。','一個子網路只在一個 AZ。','NAT 解決主動出站需求。'],[['VPC 子網路','https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html'],['NAT Gateway','https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html']]);

  add('network-security','安全群組、NACL 與私有端點','D1',30,'建立分層網路授權，讓 AWS 服務存取留在私有路徑。',
  ['比較 stateful 與 stateless','設計安全群組引用','選擇 gateway 或 interface endpoint'],[
    s('安全群組','安全群組套用於相關網路介面，是有狀態的允許規則集合。允許的連線，其回應流量可自動通過。多個群組的允許規則共同生效，不支援明確 Deny。','應用層只允許來自 ALB 安全群組的指定連接埠。','資料庫只允許來自應用安全群組的資料庫連接埠。'),
    s('Network ACL','NACL 作用於子網路邊界，無狀態並支援 Allow、Deny。依規則號碼由小到大匹配第一個符合項目，必須另外允許回程與必要的暫時連接埠。它適合粗粒度隔離與封鎖。','每個子網路同時關聯一個 NACL。','自訂 NACL 與預設 NACL 的初始規則不同。'),
    s('Gateway 與 interface endpoint','S3 與 DynamoDB 可使用 gateway endpoint，透過路由表導向服務。Interface endpoint 使用私有 IP 的網路介面及 PrivateLink，支援多種服務，通常有小時與資料處理費。','endpoint policy 限制透過該端點的存取，不能取代 IAM。','interface endpoint 的安全群組與 private DNS 也要配置。'),
    s('PrivateLink 與服務共享','PrivateLink 可讓消費端私有存取提供端服務，而不需要打通兩個 VPC 的所有路由。VPC peering 是較廣泛的 VPC 網路連線；選擇依實際流量與隔離需求，而不是把兩者當成完全相同。','連線存在仍需應用程式驗證與授權。','S3 bucket policy 可配合端點條件限制指定路徑。')
  ],['私有 EC2 大量存取 S3，希望減少 NAT 流量處理費。','在適用路由表建立 S3 gateway endpoint，再設定最小 endpoint policy 與 bucket policy。','符合私有服務存取需求，並可避開該 S3 流量的 NAT 路徑。'],['在安全群組尋找 Deny 規則。','NACL 只開入站不開回程。','以為 endpoint 建好就自動授權。'],['安全群組有狀態且只允許。','NACL 無狀態、依序比對。','私有路徑與授權是兩件事。'],[['VPC 基礎安全','https://docs.aws.amazon.com/vpc/latest/userguide/infrastructure-security.html'],['VPC endpoints','https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints.html']]);

  add('s3-security','S3 存取控制、版本與資料保護','D1',30,'把 bucket、物件、加密與 CloudFront 組成安全的物件儲存架構。',
  ['選擇 bucket policy 與角色','理解版本與 Object Lock','設計私有內容分發'],[
    s('物件模型與一致性','S3 儲存物件與 key，不是傳統可任意修改區塊的磁碟。成功的物件寫入、覆寫、刪除及列舉具有強一致性；跨 Region 複寫和 CDN 快取仍可能有各自的延遲，不能混為一談。','資料夾通常是 key 前綴的呈現。','大型上傳使用 multipart；中止未完成部分以控制費用。'),
    s('預設私有與明確授權','保持 Block Public Access，使用 IAM 和 bucket policy 精確授權。Object Ownership 的 bucket owner enforced 模式停用 ACL；現代設計優先政策管理。匿名公開不是讓 CloudFront 存取 S3 的必要條件。','s3:ListBucket 作用在 bucket ARN。','s3:GetObject 作用在物件 ARN，常需尾端 /*。'),
    s('版本、刪除與不可變','Versioning 保留不同版本，可復原誤覆寫或刪除；簡單刪除通常建立 delete marker。Object Lock 透過保留期限與 legal hold 提供 WORM 保護。版本保護不等於跨區災備，舊版本仍會產生費用。','依合規需求比較 governance 與 compliance 模式。','生命週期要同時規劃 current 與 noncurrent versions。'),
    s('預簽與邊緣保護','S3 presigned URL 提供有時效、依簽署者權限的物件操作。CloudFront OAC 控制 CloudFront 到 S3 origin 的權限；CloudFront signed URL 或 cookie 控制觀眾存取。這兩層的對象不同。','S3 靜態網站 endpoint 與 REST origin 的功能和安全模式不同。','加密選 SSE-S3、SSE-KMS 或客戶端方式，並核對金鑰權限。')
  ],['付費影片放 S3，使用者只能經 CDN 在有效期間觀看。','S3 保持私有，以 OAC 允許指定 CloudFront distribution，對觀眾簽發 signed URL 或 cookie。','OAC 保護來源；簽章限制觀眾，避免直接繞過 CDN。'],['把 CloudFront OAC 當成使用者登入。','以為 versioning 不會增加容量。','沿用 S3 最終一致性的舊觀念。'],['S3 是強一致的物件儲存。','來源保護與觀眾授權分層。','版本與不可變各處理不同風險。'],[['S3 介紹','https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html'],['CloudFront 私有內容','https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-overview.html'],['S3 Object Lock','https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html']]);

  add('security-services','WAF、Shield、偵測與合規工具','D1',25,'按照防護、偵測、稽核和設定合規分類安全服務。',
  ['選擇應用層與 DDoS 防護','比較 GuardDuty、Inspector、Macie','區分 CloudTrail 與 Config'],[
    s('WAF 與 Shield','WAF 使用 Web ACL 過濾支援入口的 HTTP/S 請求，可處理 SQL injection、跨站腳本特徵、IP 與速率規則。Shield 著重 DDoS 防護；Shield Standard 與進階付費能力的保障範圍不同。','WAF 不是通用 TCP 防火牆。','CDN、節流、快取與擴展共同建立縱深防禦。'),
    s('偵測服務的分工','GuardDuty 分析活動與威脅訊號找出可疑行為；Inspector 評估支援工作負載的漏洞與暴露風險；Macie 著重 S3 敏感資料探索。Security Hub 彙整安全發現與安全態勢。','可疑 API 或異常挖礦線索：思考 GuardDuty。','S3 個資分類：思考 Macie；漏洞：思考 Inspector。'),
    s('稽核與設定歷史','CloudTrail 記錄誰在何時對何種資源呼叫 API；Config 記錄支援資源的設定變化並評估規則。CloudWatch 監控指標與日誌。三者互補：行為、狀態與執行表現各有重點。','不是所有資料事件預設都記錄，應明確配置。','集中儲存並保護日誌，避免被受調查帳號刪改。'),
    s('自動回應與最小風險','發現不合規後可透過 EventBridge、Systems Manager 或 Lambda 執行修復。自動化必須限定範圍、可回復且留下稽核；例如隔離遭入侵主機前先保留證據與維持必要調查能力。','Systems Manager Session Manager 可減少公開 SSH 入口。','安全工具提供訊號，仍需回應流程與權限管理。')
  ],['稽核想知道安全群組何時改成對全網開放，以及是哪個角色修改。','以 Config 追蹤規則與設定歷史，使用 CloudTrail 找出修改 API 與呼叫主體。','Config 回答狀態變化，CloudTrail 回答操作來源。'],['用 WAF 保護任意資料庫協定。','把 Macie 當 EC2 漏洞掃描。','把 CloudWatch 指標當 API 稽核記錄。'],['防護、偵測、稽核分工。','CloudTrail 看行為，Config 看設定。','自動修復需要受限權限。'],[['WAF','https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html'],['GuardDuty','https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html'],['Config','https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html']]);

  add('ha','高可用、容錯與無狀態應用','D2',30,'讓故障成為可以被隔離、偵測及自動恢復的事件。',
  ['區分 HA 與 fault tolerance','消除單點故障','外部化應用狀態'],[
    s('可用性與故障域','高可用降低中斷時間，容錯則強調故障後仍持續運作。單一大型 EC2 即使規格很高，仍是故障單點。架構要涵蓋入口、運算、狀態、資料庫、網路和相依服務，不能只複製網頁伺服器。','觀察剩餘 AZ 是否仍有足夠容量。','服務配額與擴展速度也會限制恢復能力。'),
    s('無狀態運算','將 session、上傳檔案與持久資料移到共享或外部儲存，使請求能由任意健康執行個體處理。選擇 ElastiCache、DynamoDB、S3、EFS 等要依資料模型及一致性需求。','本機磁碟不應是唯一持久資料來源。','黏性工作階段可緩解相容問題，卻無法取代狀態外部化。'),
    s('健康檢查與恢復','負載平衡器把流量移出不健康目標，Auto Scaling 可替換不健康執行個體。健康檢查要反映服務可用性，但若把每個非核心相依都納入，可能在短暫故障時把所有目標一併判為失效。','就緒與存活檢查目的不同。','重試搭配退避與 jitter，避免重試風暴。'),
    s('解耦與降級','非同步佇列能緩衝突增並讓下游暫停而不直接丟失任務；熔斷和逾時隔離下游故障。非核心推薦功能故障時仍可完成付款，通常比把整個交易一起失敗更好。','以冪等處理重試造成的重複。','將超時、重試及死信佇列納入設計。')
  ],['兩台 Web 主機跨 AZ，但登入 session 僅保存在各自記憶體。','將 session 移到跨 AZ 可用的外部服務，再以 ALB 分散流量。','失去一台主機時，使用者不必依賴該主機上的唯一狀態。'],['把跨 AZ 運算誤認為整套系統都跨 AZ。','重試沒有上限。','黏性 session 當作災備。'],['每一層都要檢查單點。','狀態外部化支援替換與擴展。','故障隔離比盲目重試有效。'],[['可靠性支柱','https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html'],['Auto Scaling 健康檢查','https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html']]);

  add('elb','ALB、NLB 與健康路由','D2',30,'根據協定、路由能力與固定 IP 需求選擇負載平衡器。',
  ['比較 ALB 與 NLB','設計 listener 與 target group','理解連線與排空'],[
    s('ALB 的應用層能力','Application Load Balancer 處理 HTTP/S，可依主機名稱、路徑及其他支援條件將請求導向不同 target group。它適合多站台、微服務與容器動態目標，並能整合 TLS 與 WAF。','路徑 /api 與 /images 可送往不同服務。','在入口終止 TLS 後，仍可選擇對後端使用 HTTPS。'),
    s('NLB 的網路層能力','Network Load Balancer 適合 TCP、UDP 或 TLS 類型工作負載，以及需要固定入口 IP 的場景。它不提供 ALB 的 HTTP 路徑路由。若需求是部署網路安全設備，則另評估 Gateway Load Balancer。','以協定與功能需求優先做選擇。','固定 IP 不等於內容快取；兩者是不同問題。'),
    s('目標與健康檢查','listener 接收連線，規則決定 target group，target group 定義目標與健康檢查。跨多個 AZ 註冊健康目標並配置安全群組；健康檢查成功不代表業務交易一定成功，仍需要應用指標。','確認健康檢查連接埠和路徑可達。','配合 ASG 使用 ELB 健康檢查取代故障主機。'),
    s('連線排空與擴展','縮容或部署時，先讓目標停止接受新請求，保留時間處理既有連線。長時間連線、WebSocket、慢查詢與逾時設定都會影響排空策略。不要在切換時直接終止所有執行個體。','使用 deregistration delay 配合工作負載。','負載平衡器本身不會替資料庫建立讀寫擴展。')
  ],['單一網域要把 /orders 與 /catalog 送到不同服務。','使用 ALB listener 的 path-based routing 與兩個 target group。','需求是 HTTP 應用層路由，ALB 直接支援。'],['使用 NLB 做 HTTP 路徑判斷。','只註冊一個 AZ 的目標。','縮容立即切斷長請求。'],['ALB 看 HTTP，NLB 看傳輸協定。','listener、規則、target group 各司其職。','部署與縮容要排空連線。'],[['ALB','https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html'],['NLB','https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html']]);

  add('autoscaling','Auto Scaling 與彈性容量','D2',30,'讓容量依需求調整，同時保留故障時可用的餘裕。',
  ['選擇擴展政策','設定最小、期望與最大容量','避免不適當指標'],[
    s('ASG 的容量模型','Auto Scaling group 使用 launch template 建立相似執行個體，並在選定子網路分散容量。min 是下限、desired 是目前目標、max 是上限；手動停止主機不一定能永久縮小群組，因為群組會補回期望容量。','AMI、角色與安全群組在模板中管理。','多 AZ 部署需評估單 AZ 故障後容量。'),
    s('動態、排程與預測','Target tracking 讓指標維持目標值，step scaling 依超出閾值的程度採不同動作，scheduled scaling 適合可預期時間表。Predictive scaling 依歷史模式提早配置；新服務沒有足夠歷史時不能完全依賴預測。','CPU 適合部分 CPU-bound 應用。','佇列工作可使用每執行個體積壓量，而非僅看原始佇列長度。'),
    s('暖機與生命週期','新主機需要開機、下載套件、預熱快取後才真正可用。設定 instance warmup，必要時使用 lifecycle hook 進行初始化或退出清理。過早把容量視為就緒，會使連續擴展判斷失準。','以可靠且可重現的映像降低啟動時間。','暖池可縮短部分工作負載的啟動等待。'),
    s('擴展失敗的依賴','即使 ASG 能增加 EC2，資料庫連線、外部 API 配額、NAT、IP 位址或帳號配額仍可能成為瓶頸。設計彈性時，要一起考慮下游容量及負載削峰。','監控擴展活動與啟動失敗原因。','縮容保護和排空要符合批次或長工作特性。')
  ],['每天 9 點上班出現固定尖峰，主機啟動需 8 分鐘。','在尖峰前使用排程擴容，搭配動態政策處理實際變化。','提前配置克服啟動時間，動態政策吸收預測誤差。'],['把 max 設太低卻期待無限擴展。','以記憶體未安裝指標就期待預設監控。','只擴 Web 層不看資料庫。'],['擴展政策依需求選。','暖機會影響反應速度。','所有相依都需容量規劃。'],[['ASG 動態擴展','https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html'],['Lifecycle hooks','https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html']]);

  add('sqs','SQS：緩衝、重試與冪等','D2',35,'用訊息佇列讓生產者與消費者獨立擴展並容忍暫時故障。',
  ['比較 Standard 與 FIFO','設定可見性與死信','設計安全重試'],[
    s('解耦工作流程','生產者將工作寫入 SQS，消費者依自己的速度拉取並處理，成功後刪除訊息。佇列把瞬間尖峰轉成可管理的積壓；它不會自動加速每一筆工作，也不表示同步回應能立即完成。','關注最老訊息年齡與積壓。','消費者可由 EC2、容器或 Lambda 實作。'),
    s('Standard 與 FIFO','Standard 提供高吞吐量、至少一次傳遞與盡力排序，應用必須容忍重複和順序變動。FIFO 以 message group 維持群組內順序，提供去重能力；不同群組可平行處理。端到端副作用仍應設計冪等。','需要每筆訂單依序處理，可用 order ID 作 group ID。','只有一個 group 可能限制平行度。'),
    s('Visibility timeout','訊息被接收後暫時對其他消費者不可見，並沒有立刻刪除。若未在期限內成功刪除，會再次可見而被重試。期限應涵蓋合理處理時間，長工作可延長，但不應無限制掩蓋故障。','成功才 DeleteMessage。','設定比正常處理時間適當更長的可見性，並監控逾時。'),
    s('死信與輪詢','反覆失敗的訊息可在達到 maxReceiveCount 後送進 DLQ，隔離毒性訊息並保留調查。Long polling 減少空回應；批次 API 可降低請求成本。DLQ 必須有告警和重送流程，不是丟進去就處理完成。','冪等 key 防止付款或寄送重複。','延遲佇列控制首次可見時間，與可見性期限不同。')
  ],['圖片轉檔平均 90 秒，但佇列 visibility 為 30 秒，發生重複轉檔。','提高可見性期限或處理中續期，成功後刪除，並用工作 ID 實作冪等。','訊息未及時刪除會重新出現；冪等保護重試副作用。'],['收到就刪除，處理失敗便遺失工作。','把 visibility 當訊息保存期限。','認為 FIFO 消除所有程式副作用。'],['佇列提供緩衝與解耦。','至少一次需要冪等。','DLQ 需要可觀測與重送。'],[['SQS visibility','https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html'],['SQS Standard','https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html'],['SQS FIFO','https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html']]);

  add('events','SNS、EventBridge 與 Step Functions','D2',30,'依廣播、事件路由與工作流程編排選擇整合服務。',
  ['設計 fan-out','比較事件匯流排與佇列','用狀態機管理流程'],[
    s('SNS 的發布訂閱','一筆事件需要讓多個獨立系統知道時，SNS topic 可向多個訂閱者推送。搭配多個 SQS 佇列，每個消費端就有自己的緩衝、重試與擴展速度，避免一個故障拖住所有下游。','篩選政策讓訂閱端只接收相關訊息。','Standard 與 FIFO 的順序與投遞語意須依組合核對。'),
    s('EventBridge 的事件路由','EventBridge 以事件模式匹配並路由到目標，適合 AWS 服務事件、應用事件及 SaaS 整合。事件匯流排著重內容與來源導向的路由，不是拿來取代所有持久工作佇列。','規則可依 detail 內容判斷。','需要事件重播時評估 archive/replay；失敗目標可配置 DLQ。'),
    s('Step Functions 的編排','當流程含條件分支、平行工作、等待、重試與補償時，用狀態機表達比把流程藏在大量 Lambda 互相呼叫中清楚。Standard 與 Express 適合不同時間、吞吐與執行語意。','Retry 處理暫時錯誤；Catch 規劃失敗路徑。','分散式交易可用補償流程，但不是自動 ACID 交易。'),
    s('整合選擇題','只有一個工作要分派給某個消費者，先想 SQS；同一事件通知多方，先想 SNS；依事件內容連接多個來源與目標，先想 EventBridge；需要可追蹤的步驟與狀態，先想 Step Functions。','可以組合使用，而非每題只能單一服務。','每一跳都要考慮權限、重試、重複與失敗保存。')
  ],['訂單成立後，庫存、發票、通知各自獨立處理且不能互相阻塞。','以 SNS fan-out 到三個 SQS 佇列，各自配置消費者與 DLQ。','每個訂閱端擁有獨立積壓及重試，不爭搶同一筆訊息。'],['多個消費者共用單一 SQS 卻期待每人收到。','用 Lambda 長時間睡眠等待流程。','假設所有事件都有全域排序。'],['SNS 廣播，SQS 緩衝。','EventBridge 路由事件。','Step Functions 管理流程狀態。'],[['訊息服務選擇指南','https://docs.aws.amazon.com/decision-guides/latest/decision-guides/sns-or-sqs-or-eventbridge.html'],['Step Functions','https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html']]);

  add('rds-ha','RDS 備份、Multi-AZ 與讀取副本','D2',35,'把資料庫可用性、讀取擴展與復原需求拆開選擇。',
  ['區分三種資料庫複本','規劃備份與 PITR','處理端點切換'],[
    s('RDS 的責任分工','RDS 管理資料庫基礎設施與許多維護工作，使用者管理資料模型、查詢、權限及部署選項。自動備份不等於啟用跨 AZ，也不等於每個查詢都有高效能；設計仍需考慮 IOPS、連線數與儲存成長。','使用 DB subnet group 與受限安全群組。','維護視窗與版本升級要事先規劃。'),
    s('Multi-AZ 的精確區別','傳統 Multi-AZ DB instance 使用同步 standby，供故障切換而不提供 standby 讀取。Multi-AZ DB cluster 是不同部署型態，具有可讀取執行個體。看到「Multi-AZ」時先確認是哪一種。','高可用用途：Multi-AZ。','不要把傳統 standby 與 read replica 混為一談。'),
    s('Read replica','讀取副本通常以非同步複寫承接唯讀流量，可能讀到稍舊資料。應用要將讀寫流量送到合適端點；新增副本不會自動把所有既有應用讀取改道。跨 Region 副本也可成為災備策略的一部分。','寫入仍受主要資料庫能力約束。','升級副本為獨立資料庫時要規劃切換與一致性。'),
    s('備份與復原','自動備份與交易日誌可支援保留期間內的 point-in-time recovery；手動 snapshot 便於保留特定時間點。還原一般建立新的資料庫，必須驗證資料、端點、角色與應用連線。','定期測試還原所需時間。','應用連線需支援 DNS 變更與暫時重連。')
  ],['交易庫需 AZ 故障自動恢復，同時報表讀取過多。','採合適的 Multi-AZ 部署提高可用性，再使用讀取副本承接可容忍延遲的報表。','容錯與讀取擴展是兩個需求，可能需要兩種能力。'],['傳統 standby 用來查報表。','讀取副本當成同步備份。','忘記應用端改用讀取端點。'],['辨識部署型態。','讀取副本解決讀取擴展。','備份價值取決於可還原性。'],[['RDS Multi-AZ instance','https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html'],['RDS read replicas','https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html'],['RDS 備份','https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html']]);

  add('aurora','Aurora：叢集、端點與跨區復原','D2',30,'理解計算與儲存分離，並釐清 writer、reader 與 Global Database。',
  ['讀懂 Aurora 端點','規劃讀取與自動容錯','比較區域內與跨區能力'],[
    s('Aurora 的叢集概念','Aurora 與 MySQL 或 PostgreSQL 相容，將資料庫計算與分散式儲存分離。叢集內的 writer 接受寫入，reader 提供唯讀計算容量；儲存高耐久不表示單一 writer 故障完全不影響連線。','選擇引擎時核對應用相容性。','不同引擎版本與區域的功能支援可能不同。'),
    s('端點與讀取分流','cluster endpoint 指向目前主要寫入執行個體，reader endpoint 分配新的讀取連線到合適 reader。連線池可能讓負載長期不均，應配合應用程式設計，不能假設逐筆 SQL 都被自動平衡。','需要特定用途可評估 custom endpoint。','沒有 reader 時，reader endpoint 的行為要依文件理解。'),
    s('容錯與 Serverless','部署 reader 可在主要計算故障時提供提升候選。Aurora Serverless v2 可細緻調整計算容量，但仍須設定範圍並規劃連線、負載與費用；不是把資料庫所有限制都移除。','依尖峰與啟動需求設定容量下限。','Auto Scaling readers 與 Serverless 計算擴縮是不同面向。'),
    s('Global Database','Aurora Global Database 支援跨 Region 複寫與低延遲區域讀取，適合全球讀取和跨區災備。正常寫入拓撲與故障切換方式要依功能核對，不能把 reader 直接當成任意多 Region 同時寫入。','非同步跨區複寫要評估可接受資料損失。','演練計畫內切換與非計畫故障恢復。')
  ],['全球 SaaS 希望各地讀取快，主要區域故障時可切到另一區。','評估 Aurora Global Database，讀取放近使用者，規劃跨 Region failover 與應用改連。','跨區複寫支援全球讀取及 DR，但仍需處理寫入角色與恢復程序。'],['把 reader endpoint 當寫入端點。','認為所有 reader 都是同步。','以為 Serverless 一定比較便宜。'],['區分儲存與計算。','writer、reader 端點依用途使用。','Global Database 需演練切換。'],[['Aurora 叢集','https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.html'],['Aurora Global Database','https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html'],['Aurora endpoints','https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html']]);

  add('dns','Route 53：DNS、路由與健康檢查','D2',30,'把 DNS 路由策略對準地理、延遲、比例與故障切換需求。',
  ['選擇路由政策','區分 Alias 與 CNAME','理解 DNS 快取限制'],[
    s('DNS 與 hosted zone','Route 53 提供網域名稱解析及公有、私有 hosted zone。私有 hosted zone 用於關聯 VPC 的內部名稱。DNS 回傳的是記錄結果，並不代理每一筆應用流量，也不會建立網路連線。','Alias 可用於支援 AWS 目標和 zone apex。','CNAME 通常不能用在 zone apex，且不能與同名其他記錄混用。'),
    s('路由政策','Weighted 依權重分配，適合漸進切換；latency 導向較低網路延遲的 AWS 區域；geolocation 依使用者地理位置回應；failover 配合健康狀態提供主備。每一種都回應不同需求。','地理位置不等於實際最低延遲。','Multivalue answer 可回應多個健康結果，但不取代負載平衡器。'),
    s('健康狀態','可配置端點健康檢查或以 CloudWatch alarm 等方式判斷。Alias 的 Evaluate Target Health 與獨立 health check 的適用方式不同。私有端點不能直接被一般網際網路健康檢查器探測。','檢查的是符合業務的路徑與回應。','避免健康檢查依賴與受保護工作負載同一故障點。'),
    s('TTL 與故障切換','DNS 記錄可能被解析器與客戶端快取；降低 TTL 通常可縮短部分切換延遲，但不保證所有客戶端立即改道。若需要固定入口 IP 與快速網路路由，另比較 Global Accelerator。','DNS 切換之前資料層也要準備好。','複原後的 failback 要避免雙寫或資料分歧。')
  ],['兩個 Region 部署網站，平時只使用主區，故障才使用備區。','使用 Route 53 failover routing 配合健康檢查與已具備資料的備區。','DNS 可依健康切換名稱結果，但恢復速度仍受快取與資料層準備影響。'],['把 latency 當 geolocation。','以為改 DNS 就保證立即切換。','健康備站沒有最新資料。'],['DNS 是名稱解析。','路由政策依業務語意選。','TTL 與資料恢復共同決定中斷時間。'],[['Route 53 routing','https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html'],['Alias','https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-aws-resources.html']]);

  add('dr','災難復原、RTO、RPO 與 AWS Backup','D2',35,'以業務容忍度選擇備份還原、pilot light、warm standby 或 active-active。',
  ['計算 RTO 與 RPO 意義','比較四種 DR 策略','設計可測試備份'],[
    s('復原目標','RTO 是可接受的恢復所需時間；RPO 是可接受遺失資料的時間窗口。每 24 小時備份一次可能無法滿足只容忍 5 分鐘資料遺失的需求。目標是業務承諾，必須由架構、程序與測試證明。','先指定災難範圍：主機、AZ、Region 或人為破壞。','資料複寫不能代替可回復的歷史版本。'),
    s('四種策略','Backup and restore 主要依備份重建；pilot light 維持核心資料與必要元件，災難後補齊／啟動其他資源；warm standby 維持縮小但可運作環境；multi-site active-active 同時服務流量。','成本與營運複雜度通常依序上升。','實際 RTO/RPO 需測量，不能把範例時間當保證。'),
    s('集中備份管理','AWS Backup 可跨支援服務管理備份政策、保留與複製，搭配 vault、權限與不可變保護降低誤刪風險。跨帳號、跨 Region 的支援依資源類型確認，還原後仍要檢查網路與應用設定。','保護備份帳號與 KMS key。','針對勒索軟體風險保留隔離且可驗證備份。'),
    s('演練與回切','復原不只是建立資料庫。還需 IaC、映像、機密、DNS、配額、容量及應用測試。完成 failover 後要避免主站復原造成 split-brain；failback 需要同步最新資料並明確決定權威寫入端。','把演練結果與 RTO/RPO 逐項比較。','盡量避免故障切換依賴大量控制面建立操作。')
  ],['RPO 5 分鐘、RTO 30 分鐘，預算不足維持完整雙活。','評估持續資料複寫加 pilot light 或 warm standby，實測啟動及擴容時間。','比只做每日備份更接近目標，並用測試決定是否需要常駐完整應用。'],['RTO 與 RPO 顛倒。','複寫會同步刪錯資料，卻沒有歷史備份。','從不演練還原。'],['RTO 管時間，RPO 管資料遺失。','DR 策略由業務目標驅動。','能還原才算有備份。'],[['DR strategies','https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html'],['AWS Backup','https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html']]);

  add('observability','CloudWatch、CloudTrail 與自動化營運','D2',25,'從使用者結果一路觀測到服務指標、日誌與 API 稽核。',
  ['建立指標與告警','區分監控與稽核','用自動化縮短恢復時間'],[
    s('從 SLI 開始','先衡量請求成功率、延遲與工作完成時間，再看 CPU、記憶體及佇列長度。高 CPU 不一定代表使用者體驗差，低 CPU 也不保證服務正常；資料庫阻塞或權限失敗可能讓系統閒置卻不可用。','設定可操作的告警，附上排查指引。','追蹤 p95/p99 延遲，而不只平均值。'),
    s('CloudWatch 的資料','CloudWatch 收集指標、日誌並建立告警與儀表板。EC2 的記憶體或作業系統內部磁碟使用率通常需要 agent 或自訂資料，不能假設所有指標預設可用。','Logs Insights 查詢日誌。','區分 metric、log event 與 alarm state。'),
    s('追蹤與稽核','分散式追蹤協助找出跨服務呼叫的延遲和錯誤；CloudTrail 著重 API 呼叫紀錄。若問誰刪除了資源，優先檢查 CloudTrail；若問哪一跳慢，應查看追蹤與應用指標。','不要把機密或完整敏感資料寫入日誌。','集中日誌並配置保存期限。'),
    s('從告警到恢復','Alarm 可通知 SNS，事件可交由 EventBridge 路由到自動化。Systems Manager 支援運維、執行命令及受管主機管理。先建立偵測、診斷、修復和驗證的閉環，避免無限制重開機掩蓋根因。','自動化使用最小權限服務角色。','保留執行結果並驗證使用者指標恢復。')
  ],['EC2 CPU 正常，但所有請求都因資料庫錯誤失敗。','監控應用錯誤率與資料庫指標，關聯日誌及追蹤，不以 CPU 作唯一健康判斷。','資源指標不能取代端到端服務成效。'],['沒有 agent 卻期待記憶體指標。','告警沒有處理程序。','日誌永遠不過期導致成本持續增加。'],['觀測先看使用者結果。','監控、追蹤、稽核互補。','修復後必須驗證。'],[['CloudWatch','https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html'],['CloudTrail','https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html'],['Systems Manager','https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html']]);

  add('ec2','EC2：執行個體、網路與高效能運算','D3',30,'按 CPU、記憶體、網路和 I/O 特性選擇運算，而非只挑最大機型。',
  ['配對執行個體家族與負載','區分停止與終止','選擇 placement group'],[
    s('選擇家族','通用型適合平衡負載；運算最佳化偏 CPU；記憶體最佳化偏大型資料集；儲存最佳化偏本機高 I/O。GPU 類型適合特定平行運算，不能僅因模型較新就假設最適合所有應用。','依實測選規格及處理器架構。','burstable 類型要理解 CPU credits 和持續負載費用。'),
    s('生命週期與儲存','EBS-backed 主機停止後運算費一般停止，但 EBS 等保留資源仍計費。終止會依磁碟設定刪除部分 volume。Instance store 是與主機生命週期相關的暫存，不適合作唯一持久副本。','AMI 用於可重現部署。','user data 執行初始化，不是機密保管箱。'),
    s('網路效能','增強網路與適當執行個體類型可改善網路吞吐和延遲；EBS 頻寬同樣有執行個體上限。提高 volume IOPS 未必能越過主機瓶頸。資料傳輸路徑與跨 AZ 也影響延遲和費用。','觀察 CPU、網路、EBS 三者的上限。','HPC 需求可評估支援 EFA 的類型。'),
    s('Placement groups','Cluster 將主機靠近以降低延遲，常用於緊密耦合 HPC；spread 分散到不同硬體以降低相關故障；partition 把大型分散式系統放在分離分區。每種策略都有容量與部署限制。','低延遲與故障隔離常是取捨。','placement group 不會自動讓應用變成跨 Region。')
  ],['緊密耦合的科學運算需要節點間低延遲。','選適合的 EC2 網路規格，評估 cluster placement group 與 EFA。','瓶頸在節點互連，增加單一節點磁碟大小未必有效。'],['停止 EC2 就認為完全不計費。','把 instance store 當永久磁碟。','只看 volume IOPS 不看 EC2 上限。'],['按瓶頸選型。','持久資料與計算解耦。','Placement 依延遲和隔離選。'],[['EC2 instance types','https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html'],['Placement groups','https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html']]);

  add('block-storage','EBS、快照與 instance store','D3',25,'區分區塊儲存的持久性、AZ 範圍與效能參數。',
  ['選 gp3 或 io2 等類型','理解快照與跨 AZ 還原','辨識吞吐與 IOPS'],[
    s('EBS 與 AZ','EBS 是供 EC2 使用的持久區塊儲存，volume 屬於一個 AZ。要移到另一 AZ，一般透過 snapshot 建立新 volume。單一 volume 並非自動跨 AZ 掛載的共享檔案系統。','檔案系統與應用一致性仍由設計處理。','Multi-Attach 僅限支援型態及條件，且需要叢集感知檔案系統。'),
    s('效能單位','IOPS 描述每秒 I/O 次數，吞吐量描述每秒傳輸資料量；小隨機 I/O 與大循序 I/O 的需求不同。gp3 可分別配置容量與部分效能，Provisioned IOPS 類型適合高要求延遲及 I/O 工作負載。','測試實際 I/O 大小、佇列深度與延遲。','同時核對 volume 與 EC2 EBS 頻寬限制。'),
    s('Snapshot 與恢復','快照保存區塊狀態並支援增量儲存，但每個有效快照可作為還原基礎。刪除舊快照不會直接破壞後續可用快照。從快照還原的初始化行為可能影響首次讀取效能。','需要可預測啟動效能時評估初始化或 Fast Snapshot Restore。','資料庫快照前應考慮應用一致性。'),
    s('Instance store','本機 instance store 適合可重建快取、緩衝和分散式系統的暫時資料。硬體故障、停止或終止等生命週期事件可能造成資料遺失；即使 I/O 很快，也不能用它取代備份。','重要結果持續寫到持久儲存。','高效能暫存與高耐久儲存可分層結合。')
  ],['資料庫隨機 I/O 延遲高，volume 已配置高 IOPS 但吞吐仍卡住。','同時檢查 EC2 EBS 頻寬、I/O 大小與資料庫等待事件。','儲存效能由整條路徑共同決定，而非單一 IOPS 數字。'],['把 EBS 當跨 AZ NFS。','忽略快照還原首次讀取效能。','Instance store 存唯一資料。'],['EBS 是 AZ 範圍的區塊儲存。','IOPS 與吞吐量不同。','快照應配合還原測試。'],[['EBS volume types','https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html'],['EBS snapshots','https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshots.html']]);

  add('file-storage','EFS、FSx 與共享檔案選擇','D3',25,'依 NFS、SMB、Windows 相容性和 HPC 資料流挑選檔案系統。',
  ['選 EFS 或 FSx 系列','理解共享與掛載','評估可用性及存取模式'],[
    s('EFS 的使用方式','EFS 是託管 NFS 檔案系統，適合多個 Linux 用戶端共享目錄。跨 AZ 的 Regional 類型有助高可用；One Zone 類型成本與風險不同。使用 mount target、網路規則和存取權限完成掛載。','適合共享網站內容、容器持久目錄等。','需真正的 SMB 或 Windows 原生功能時不要硬套 EFS。'),
    s('FSx for Windows File Server','需要 SMB、Active Directory 整合、Windows ACL 等工作負載，可評估 FSx for Windows File Server。把 Windows 應用移到雲端時，協定和身分相容性可能比改寫為物件儲存更重要。','核對吞吐容量、儲存類型與部署模式。','跨站存取需設計 DNS、AD 與混合網路。'),
    s('FSx for Lustre 與其他系列','Lustre 常用於 HPC、大量平行檔案 I/O，可與 S3 資料工作流程整合。FSx for NetApp ONTAP 與 OpenZFS 則對應其他檔案協定、快照及既有應用需求。考題先抓明確的相容性條件。','不是所有 FSx 都是相同協定。','暫時性與持久性部署的故障保護不同。'),
    s('儲存選擇的總表','作業系統磁碟或資料庫區塊 I/O：EBS；多個 Linux 主機共享檔案：EFS；Windows SMB：FSx Windows；物件與網頁靜態資產：S3。使用者要求掛載既有 POSIX 應用時，不能直接說換成 S3 即可。','比較容量、吞吐、IOPS、延遲及備份。','權限包含網路、IAM 與檔案系統內部權限。')
  ],['既有 Windows 檔案分享使用 SMB 與 AD 群組權限，希望少改程式。','評估 FSx for Windows File Server，整合 AD 並規劃網路與備份。','符合既有協定及權限模型，降低重構需求。'],['以為 S3 原生等同 NFS。','把所有 FSx 當 Windows 服務。','One Zone 當跨 AZ 耐故障。'],['依協定與語意選儲存。','EFS 偏 NFS 共享。','FSx 依系列判斷。'],[['EFS','https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html'],['FSx Windows','https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html'],['FSx Lustre','https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html']]);

  add('lambda','Lambda 與事件驅動運算','D3',30,'以短生命週期、可重試、可擴展的函式處理事件。',
  ['理解呼叫方式與並行','設計冪等函式','避免網路與冷啟動誤解'],[
    s('執行模型','Lambda 執行函式回應事件，由服務管理底層運算。適合事件處理與可拆分 API 邏輯；持續運行、特殊作業系統或超長單次工作可能更適合容器、EC2 或 Batch。不要把所有伺服器程式原封不動搬進函式。','函式應盡量無狀態。','持久資料寫外部服務，暫存空間不當唯一資料來源。'),
    s('同步、非同步與輪詢來源','同步呼叫由呼叫者接收結果並處理部分錯誤；非同步呼叫有服務管理的重試路徑；SQS、Kinesis 等事件來源映射由 Lambda 拉取。每種來源的失敗、批次與重試行為不同。','依來源設計 DLQ、destination 或失敗處理。','批次中的部分失敗應避免重做所有成功工作。'),
    s('並行與延遲','並行數與函式執行時間、流量相關。Reserved concurrency 保留並限制函式可用並行；Provisioned concurrency 預先初始化環境以降低冷啟動影響。兩者解決不同問題，也不能繞過所有下游限制。','調高記憶體也會影響可用運算能力。','資料庫連線可能先耗盡，可評估 RDS Proxy。'),
    s('VPC 與冪等','函式加入 VPC 是為存取私有資源；放入公有子網路不會自動取得公有 IP。若需要外部 IPv4 存取，仍需適當 NAT 路徑。事件可能重複，因此付款等副作用要用冪等識別碼保護。','初始化可重用的 SDK 用戶端，避免每次重新建立。','使用執行角色而非內嵌金鑰。')
  ],['S3 上傳圖片後要產生縮圖，尖峰不可預測。','以 S3 事件觸發 Lambda，結果寫入另一前綴／bucket 並實作冪等與失敗保存。','事件驅動可隨需求擴展，分離輸出避免遞迴觸發。'],['公有子網路中的 Lambda 就有公網。','把 reserved concurrency 當預熱。','忽略重複事件。'],['依來源理解重試。','並行與下游容量一起規劃。','函式副作用需冪等。'],[['Lambda application design','https://docs.aws.amazon.com/lambda/latest/dg/concepts-application-design.html'],['Lambda concurrency','https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html'],['Lambda VPC','https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html']]);

  add('containers','ECS、EKS、Fargate 與 Batch','D3',30,'分開選容器編排平台與執行容量，避免概念混淆。',
  ['比較 ECS 和 EKS','理解 Fargate 與 EC2 容量','選擇批次處理工具'],[
    s('容器的兩層選擇','編排平台負責排程、服務發現與生命週期；運算容量負責真正執行容器。ECS 是 AWS 原生編排，EKS 提供 Kubernetes。Fargate 是受管運算選項，可用於支援的 ECS tasks 或 EKS Pods。','選 Kubernetes 的理由通常是生態與既有相容性。','選 ECS 可降低部分叢集管理複雜度。'),
    s('Fargate 與 EC2','Fargate 減少底層主機管理，按所配置資源與執行時間計費。EC2 容量提供更多主機、特定硬體與配置控制，需管理節點及利用率。最低營運負擔與最低單位成本不一定是同一選擇。','核對 CPU、記憶體、網路及特殊功能需求。','任務角色與節點角色分開設計。'),
    s('服務擴展與部署','ECS service 維持 task 數量，可搭配 ALB 與 Auto Scaling。EKS 有 Kubernetes 的 deployment 與擴展模型。容器映像放 ECR，持久資料使用合適外部儲存，不依賴可隨時替換的容器檔案層。','部署需設定健康檢查與回復策略。','容器數增加時，底層容量及 IP 配額也需足夠。'),
    s('Batch 與其他託管部署','AWS Batch 管理批次 job queue、運算環境與排程，適合大量可排程工作。Elastic Beanstalk 協助部署支援的應用平台，App Runner 適合某些簡化 Web 服務部署需求。題目依控制程度和既有格式選擇。','批次工作通常能排隊並承受延遲。','可重試工作可評估 Spot，但需處理中斷。')
  ],['公司已有 Kubernetes 工具鏈，想減少部分 Pod 的節點維護。','評估 EKS 搭配 Fargate，核對 Pod 的功能及運算限制。','保留 Kubernetes 生態並轉移部分底層主機管理。'],['把 Fargate 當第三種編排平台。','任務角色與主機角色混用。','容器本機儲存當持久資料。'],['先選編排，再選容量。','Fargate 減少主機維護。','Batch 管理可排隊的運算工作。'],[['容器服務選擇','https://docs.aws.amazon.com/pdfs/decision-guides/latest/containers-on-aws-how-to-choose/containers-on-aws-how-to-choose.pdf'],['ECS clusters','https://docs.aws.amazon.com/AmazonECS/latest/developerguide/clusters.html'],['AWS Batch','https://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html']]);

  add('api','API Gateway 與無伺服器 API','D3',25,'設計具驗證、節流、監控與後端整合的 API 入口。',
  ['比較 API Gateway 與 ALB','選擇 API 類型','設計授權及流量保護'],[
    s('API 管理的需求','API Gateway 為 API 提供受管入口，可整合 Lambda、HTTP 後端及支援的 AWS 服務。它適合需要 API 級別授權、節流或生命週期管理的需求；已有容器 HTTP 服務也可能以 ALB 滿足基本路由。','先確認協定、功能及成本模式。','WebSocket 用於雙向通訊，與 REST/HTTP request-response 不同。'),
    s('REST API 與 HTTP API','兩者都能建立 HTTP 入口，但功能、整合與計價不同。HTTP API 通常更精簡；REST API 提供部分較完整的 API 管理能力。考題若明確要求某功能，必須先確認對應類型支援。','不要因名稱相近就假設功能相同。','端點的公開、區域或私有方式依 API 類型核對。'),
    s('驗證與授權','Cognito、JWT authorizer、Lambda authorizer 或 IAM 簽章各有適用情境。API key 常用於用量辨識，不應單獨當作使用者身分驗證。後端 Lambda 的 execution role 與呼叫者授權也不同。','授權驗證主體，後端仍需細部資料權限。','CORS 是瀏覽器跨來源限制，不是網路防火牆。'),
    s('節流與韌性','設定節流保護後端並處理 429 回應；客戶端使用有上限的退避重試。快取可降低後端負載但要避免快取使用者私有資料到共同 key。大型檔案可讓用戶端直接透過預簽 URL 上傳 S3。','觀察整合延遲與 API 錯誤率。','長工作可改成非同步任務與狀態查詢。')
  ],['手機 App 需要登入後上傳大型影片，不想讓 Lambda 轉送整個檔案。','API 驗證使用者並簽發受限 S3 upload URL，客戶端直接上傳。','減少中介運算與傳輸壓力，同時保持短期授權。'],['API key 當成完整驗證。','CORS 當存取權限。','長工作一直佔用同步請求。'],['API 類型依功能選。','授權與用量識別分開。','非同步與直接上傳降低入口壓力。'],[['API Gateway','https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html'],['REST 與 HTTP API','https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html']]);

  add('dynamodb','DynamoDB：資料模型、一致性與容量','D3',35,'從存取模式設計鍵值模型，避免把 NoSQL 當成免規劃資料庫。',
  ['設計 partition 與 sort key','比較 GSI、LSI 與一致性','選擇容量與全球資料表'],[
    s('從查詢反推 key','DynamoDB 適合已知存取模式的 key-value/document 工作負載。partition key 決定資料分布，sort key 支援同一分割鍵內排序及範圍查詢。若所有流量集中單一熱門鍵，整體容量高仍可能受限。','避免所有訂單都用同一固定 partition key。','Query 針對 key；Scan 掃描範圍較廣，不能當預設查詢。'),
    s('索引與一致性','GSI 可用不同 partition/sort key 擴展查詢模式；LSI 共用 partition key、改變 sort key。基本資料表及 LSI 可選強一致讀取，GSI 與 streams 讀取為最終一致。索引不是免費且無成本的複製視圖。','LSI 在建立資料表時定義。','GSI 有其容量與儲存考量，寫入需同步維護索引。'),
    s('容量、快取與事件','On-demand 適合需求難預測或希望減少容量管理的場景；provisioned 配合 Auto Scaling 適合可規劃負載。DAX 提供相容型讀取快取，但不應用於需要最新強一致結果的假設。Streams 可觸發變更處理。','TTL 可自動清理到期資料，但刪除不是精確排程器。','交易與條件寫入支援特定一致性及併發需求。'),
    s('全球資料表','Global tables 提供多 Region 複寫與多區域存取。現有功能包含不同一致性模式；MREC 與 MRSC 的區域、功能限制及成本不同，不能再把所有 global table 一律描述為只有最終一致。','依題目指明模式判斷一致性與衝突。','跨 Region 系統仍需規劃應用寫入語意與故障路由。')
  ],['購物車查詢只依 user ID，流量忽高忽低且不想管理伺服器。','使用 DynamoDB，以 user ID 配置合適 key，評估 on-demand 並監控熱點。','存取模式適合鍵值資料庫，受管容量減少維護。'],['以為 GSI 支援強一致讀取。','用 Scan 取代所有 Query。','所有使用者共用單一熱門 partition key。'],['先有存取模式再設計 key。','一致性依資料表與索引而異。','全球資料表需辨識模式。'],[['DynamoDB 一致性','https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html'],['Secondary indexes','https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html'],['Global tables','https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html']]);

  add('cache-databases','ElastiCache 與資料庫選型','D3',30,'按資料關係、查詢模式與延遲需求選擇儲存，並設計有效快取。',
  ['選關聯、鍵值與專用資料庫','理解 cache-aside','辨識快取失效風險'],[
    s('資料模型決定選型','RDS/Aurora 適合關聯、交易與 SQL；DynamoDB 適合 key-value/document；Redshift 適合分析資料倉儲；Neptune 適合圖關係；OpenSearch 適合搜尋與日誌分析。不能只用資料量大小判斷資料庫。','OLTP 的低延遲交易與 OLAP 的大量聚合不同。','DocumentDB 相容需求需核對實際 API 和應用功能。'),
    s('ElastiCache 的用途','ElastiCache 提供託管記憶體快取，支援的引擎選項與功能不同。常見用途包括熱門查詢、session、排行榜及限流。資料是否能重建、是否需複寫與容錯，會影響引擎及部署模式。','依需求比較 Valkey/Redis OSS 與 Memcached。','快取不是對所有主資料庫的通用替代。'),
    s('Cache-aside','應用先查快取，miss 時查資料庫並寫回快取。此模式可降低讀取壓力，但更新時要失效或同步快取，TTL 決定可接受陳舊程度。將所有資料無差別快取會浪費記憶體。','使用合理 key，避免不同使用者資料混用。','快取失效後的尖峰可能壓垮資料庫。'),
    s('熱門鍵與驚群','大量請求同時遇到 miss 會形成 cache stampede。可以使用隨機化 TTL、請求合併、預熱與適當保護。讀取副本和快取也不同：副本仍執行資料庫查詢，快取儲存可重用結果。','監控命中率、evictions 與延遲。','資料一致性要求高時，快取策略更需謹慎。')
  ],['商品資料變化少但每秒查詢很多，資料庫讀取昂貴。','為熱門商品使用 cache-aside，加 TTL 和更新失效機制。','重用結果減少資料庫工作，但要控制陳舊風險。'],['快取無 TTL 且永不失效。','把 Redshift 用來逐筆線上付款。','忽略 cache miss 尖峰。'],['選型看存取與資料語意。','快取須管理一致性。','命中率與成本一起觀察。'],[['ElastiCache','https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html'],['AWS 資料庫選擇','https://docs.aws.amazon.com/decision-guides/latest/decision-guides/databases-on-aws-how-to-choose.html']]);

  add('edge','CloudFront、Global Accelerator 與全球效能','D3',30,'分辨 CDN 快取、DNS 路由與全球網路入口的用途。',
  ['設計 cache behavior','比較 CloudFront 與 GA','保護來源及私有內容'],[
    s('CloudFront 的資料路徑','CloudFront 在邊緣處理 HTTP/S，快取可重用內容以減少來源延遲與負載，也可加速動態內容傳遞。Origin 可為 S3 或支援的 HTTP 來源；cache behavior 依路徑定義來源和政策。','靜態資產適合版本化檔名及較長 TTL。','動態或個人化資料要明確設定快取鍵與禁止快取條件。'),
    s('快取鍵與失效','快取鍵可能包含 path、query string、header 與 cookie 的選定部分。把不必要變數放入 key 會降低命中率；少放用於區分使用者的值則可能洩漏資料。更新內容可用 invalidation 或版本化檔名。','快取成功不等於來源已不可被直接存取。','監控 hit ratio、origin latency 與錯誤碼。'),
    s('Global Accelerator','GA 提供固定 anycast IP，將支援的 TCP/UDP 流量導入 AWS 全球網路與健康端點。它沒有 CDN 物件快取；常用於需要固定入口 IP、全球網路效能或區域故障切換的服務。','非 HTTP 協定需求可優先比較 GA。','Route 53 回應 DNS；GA 實際承接網路入口。'),
    s('安全與全球設計','CloudFront 可配合 HTTPS、WAF、signed URL/cookie 和 OAC。GA 與 CloudFront 都不能自動解決跨區資料一致性；全球入口後面仍要有能服務請求的健康應用及資料。','CloudFront 觀眾憑證有特定 Region 要求，部署前依文件確認。','邊緣運算適合部分輕量改寫及驗證，不取代所有後端。')
  ],['全球遊戲採 UDP，企業客戶要求固定 IP 白名單。','評估 Global Accelerator 導向跨 Region 支援端點。','協定和固定 IP 是主要條件，CDN 快取不是此需求的核心。'],['GA 當成物件快取。','快取鍵忽略個人化識別。','以為 CDN 等於資料庫跨區複寫。'],['CloudFront 處理 HTTP/S 與快取。','GA 提供固定全球入口。','全球入口仍依賴資料層。'],[['CloudFront','https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html'],['Global Accelerator','https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html']]);

  add('hybrid','混合網路、Peering 與 Transit Gateway','D3',30,'讓企業網路、AWS 帳號與多個 VPC 安全且可擴展地互通。',
  ['比較 VPN 和 Direct Connect','區分 peering 與集中轉送','理解路由與 DNS 依賴'],[
    s('VPN 與 Direct Connect','Site-to-Site VPN 使用加密 IPsec 隧道連接企業網路；Direct Connect 使用專用連線提供較一致的網路體驗。專用不等於預設加密，需要依合規採 VPN over DX 或適用 MACsec。','VPN 建立較快，可作備援。','DX 規劃交付時間、冗餘位置與線路。'),
    s('VPC peering','Peering 提供 VPC 之間私有連線，可跨帳號或支援的跨 Region 情境，但不具轉遞性。A 與 B、B 與 C 分別 peering，不代表 A 可經 B 到 C；重疊 CIDR 也會限制建立連線。','兩邊都需正確路由及安全規則。','不能依靠 peering 分享所有邊緣連線。'),
    s('Transit Gateway','當 VPC 與企業網路數量增加，TGW 提供集中樞紐與路由表分段，減少網狀連線管理。它仍需明確路由、關聯與傳播配置；集中樞紐不能自動取代細部隔離與防火牆。','不同路由表可隔離正式與測試。','比較附件、資料處理與跨區費用。'),
    s('混合 DNS 與冗餘','Route 53 Resolver inbound/outbound endpoints 可支援混合名稱解析。網路通了但 DNS 不通，應用仍無法使用服務。設計多條 VPN、DX 或不同設備時，要檢查路由優先與故障切換實際結果。','多條同一路徑線路不一定消除故障單點。','定期演練線路中斷。')
  ],['企業有 60 個 VPC，希望集中連接機房並隔離測試環境。','評估 Transit Gateway 搭配分段路由表、VPN/DX 與混合 DNS。','集中連線降低複雜度，分段控制互通範圍。'],['Peering 具有轉遞性。','DX 預設提供端到端加密。','忽略 CIDR 重疊與 DNS。'],['VPN 加密，DX 專用連線。','Peering 不轉遞。','TGW 提供集中且可分段的路由。'],[['Direct Connect 加密','https://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html'],['VPC peering','https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html'],['Transit Gateway','https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html']]);

  add('streaming','Kinesis、Firehose 與即時資料','D3',25,'依即時處理、重播及直接交付需求設計串流管線。',
  ['比較 Streams 和 Firehose','理解 partition key 與排序','規劃消費者與失敗'],[
    s('串流不是單純佇列','串流通常保存一段時間的事件，允許消費者依位置重讀，適合點擊流、遙測和即時分析。SQS 更偏向工作分派；若多個系統要獨立重播同一歷史事件，串流模型可能更合適。','先決定延遲、保留與重播需求。','事件時間與處理時間可能不同。'),
    s('Kinesis Data Streams','Streams 支援自訂消費者與依 partition key 的資料分布。順序通常在 shard 的相關範圍內討論，不能假設所有事件全球排序。熱門 partition key 會造成不平均負載。','依用量選容量模式並監控節流。','消費者記錄 checkpoint 才能從正確位置繼續。'),
    s('Amazon Data Firehose','Firehose 偏向受管資料交付，可緩衝、轉換並送往支援目的地。若只需把事件持續送到 S3 等服務，能減少自建消費者工作；緩衝代表不是每筆事件都立即可見。','以交付新鮮度、失敗及備援位置監控。','需要自訂低延遲邏輯時比較 Streams 與處理服務。'),
    s('分析與 Kafka 相容性','Managed Service for Apache Flink 適合有狀態串流運算、視窗聚合等需求。已有 Kafka 協定與生態可評估 MSK。選擇仍看既有工具、處理語意與營運負擔，而非把所有「即時」都選同一服務。','消費者必須處理重複事件與重試。','資料清理、schema 及錯誤資料保留同樣重要。')
  ],['大量設備事件只需轉成檔案送 S3，團隊不想維護消費者。','評估 Data Firehose 的來源與目的地整合，設定緩衝及失敗備援。','受管交付符合低維運目標，但需接受配置的緩衝延遲。'],['把 Firehose 當立即每筆執行。','所有裝置使用同一 partition key。','忽略消費延遲與保留時間。'],['Streams 偏自訂處理和重播。','Firehose 偏受管交付。','排序與容量依 partition 規劃。'],[['Kinesis Streams','https://docs.aws.amazon.com/streams/latest/dev/introduction.html'],['Data Firehose','https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html'],['MSK','https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html']]);

  add('analytics','S3 資料湖、Glue、Athena 與 Redshift','D3',30,'從資料儲存、目錄、轉換到查詢建立完整分析路徑。',
  ['區分 ETL、目錄和查詢','降低掃描與分析延遲','選資料湖或倉儲'],[
    s('資料湖的分層','S3 保存原始與整理後資料，Glue Data Catalog 保存表格與 schema 中繼資料；Lake Formation 可協助集中資料湖權限。資料目錄不是資料本體，crawler 探索 schema 也不代表資料已完成清洗。','原始、整理、分析層分開。','按時間及常用篩選條件規劃 partition。'),
    s('Glue 與 ETL','Glue 提供受管資料整合與轉換能力，適合清洗、格式轉換和合併資料。Schema 變更可能破壞下游，因此要驗證資料品質，保存失敗記錄並管理重跑。','ETL 是抽取、轉換、載入；ELT 次序不同。','將 CSV/JSON 轉為適合分析的壓縮欄式格式。'),
    s('Athena','Athena 可使用 SQL 查詢 S3 上資料，適合即席分析與不想管理伺服器的需求。查詢成本與掃描量相關，分區、壓縮及 Parquet/ORC 等格式可減少讀取資料，並改善查詢效能。','避免 SELECT * 掃描無用欄位。','大量小檔案可能增加處理負擔，可做 compaction。'),
    s('Redshift 與分析工具','Redshift 適合資料倉儲與大規模分析，支援 provisioned 或 serverless 等選項；Spectrum 可延伸查詢 S3。EMR 適合需 Hadoop/Spark 生態的資料處理，Amazon Quick（舊稱 QuickSight）偏視覺化分析。','資料倉儲不取代線上交易資料庫。','以查詢頻率、資料量、延遲和管理要求選工具。')
  ],['每週偶爾分析 S3 日誌，不想維護資料庫。','使用 Glue Catalog 定義表格，再以 Athena 查詢，按日期分區並使用壓縮欄式格式。','按需查詢降低維運，資料格式與分區降低掃描量。'],['Glue Catalog 被當成資料庫本體。','Athena 每次都掃全部原始檔。','Redshift 當低延遲交易系統。'],['S3 存資料，Catalog 存中繼資料。','Glue 做整合，Athena 做按需 SQL。','倉儲與交易系統目的不同。'],[['Athena','https://docs.aws.amazon.com/athena/latest/ug/what-is.html'],['Glue','https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html'],['Redshift','https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html']]);

  add('migration','遷移、DataSync、DMS 與混合儲存','D3',30,'依資料類型與停機容忍度選擇遷移工具，並規劃切換。',
  ['辨識資料庫與檔案遷移差異','比較 DataSync、DMS 與 MGN','設計初次載入和持續同步'],[
    s('遷移策略','先盤點相依、容量、合規與可接受停機。Rehost 保留架構搬遷，replatform 做有限平台調整，refactor 改寫應用；保留、退役或改採 SaaS 也可能更符合業務，而非所有系統都必須立即重構。','建立相依清單與分批波次。','遷移前決定回復條件和資料權威。'),
    s('檔案與大量資料','DataSync 適合支援來源與目的地間的線上檔案／物件傳輸，協助複製、驗證與排程。Snowball Edge 自 2025-11-07 起僅供既有客戶；離線裝置供應資格會變動，不能假設新客戶隨時可訂購，使用前查官方可用性。','Transfer Family 支援 SFTP 等受管檔案傳輸協定。','頻寬不足時評估初次與增量傳輸所需時間。'),
    s('資料庫與伺服器','DMS 可執行 full load 及支援的 change data capture，降低資料庫搬遷停機；異質引擎還需 schema 轉換及相容性修正。AWS Transform MGN（原 Application Migration Service）著重伺服器 rehost；考題可能沿用舊名稱。','DMS 不會自動修正所有 SQL 和預存程序。','遷移完成要比對筆數、校驗及應用行為。'),
    s('持續混合儲存','Storage Gateway 為本地應用連接雲端儲存提供不同介面，例如 File Gateway、Volume Gateway 或 Tape Gateway。選擇取決於 NFS/SMB、區塊或磁帶工作流程，與一次性搬資料不同。','本地快取需容量與失效規劃。','切換前停止或控制來源寫入，追平增量並驗證。')
  ],['機房資料庫需遷移到 RDS，不能接受數小時停機。','測試 schema 相容性，以 DMS full load 加 CDC 同步，再在短窗口控制寫入與切換。','先載入大量歷史資料，再追平變更可縮短最後停機。'],['DMS 當作應用自動改寫工具。','未驗證資料就切 DNS。','忽略回復後的雙向資料問題。'],['工具依資料類型選。','初次複製與增量同步分開。','遷移必須包含驗證和切換。'],[['DMS','https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html'],['DataSync','https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html'],['MGN','https://docs.aws.amazon.com/mgn/latest/ug/what-is-mgn.html'],['Storage Gateway','https://docs.aws.amazon.com/storagegateway/'],['Snowball Edge 可用性變更','https://docs.aws.amazon.com/snowball/latest/developer-guide/snowball-edge-availability-change.html']]);

  add('s3-cost','S3 儲存級別與生命週期成本','D4',30,'同時比較存放、取回、請求、保留期與可用性，避免只看每 GB 單價。',
  ['選擇儲存級別','設計 lifecycle','估算冷資料取回影響'],[
    s('存取頻率與復原時間','Standard 適合頻繁存取；IA 類型降低儲存單價但有取回與最小計費考量；Glacier Instant Retrieval、Flexible Retrieval、Deep Archive 的取回模式與時間不同。需求若是立即讀取，不能選必須先 restore 的類型。','比較頻率、延遲、耐久和 AZ 風險。','One Zone 類型適合可重建且接受 AZ 風險的資料。'),
    s('Intelligent-Tiering','存取模式未知或變化時，可評估 Intelligent-Tiering 的自動分層，並理解監控及自動化費用、物件資格與可選封存層。它不是任何大小、任何存取模式都保證最便宜。','小物件的成本結構要另算。','若開啟封存層，要核對復原需求。'),
    s('Lifecycle 的兩種動作','Transition 把物件移往適合級別；expiration 刪除物件或版本。Versioning bucket 需另處理 noncurrent versions 和 delete markers。遺留 multipart parts 也會佔用儲存，應設定中止規則。','遵守最低儲存期與轉換限制。','依前綴、標籤與大小精確套用規則。'),
    s('總成本而非儲存單價','大量取回、轉換請求、頻繁 list/get、跨區複寫與資料傳出都會影響帳單。資料保存期限受合規約束時，不可為省費直接刪除；應在符合保留和復原要求的級別間比較。','用 Storage Lens 或分析找出實際模式。','先小範圍驗證生命週期，再全面套用。')
  ],['法規日誌保存七年，平時不讀，調閱可等一天。','評估 Deep Archive 與生命週期，配合合規保留及實際取回成本。','長期低存取且可等待復原，適合封存型選項。'],['只看每 GB 低價不看取回費。','封存資料要求毫秒讀取。','版本永久堆積沒有規則。'],['頻率與復原時間決定級別。','生命週期包含舊版本與未完成上傳。','估算全成本。'],[['S3 storage classes','https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html'],['S3 lifecycle','https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html']]);

  add('compute-cost','EC2、Savings Plans、RI 與 Spot','D4',30,'將穩定基線、可變尖峰與可中斷工作分別配置容量和折扣。',
  ['比較計價模式','理解折扣與容量保留差異','設計可中斷工作'],[
    s('先減少浪費','購買折扣前先關閉閒置、調整規格並排程開關測試資源。長期承諾過量的折扣資源仍會浪費。將尖峰和基線分離，以監控資料估算穩定用量，而不是依最大瞬間需求購買承諾。','觀察 CPU、記憶體、網路與負載週期。','rightsizing 後才估承諾額度。'),
    s('On-Demand、Savings Plans 與 RI','On-Demand 適合短期或不確定用量；Savings Plans 以一定期間的每小時用量金額承諾換取折扣，依方案有不同彈性；Reserved Instances 的適用維度與方案不同。折扣不是自動保證所有 AZ 的容量。','Compute Savings Plans 可涵蓋支援的不同運算服務。','需容量保障時另外分析 Capacity Reservation 或特定 RI 類型。'),
    s('Spot 的中斷模型','Spot 使用閒置容量，價格優惠但可能被回收。適合可重試批次、分散式處理或有彈性工作的部分容量；不可把無保護的唯一資料庫放 Spot。應混用多種實例與 AZ，處理通知及 checkpoint。','運算可重建，資料持久化。','搭配佇列把中斷工作重新派發。'),
    s('授權與專用需求','Dedicated Host、Dedicated Instance、共享租用各有不同隔離和授權能力。題目若涉及既有每核心或每插槽授權、硬體可見性與合規，需優先核對授權條款，而非只比較一般運算價格。','Graviton 可能改善性價比，但要驗證架構相容。','Serverless 省維運不代表每種長時間負載都最低價。')
  ],['每天有可重試的轉檔批次，需最低運算成本且可接受中斷。','使用 Spot 多樣化容量，工作由佇列派發並保存進度及輸出。','工作可重試，能利用優惠容量並承受回收。'],['Spot 跑唯一不可中斷主庫。','折扣當成容量保證。','先買長期承諾再做 rightsizing。'],['先減浪費，再買折扣。','穩定基線適合承諾。','Spot 需要中斷容忍。'],[['EC2 purchasing options','https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html'],['Savings Plans','https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html'],['Spot practices','https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html']]);

  add('database-cost','資料庫與分析成本最佳化','D4',25,'把容量、查詢、索引、快取與服務模式一起納入成本判斷。',
  ['找出資料庫成本來源','比較 provisioned 與按需模式','降低分析掃描量'],[
    s('先解決低效率','一個缺少索引或使用不當全表掃描的查詢，可能讓資料庫被迫升級。先用查詢計畫與監控找出問題，再比較升規、讀取副本或快取。額外副本有費用且不能直接改善所有寫入瓶頸。','縮小傳回資料與執行頻率。','刪除無用索引前確認其他存取模式。'),
    s('關聯式資料庫','穩定長期用量可比較預留定價，開發測試可排程停止支援的資料庫，但儲存與備份仍計費。Aurora 的計算、儲存和 I/O 模式需依實際工作負載比較，不能只看執行個體小時單價。','保留符合可用性需求的備援。','Serverless 容量範圍應配合負載曲線。'),
    s('DynamoDB','容量模式依穩定性與管理需求選擇；Query、投影、索引設計及熱點都影響效率。最終一致讀取在適用時可減少讀取成本，卻不適合必須立即讀到最新值的要求。','TTL 減少無需保留資料。','GSI 帶來額外儲存與寫入成本。'),
    s('分析工作負載','Athena 以減少掃描量為重要優化方向；Redshift 以合適容量、資料分布、排序及工作排程改善利用率。每天只查一次和持續高併發 BI 可能適合不同方案。','欄式格式、分區和壓縮共同降低掃描。','工作群組與用量限制協助控制誤操作。')
  ],['Athena 日誌查詢費用高，每次只查一天卻掃描一年。','以日期分區、壓縮欄式格式與明確 partition filter 改善查詢。','減少實際掃描的資料，比單純減少結果列數更有效。'],['LIMIT 一定減少底層掃描。','所有資料庫都用同一容量模式。','省費時刪掉必要備援。'],['先優化查詢再增購。','容量模式依負載選。','降低實際掃描量。'],[['Athena 效能','https://docs.aws.amazon.com/athena/latest/ug/performance-tuning.html'],['DynamoDB 容量模式','https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html'],['RDS pricing','https://aws.amazon.com/rds/pricing/']]);

  add('network-cost','網路、CDN 與資料傳輸成本','D4',25,'沿著封包路徑找出 NAT、跨 AZ、跨 Region 與外送流量費。',
  ['畫出計費路徑','比較 endpoint 與 NAT','讓資料靠近運算'],[
    s('資料傳輸不是單一價格','跨 AZ、跨 Region、傳到網際網路及服務間特定路徑可能有不同計價。不能只看 EC2 和儲存費；高流量架構中，流量路徑可能是最大支出。實際價格依 Region、服務與方向查官方定價。','畫出每條資料流的方向、每月 GB 和頻率。','避免把所有「AWS 內部」流量都當免費。'),
    s('NAT 與 endpoint','NAT Gateway 可能有每小時和資料處理費。大量 S3/DynamoDB 流量可評估 gateway endpoint；多個 interface endpoint 則要比較小時與處理費。選擇必須包含可用性、安全與流量規模。','每 AZ 的 NAT 模式能減少某些跨 AZ 路徑，但增加常駐成本。','依實際區域及 NAT 模式核對可用選項。'),
    s('CDN 與快取','CloudFront 快取可減少來源讀取與遠端傳輸，但也有請求、外送與其他功能費用。對熱門靜態內容通常值得比較；個人化、不可快取資料要避免誤設快取造成洩漏。','壓縮與合適影像格式降低傳輸量。','提升命中率比只增加來源主機更有利。'),
    s('資料區域性','把運算放近主要資料，避免每次查詢跨 Region 搬動巨大資料。跨區複寫應由災備、法規或使用者需求驅動；不必要複製會同時增加儲存與傳輸。','先檢查是否真的需要搬資料。','優化須保留故障域隔離，不能為省費把所有層集中單 AZ。')
  ],['私有分析主機每天經 NAT 從 S3 讀取數 TB。','評估 S3 gateway endpoint 並核對 bucket/endpoint policy 及路由。','可使符合條件的 S3 流量避開 NAT 處理路徑。'],['所有 AWS 內部流量免費。','為省跨 AZ 費犧牲必要高可用。','不算 interface endpoint 小時費。'],['沿流量路徑計價。','端點選擇要算總成本。','資料與運算盡量靠近。'],[['VPC pricing','https://aws.amazon.com/vpc/pricing/'],['EC2 data transfer','https://aws.amazon.com/ec2/pricing/on-demand/'],['CloudFront pricing','https://aws.amazon.com/cloudfront/pricing/']]);

  add('finops','成本治理、Budgets 與用量分析','D4',25,'建立可歸屬、可預警、可持續優化的成本管理流程。',
  ['選成本監控工具','建立標籤與分攤','理解告警不等於硬性上限'],[
    s('成本可見性','Cost Explorer 用於探索歷史成本與用量，依帳號、服務與已啟用成本分攤標籤分析。需要更細緻明細可使用資料匯出與分析工具；費用資料有更新延遲，不能當每一秒即時餘額。','以 Owner、Environment、CostCenter 等標籤建立歸屬。','命名及標籤規範必須一致。'),
    s('Budgets 與異常','AWS Budgets 可對成本或用量等設定通知，部分情境可配置動作；Cost Anomaly Detection 偏向找出非預期成本變化。通知不是所有服務的即時消費硬上限，不能當成絕對不超支保證。','通知對象要能採取行動。','以預測與實際支出配合監控。'),
    s('建議與治理','Compute Optimizer 依資料提供支援資源的規格建議；Trusted Advisor 提供成本、安全等檢查。建議需要工作負載脈絡及測試，不能看到低利用率就任意刪除備援或月末批次所需容量。','先標記閒置，再驗證所有權。','變更後確認效能及可靠性沒有退步。'),
    s('持續改善','成本最佳化是反覆流程：觀測、歸因、調整、驗證。每次架構變更都評估 requests、storage、compute、transfer 和維運人力。若低費用方案需要大量人工作業，總成本未必更低。','以單筆訂單、每使用者或每 GB 的單位成本比較。','定期清理測試、快照、舊版本及未使用資源。')
  ],['團隊以為預算 100 美元會自動停止所有資源，結果仍超支。','配置預算通知及適用動作，搭配最小權限、配額與資源治理。','Budgets 主要提供監控與選定動作，不是全服務通用即時付款封鎖。'],['Budgets 被當成硬性封頂。','標籤建立後未啟用成本分攤。','不看業務週期就刪資源。'],['成本需要可歸屬。','告警後要有負責人。','以單位成本評估成果。'],[['Cost Explorer','https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html'],['AWS Budgets','https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html'],['Compute Optimizer','https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html']]);

  add('iac','CloudFormation 與可重現架構','D2',25,'以基礎設施即程式碼降低手動差異，支援測試、部署與災備。',
  ['理解 stack 與 template','使用變更集及 drift detection','保護有狀態資源'],[
    s('宣告目標狀態','CloudFormation 以 template 定義資源與相依，透過 stack 管理生命週期。IaC 讓環境可重建與審查，但不能自動理解所有資料遷移；對資料庫或 bucket 的變更仍需保護和計畫。','Parameters 輸入環境設定，Outputs 匯出重要結果。','不要把機密直接寫進 template。'),
    s('變更與回復','Change sets 顯示預期新增、修改、刪除及可能 replacement，讓部署前可檢查風險。Rollback 協助失敗時回復資源狀態，但不保證已寫入的業務資料或外部副作用一併回復。','檢查 replacement 對資料與端點的影響。','部署前先在非正式環境驗證。'),
    s('差異與多帳號','Drift detection 可找出支援資源偏離 template 的狀態。StackSets 協助跨多帳號與 Region 部署一致基線。手動修改正式環境若不回寫來源，會降低下次部署可預測性。','區分 template 版本與實際資源狀態。','使用服務角色及受限部署權限。'),
    s('資料保護與 DR','DeletionPolicy、UpdateReplacePolicy 及備份可降低刪除或替換資料風險。災備環境除了 template 還需要映像、資料、機密、配額和 DNS。IaC 加快重建，但它本身不等於持續資料複寫。','保留必要 snapshot 或 Retain 資源。','定期從原始碼和備份重建驗證。')
  ],['團隊要在第二 Region 重建相同網路與應用配置。','使用參數化 CloudFormation template，搭配跨區映像與資料復原程序。','程式化配置減少手動差異，但資料與區域相依仍需獨立準備。'],['IaC 自動備份所有資料。','Rollback 會回復所有業務交易。','未看 replacement 就更新正式資料庫。'],['IaC 管理可重現資源。','變更集先檢查替換。','資料保護需另行設計。'],[['CloudFormation','https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html'],['Change sets','https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html']]);

  add('reference-architecture','整合架構：高可用電商與非同步訂單','D0',35,'把服務選型串成從使用者到資料層的完整解答。',
  ['組合入口、運算和資料層','推演故障與尖峰','明確說出取捨'],[
    s('使用者到應用','使用 Route 53 指向 CloudFront，靜態資產由私有 S3 提供；動態請求進入 ALB，再送到跨 AZ 無狀態應用。HTTPS、WAF 及入口權限共同保護路徑。若是純 serverless API，可改用 API Gateway 與 Lambda。','每一層標明協定和安全群組。','不要把所有服務都堆進架構，僅保留有需求的元件。'),
    s('交易與讀取','訂單以適合的關聯式資料庫完成交易，多 AZ 提供容錯；熱門商品可加快取，報表讀取可導向副本。不同資料域也可能用 DynamoDB，但必須依存取與交易要求做出明確決定。','狀態外部化使運算可任意替換。','快取失效與資料庫連線上限納入設計。'),
    s('非同步後處理','付款成功後的通知、開發票或分析可用事件和佇列解耦。重要業務事件需避免資料庫已提交但事件未送出的不一致，可評估 transactional outbox 等模式；消費者依事件 ID 冪等。','每個下游有獨立重試和 DLQ。','佇列積壓驅動消費者擴展。'),
    s('驗證故障與成本','推演單 EC2、單 AZ、資料庫主要節點與 Region 故障。檢查健康檢查、備援容量、備份還原和 DNS 切換。最後標出費用來源：常駐容量、資料庫、NAT、儲存和傳輸。','跨 Region 不會自動解決雙寫一致性。','以可測試 RTO/RPO 決定是否需要 warm standby。')
  ],['促銷期間下單突增，通知服務變慢不能拖住付款。','付款交易完成後可靠發布事件，通知工作由獨立 SQS 消費者處理，監控積壓與失敗。','同步交易路徑與非同步工作隔離，降低下游故障擴散。'],['所有步驟都同步串聯。','事件發布和資料提交間沒有一致性保護。','跨 AZ 卻沒有足夠剩餘容量。'],['每個元件都應對應需求。','交易與後處理分離。','用故障推演驗證架構。'],[['可靠性設計原則','https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html'],['Transactional outbox','https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html']]);

  add('review','考前總複習：高頻比較與作答節奏','D0',25,'把容易混淆的服務整理成需求導向的決策，完成最後驗收。',
  ['快速比較常見替代方案','安排兩輪作答','用錯題確認薄弱環節'],[
    s('安全與網路的比較','安全群組與 NACL 比狀態性與規則；SCP 與 IAM 比上限和授權；KMS 與 Secrets Manager 比金鑰和機密；WAF 與 Shield 比應用過濾和 DDoS。先找到需求層級，再判斷服務。','私有路徑不等於已授權。','加密不等於已備份或已跨區。'),
    s('韌性與效能的比較','RDS Multi-AZ、read replica、backup 各解決不同問題；SQS、SNS、EventBridge 分別偏工作緩衝、廣播與事件路由；CloudFront、Route 53、GA 分別偏內容邊緣、DNS 和全球入口。','高可用不是讀取擴展的同義詞。','看到最少維運，檢查是否有符合功能的託管服務。'),
    s('時間管理','130 分鐘處理 65 題，平均約兩分鐘，但不需要每題相同。先完成有把握題目，困難題做標記再回看；多選題確認數量，每個選項都必須獨立滿足要求。未答題沒有猜題倒扣的優勢。','先列硬性限制，避免被熟悉服務名稱帶走。','留時間檢查多選數量和漏答。'),
    s('最後驗收','能不用選項，口述需求、架構、資料流、故障路徑與成本取捨，才表示理解。將錯題回連到課程，換一個情境重新解釋。考前再次查官方指南、政策與服務限制，本站提供截至查核日的學習起點。','連續兩次不同練習都穩定再評估準備程度。','實作至少涵蓋角色、VPC、S3、負載平衡與備份還原。')
  ],['題目問最低營運負擔，但你熟悉自建 EC2 資料庫。','先確認託管資料庫是否支援所需引擎、相容性與功能，再比較合適方案。','熟悉度不是題目目標；必須依明確限制選擇。'],['看到關鍵字就選服務。','只記正確答案不解釋其他選項。','把本站練習正確率當官方分數。'],['先限制，再比較。','多選逐項驗證。','用新情境檢查理解。'],[['SAA-C03 官方考綱','https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html'],['官方準備資源','https://aws.amazon.com/certification/certified-solutions-architect-associate/']]);
  add('ai-documents','AI 選型：影像、文件、文字與翻譯','D3',30,'以輸入資料和期望輸出選擇預先訓練的 AI API，避免不必要地自建模型。',
  ['比較 Rekognition 與 Textract','區分文字理解與翻譯','設計非同步文件處理管線'],[
    s('先問輸入與輸出','需要辨識影像中的物件、場景或內容類型，可先評估 Rekognition；需要從發票、表單或掃描文件取得欄位、表格與文字，優先評估 Textract。兩者都有文字相關能力，但主要資料語意不同。','影像標籤及影片分析：Rekognition。','文件結構與表單欄位擷取：Textract。'),
    s('Textract 與文件流程','將文件保存 S3，再呼叫適合的同步或非同步分析 API。分析結果是結構化資訊，仍需應用程式驗證金額、日期與必要欄位。低信心結果可送人工覆核；不要把辨識機率當成資料絕對正確。','支援語言、頁數與檔案格式依 API 查核。','批次結果保存並記錄原文件 ID，讓流程能追蹤和重試。'),
    s('Comprehend 與 Translate','Comprehend 著重自然語言分析，例如實體、情緒、關鍵詞及支援的個資偵測；Translate 將文字轉換為另一語言。文件若是掃描影像，可能先用 Textract，再將擷取文字送到語言處理服務。','理解內容與翻譯內容是不同需求。','功能的語言支援不同，不能假設所有 API 都支援同一語言。'),
    s('架構、安全與成本','S3 事件可啟動處理，SQS 緩衝工作，Step Functions 編排分析、轉換及覆核。每個服務只授權所需 bucket 與結果位置；資料含個資時規劃加密、保留和存取稽核。需求若已有受管 API 滿足，不必直接訓練完整模型。','大量文件使用非同步流程，避免長時間 HTTP 等待。','以文件 ID 做冪等，避免重試產生重複入帳。')
  ],['公司要從掃描發票抽出表格，再分析備註文字情緒並翻譯。','用 Textract 擷取文件，Comprehend 分析適用文字，Translate 執行翻譯，以狀態機處理失敗與覆核。','每一步按輸入和輸出選專門 API，減少自行開發與模型維護。'],['把 Translate 當文件 OCR。','把 Rekognition 與表單欄位解析完全畫上等號。','忽略低信心結果與語言限制。'],['影像理解與文件擷取不同。','Comprehend 分析，Translate 翻譯。','AI 結果仍需驗證與資料保護。'],[['Rekognition','https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html'],['Textract','https://docs.aws.amazon.com/textract/latest/dg/what-is.html'],['Comprehend','https://docs.aws.amazon.com/comprehend/latest/dg/what-is.html'],['Translate','https://docs.aws.amazon.com/translate/latest/dg/what-is.html']]);

  add('ai-speech-models','AI 選型：語音、對話與 SageMaker AI','D3',30,'分辨語音轉文字、文字轉語音、對話互動和客製模型的不同層次。',
  ['區分 Transcribe、Polly 與 Lex','理解模型訓練與推論','選擇受管 API 或客製模型'],[
    s('語音的兩個方向','Transcribe 將音訊轉成文字，支援適用的批次或串流工作；Polly 將文字合成語音。錄音字幕、會議逐字稿與客服分析通常從 Transcribe 開始；朗讀文章、語音提示則使用 Polly。','音訊→文字：Transcribe；文字→音訊：Polly。','聲音、語言、串流與附加功能的支援需逐一核對。'),
    s('Lex 管理對話','Lex 提供語音或文字的對話介面，透過 intent、slot 與履行邏輯完成工作。單純逐字稿不必建立聊天機器人；若要追問日期、地點並呼叫訂位流程，才需要對話狀態與意圖處理。','Lambda 可執行驗證及履行商業動作。','登入、授權和付款安全仍由整體應用設計承擔。'),
    s('SageMaker AI 的定位','需要自訂模型、資料處理、訓練及部署時，可使用 SageMaker AI 的受管工作流程。訓練產生模型，推論使用模型對新資料作預測。即時端點、非同步及批次推論適用於不同延遲和流量需求。','自訂訓練需要資料品質、評估及版本管理。','SageMaker AI 與整合資料分析的較大 SageMaker 平台名稱要區分。'),
    s('何時不必自建模型','若預先訓練的 AI 服務已符合語言、功能與準確率要求，直接使用 API 通常減少維運。若業務需要特殊分類、專有資料和不同推論需求，再比較客製能力。模型不是一次部署就完成，還要監控品質、漂移和成本。','閒置推論端點可能持續產生費用。','S3 資料權限、執行角色、網路及敏感內容保護要一起設計。')
  ],['教材平台要把講課錄音轉成字幕，再生成另一語言的朗讀。','使用 Transcribe 產生文字、Translate 翻譯、Polly 合成語音；以非同步工作追蹤狀態。','這是語音與文字轉換管線，不需要先建立自訂深度學習訓練平台。'],['Polly 和 Transcribe 方向顛倒。','任何 AI 需求都直接選 SageMaker 訓練。','模型端點閒置卻未管理成本。'],['Transcribe 聽寫，Polly 朗讀。','Lex 管對話與意圖。','SageMaker AI 處理客製 ML 工作流程。'],[['Transcribe','https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html'],['Polly','https://docs.aws.amazon.com/polly/latest/dg/what-is.html'],['Lex V2','https://docs.aws.amazon.com/lexv2/latest/dg/what-is.html'],['SageMaker AI','https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html']]);

  add('integration-migration','MQ、MSK、AppFlow 與既有整合相容性','D2',30,'當題目要求最少修改既有系統，協定與工具相容性會成為重要選擇條件。',
  ['辨識 message broker 和 event log','選擇 MQ 或 MSK 遷移','用 AppFlow 連接 SaaS 資料'],[
    s('Amazon MQ：保留訊息協定','Amazon MQ 管理 ActiveMQ Classic 或 RabbitMQ broker，適合已有相容協定與用戶端程式的遷移。SQS 也能解耦，但 API 與 broker 生態不同；題目要求最少重寫訊息程式時，先核對 MQ 的引擎與協定相容性。','JMS、AMQP 等需求需對照實際引擎支援。','託管 broker 仍需選容量、部署模式及用戶端重連策略。'),
    s('MSK：Kafka 的受管選項','Amazon MSK 適合既有 Kafka 生態與串流日誌工作負載。Kafka 消費者透過 offset 追蹤處理位置，可讓不同 consumer group 獨立消費。它不是 SQS 的完全等價替代，分區設計、排序與重播方式不同。','保留 Kafka 客戶端及工具可降低遷移工作。','託管不表示可以忽略熱 partition、消費延遲或儲存保留。'),
    s('AppFlow：SaaS 資料移動','AppFlow 使用支援連接器在 SaaS 與 AWS 服務間移動資料，適合排程匯入 CRM、客服等資料到 S3 或 Redshift。它可減少自建 API 抓取與排程程式，但必須確認來源、目的地、觸發方式及配額。','排程批次資料同步與即時業務事件路由不同。','連接器憑證與來源權限需要安全管理。'),
    s('選型與失敗語意','既有 ActiveMQ/RabbitMQ：MQ；既有 Kafka 與可重播串流：MSK；新建 AWS 工作佇列：SQS；SaaS 資料搬運：AppFlow。遷移前測試排序、重複、確認機制及故障重連，不能只看訊息最終送達。','AppSync 未明列於目前官方 in-scope 名單，本站不把它列為必修重點。','官方清單非窮盡，實際範圍仍以 AWS 最新指南為準。')
  ],['企業現有 Java 應用依賴 ActiveMQ 與 JMS，希望上雲後少改程式。','先評估 Amazon MQ 的相容引擎、支援協定、私有網路與高可用部署。','直接換成不同 API 的訊息服務可能需要較大改寫，與低修改目標衝突。'],['所有訊息服務都視為完全相同 API。','MSK 分區排序當成全域排序。','AppFlow 當任意協定的通用 broker。'],['相容性可能是硬性條件。','MQ 對應 broker，MSK 對應 Kafka。','AppFlow 對應 SaaS 資料流。'],[['Amazon MQ','https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html'],['Amazon MSK','https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html'],['Amazon AppFlow','https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html'],['官方範圍','https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/saa-03-in-scope-services.html']]);

  add('hybrid-dns-directory','混合 DNS、Resolver 與 Directory Service','D1',35,'在網路互通之外完成名稱解析和企業目錄整合，避免「能 ping 卻無法登入」的架構。',
  ['辨識 Resolver 端點方向','比較 Managed AD 與 AD Connector','設計混合登入相依'],[
    s('Inbound 與 outbound 的觀察方向','以 VPC 為觀察點：機房 DNS 要查 AWS 私有名稱，將查詢送到 inbound endpoint；AWS 要查機房名稱，透過 outbound endpoint 及 forwarding rule 送往機房 DNS。VPN 或 DX 只提供路徑，不會自動完成這些轉送。','AWS→機房：outbound；機房→AWS：inbound。','安全群組與防火牆需允許必要 DNS 流量，並避免規則迴圈。'),
    s('私有 hosted zone 與規則','私有 hosted zone 定義 VPC 內名稱。Resolver forwarding rule 指定某網域要轉送給哪些 DNS 伺服器，並關聯需要的 VPC。多帳號可集中端點並共享規則，減少每個帳號重複建置，但仍要有網路路徑。','不要把機房 DNS 直接指向其他 VPC 的 CIDR+2 當受支援入口。','端點應依服務要求跨 AZ 部署並留意查詢容量。'),
    s('目錄方案的差異','AWS Managed Microsoft AD 提供受管 AD 網域與支援整合；AD Connector 是把支援 AWS 應用的驗證導回既有 AD 的代理，不會取代機房網域控制站。目前另有 Managed Microsoft AD Hybrid Edition，可延伸既有 self-managed AD，選擇需按需求查最新版文件。','需要建立新受管網域與信任：評估 Managed AD。','只讓既有 AD 使用者登入支援服務：評估 AD Connector。'),
    s('登入相依與高可用','企業登入會依賴 DNS、時間同步、連線與目錄可用性。AD Connector 的設計若仍依賴機房，機房中斷可能影響驗證。IAM Identity Center 管理多帳號工作人員登入，Directory Service 則處理目錄相關需求，兩者可整合。','FSx Windows、RDS SQL Server 等服務要核對目錄整合方式。','測試主線路中斷、DNS 回應與新登入是否仍可用。')
  ],['AWS 應用需解析 db.corp.example，機房又要解析 AWS 私有服務名稱。','建立 Resolver outbound 規則查機房網域，配置 inbound endpoint 供機房轉送 AWS 私有網域，並建置冗餘路徑。','雙向 DNS 有不同查詢方向；只有 VPN 不能自動讓名稱解析互通。'],['Resolver inbound/outbound 方向顛倒。','AD Connector 當成雲端完整 AD 複本。','忽略 DNS 與網路中斷對登入的影響。'],['方向以 VPC 為基準。','DNS、網路與目錄都要可用。','目錄選項須考慮新版本功能。'],[['Route 53 Resolver','https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html'],['混合 DNS 查詢','https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-overview-DSN-queries-to-vpc.html'],['Directory Service','https://docs.aws.amazon.com/directoryservice/latest/admin-guide/'],['AD Connector','https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ad_connector_best_practices.html']]);

  add('resource-sharing','AWS RAM、共享 VPC 與 PrivateLink 服務','D1',30,'在多帳號環境共享合適資源，同時保留網路與工作負載所有權界線。',
  ['區分資源共享與連線','理解共享子網路責任','設計跨帳號私有服務入口'],[
    s('RAM 分享的是支援資源','AWS RAM 讓擁有者分享支援類型的資源給其他帳號、組織或 OU。不同資源有不同共享對象與限制，不能因 RAM 可共享子網路，就推論它能把任何 EC2、S3 或資料庫任意共享。','共享避免重複建立同類基礎資源。','仍須核對 IAM、RAM managed permission 與資源本身要求。'),
    s('共享 VPC 子網路','在支援條件下，網路帳號保有 VPC 與子網路，參與帳號在共享子網路中部署其應用資源。這讓網路集中管理、應用資源與帳務仍依所有者區分。共享子網路的參與帳號需符合 Organizations 前提。','擁有者管理網路；參與者管理自己的支援工作負載。','參與者不能任意修改擁有者的路由及網路資源。'),
    s('PrivateLink 分享服務','服務提供者通常以 NLB 作為 endpoint service 前端，允許指定主體連接；消費者建立 interface endpoint，以私有 IP 存取。這是服務導向的連線，不必建立兩個 VPC 的一般路由互通。','設計多 AZ 端點及健康後端。','連接允許、端點安全群組與應用授權是不同層。'),
    s('RAM、peering、TGW 的比較','RAM 重點是支援資源的共享；PrivateLink 重點是私有服務存取；peering 和 TGW 重點是網路間路由。若客戶只需存取供應商的一個服務，PrivateLink 常比打通整個網路更符合隔離目標。','CIDR 重疊的服務連線需求可評估 PrivateLink。','跨 Region PrivateLink 已有支援模式，不宜一概說永遠僅限同區，仍要核對區域與費用。')
  ],['中央網路團隊想統一管理子網路，但各產品帳號要自行部署主機。','透過 RAM 共享符合條件的 VPC 子網路，讓產品帳號建立自己的支援資源。','集中網路治理，同時維持工作負載所有權與帳號隔離。'],['RAM 被當成所有資源通用分享按鈕。','共享子網路就能修改擁有者路由。','PrivateLink 等於全網互通。'],['共享、授權、連線分開看。','共享 VPC 有明確所有者責任。','PrivateLink 對準服務入口。'],[['AWS RAM','https://docs.aws.amazon.com/ram/latest/userguide/what-is.html'],['共享 VPC','https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html'],['共享子網路責任','https://docs.aws.amazon.com/vpc/latest/userguide/vpc-share-limitations.html'],['PrivateLink 服務共享','https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-share-your-services.html']]);

  add('s3-advanced','S3 進階：Access Points、複寫與全球上傳','D3',35,'從多團隊授權、跨區複製及長距離傳輸建立進階 S3 決策。',
  ['選擇 Access Points','區分 live 與 batch replication','理解加速與不可變保護'],[
    s('Access Points 簡化不同存取需求','多個應用共享同一大型資料集時，可使用不同 S3 access point 設定各自政策與網路控制，而不是把所有規則塞進同一份 bucket policy。Access point 政策與底層 bucket 政策共同作用，不會繞過明確拒絕。','可限制 access point 只接受指定 VPC 來源。','Access point 主要服務支援的物件操作，不是 bucket 管理介面替代。'),
    s('SRR、CRR 與 Batch Replication','Same-Region Replication 和 Cross-Region Replication 依規則非同步複寫物件。需要啟用版本控制並配置角色、目的地與必要 KMS 權限。建立 live replication 後，不會自動把所有既有歷史物件一次補齊，需評估 Batch Replication。','跨帳號需目的地政策配合。','複寫延遲、失敗與資料駐留要求都要監控。'),
    s('Object Lock 與備份邊界','Object Lock 的 retention 與 legal hold 可限制受保護版本被刪除或覆寫。Governance 與 compliance 模式的繞過能力不同。即使資料不可刪，失去 KMS key 或被拒絕存取仍可能使資料無法使用，須一起保護金鑰。','新版本寫入與刪除特定受保護版本是不同動作。','不可變不等於跨區備份，也不等於已驗證可還原。'),
    s('Transfer Acceleration 與 multipart','全球客戶集中上傳遠距 S3 bucket 時，可測試 Transfer Acceleration 透過邊緣入口與最佳化路徑改善速度。它不是跨 Region 複寫，也不是所有距離都保證更快。Multipart upload 可平行上傳大物件，失敗時重送部分。','加速需使用對應 endpoint，並評估額外傳輸費。','bucket 名稱、Region 及請求模式有支援條件。')
  ],['公司已有數年影像，現在才建立另一 Region 的複寫規則。','配置 CRR 處理後續符合規則的新版本，使用 Batch Replication 補齊支援的既有物件並驗證完成報告。','Live replication 與歷史回填是不同工作；不能只建立規則就假設歷史資料已完成複製。'],['新建複寫規則自動回填全部歷史。','Access point 政策能覆蓋 bucket Deny。','Transfer Acceleration 保證所有上傳更快。'],['Access Points 分離存取政策。','既有物件複寫需另規劃。','加速、複寫與不可變目的不同。'],[['S3 Access Points','https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html'],['S3 Replication','https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html'],['Batch Replication','https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-batch-replication-batch.html'],['Object Lock 注意事項','https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html'],['Transfer Acceleration','https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html']]);

  add('edge-deployment','Outposts、Local Zones 與邊緣部署','D3',25,'用實際運算所在地回答低延遲、資料落地與混合雲需求。',
  ['比較 Outposts、Local Zones、Wavelength','區分 CDN 與邊緣運算基礎設施','檢查父 Region 和本地依賴'],[
    s('Outposts：客戶現場的 AWS 基礎設施','Outposts 將支援的 AWS 基礎設施與 API 延伸到客戶場地，適合需要接近本地設備、資料處理或特定落地要求的工作負載。AWS 管理提供的硬體，但客戶仍要準備場地、電力及網路等條件。','並非把整個 AWS Region 的所有服務都放入機房。','容量、服務支援與 Region 連線需求需明確規劃。'),
    s('Local Zones：靠近都會使用者','Local Zones 在靠近特定人口與產業中心的位置提供選定運算、儲存等資源，適合低延遲互動工作負載。它不等於客戶自行安裝的 Outposts，也不代表所有資源都已成為完全獨立 Region。','可用服務與價格可能不同於 parent Region。','本地運算仍需評估資料庫或控制面相依的往返延遲。'),
    s('Wavelength：通訊網路邊緣','Wavelength 將 AWS 運算與儲存放在通訊服務提供者網路邊緣，讓適用的行動或邊緣應用縮短路徑。設計會涉及 Wavelength Zone、子網路、carrier gateway 與 parent Region；可用位置依供應商與區域而異。','不是把一般 CloudFront 快取改名。','協定、來源使用者與實際服務位置需一起評估。'),
    s('別把入口加速和運算放置混用','CloudFront 快取 HTTP/S 內容，Global Accelerator 最佳化全球入口；Outposts、Local Zones 和 Wavelength 決定應用實際在哪裡執行。若延遲主要來自遠端資料庫，只移前端計算不一定改善端到端體驗。','量測使用者→運算→資料每一段。','邊緣站點故障、連線中斷及容量不足也需要恢復策略。')
  ],['工廠系統必須接近本地機械並使用熟悉的 AWS API。','評估 Outposts 的服務與容量是否符合要求，搭配本地網路及 parent Region 連線設計。','需求是現場運算與既有設備低延遲，單純 CDN 不會移動應用執行位置。'],['Outposts 提供全部 Region 服務。','Local Zone 等同完全獨立 Region。','只移運算卻忽略遠端資料相依。'],['Outposts 在客戶現場。','Local Zones 靠近特定都會。','Wavelength 位於通訊網路邊緣。'],[['AWS Outposts','https://docs.aws.amazon.com/outposts/latest/userguide/what-is-outposts.html'],['AWS Local Zones','https://docs.aws.amazon.com/local-zones/latest/ug/what-is-aws-local-zones.html'],['AWS Wavelength','https://docs.aws.amazon.com/wavelength/latest/developerguide/what-is-wavelength.html']]);

  add('governance-tools','企業治理補遺：標準產品、合規與安全調查','D1',30,'補齊常見次要服務的定位，讓工具選型有明確問題對應。',
  ['區分合規證據與組態檢查','理解 KMS 和 CloudHSM 控制程度','選中央治理與事件工具'],[
    s('Service Catalog 與 License Manager','Service Catalog 讓企業提供核准的 IT 產品與限制，使用者以自助方式部署標準環境。License Manager 協助追蹤授權與使用限制，適合 BYOL 或跨帳號授權治理；它不會自動改變第三方授權合約。','核准產品目錄不是一般商品網站。','部署約束、產品版本與存取權限要一起管理。'),
    s('Artifact 與合規證據','Artifact 提供 AWS 的合規與安全文件及協議管理，常用來取得 SOC、ISO 等稽核材料。它不會替客戶掃描所有資源或自動認證客戶應用合規；組態合規仍可能要使用 Config 與其他控制。','AWS 的證明不等於客戶工作負載自動合規。','把供應商證據、技術控制與操作流程分開驗證。'),
    s('CloudHSM 與 KMS','KMS 提供高度託管的金鑰管理與服務整合；CloudHSM 適合需要專用 HSM、更多密碼學控制或相容既有標準介面的需求。CloudHSM 同時帶來較多用戶管理、叢集及應用整合責任。','不要只因題目提到加密就選 CloudHSM。','嚴格 HSM 控制與最低維運需求之間要明確取捨。'),
    s('中央安全與服務事件','Firewall Manager 集中套用支援的組織安全防護；Detective 協助調查安全發現與相關活動；AWS Health 提供影響資源的服務事件和規劃活動資訊。它們分別處理政策一致、事件調查及服務健康，不取代 CloudWatch 應用監控。','安全發現可從偵測工具進入調查流程。','Health 事件可透過 EventBridge 整合回應；API 權益依支援方案查核。')
  ],['稽核員要求 AWS SOC 報告，工程師卻打算自行掃描 EC2 產生。','使用 AWS Artifact 取得 AWS 相關報告，再另行準備客戶應用的控制證據。','雲端供應商證據與客戶工作負載稽核是不同責任。'],['Artifact 自動證明客戶整套系統合規。','CloudHSM 一定比 KMS 適合所有加密。','AWS Health 取代應用錯誤率監控。'],['標準產品由 Service Catalog 治理。','Artifact 提供文件，Config 檢查組態。','治理、調查和健康資訊各有用途。'],[['Service Catalog','https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html'],['License Manager','https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html'],['AWS Artifact','https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html'],['CloudHSM','https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html'],['Firewall Manager','https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html'],['Amazon Detective','https://docs.aws.amazon.com/detective/latest/userguide/what-is-detective.html'],['AWS Health','https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html']]);
  return lessons;
})();
