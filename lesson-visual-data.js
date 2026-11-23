/* Original illustrations selected against the taught paragraph; generated from reviewed assets. */
window.LESSON_VISUALS={
 "foundations": [
  {
   "anchor": 3,
   "title": "同一筆雞肉飯，四個動作接起來",
   "purpose": "「收到、接受、留下紀錄」容易被當成同一件事；用客人、櫃台、店員與訂單紙的畫面，讓每一步都有可指認的動作。",
   "kind": "flow",
   "caption": "先送出，再收到、接受與留下紀錄；客人稍後查到的內容來自最後的保存動作。",
   "nodes": [
    {
     "id": "n1",
     "label": "客人選好送出",
     "detail": "雞肉飯 × 2，共200元",
     "icon": "phone",
     "explain": "客人在手機確認餐點、數量與金額後按送出。這是把選擇交出去，後面還要由店員收到並確認可以提供餐點。"
    },
    {
     "id": "n2",
     "label": "櫃台看見內容",
     "detail": "接單畫面出現兩份雞肉飯",
     "icon": "menu",
     "explain": "店員現在已在接單畫面看見兩份雞肉飯。這一步只表示餐廳收到選擇，接受的決定由下一步明確完成。"
    },
    {
     "id": "n3",
     "label": "店員答應準備",
     "detail": "確認今天能提供兩份",
     "icon": "chef",
     "explain": "店員確認餐點供應後決定接受，答應準備兩份雞肉飯。此時結果是接受，再把這個結果交給下一個保存動作。"
    },
    {
     "id": "n4",
     "label": "寫下並回覆",
     "detail": "兩份／200元／已接受",
     "icon": "receipt",
     "explain": "網站留下餐點、數量、金額與接受結果，再把結果顯示給客人。稍後重新打開頁面，能從留下的內容查到同一筆訂單。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "交出餐點與數量",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "確認能提供",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "保存後回覆",
     "tone": "normal"
    }
   ]
  }
 ],
 "web-request": [
  {
   "anchor": 2,
   "title": "一筆訊息出去，處理結果回來",
   "purpose": "請求與回應只有方向詞時不易想像；把手機送出的點餐內容與最後收到的接受結果分成兩端，中間明示已發生的處理。",
   "kind": "flow",
   "caption": "請求帶餐點與數量去；伺服器處理並保存後，回應帶接受結果回到客人。",
   "nodes": [
    {
     "id": "n1",
     "label": "手機送出請求",
     "detail": "雞肉飯 × 2",
     "icon": "phone",
     "explain": "用戶端把客人的餐點與數量送給接收方。箭頭表示送出這份具體訊息，不表示伺服器已完成接單與保存。"
    },
    {
     "id": "n2",
     "label": "伺服器處理",
     "detail": "確認內容並保存已接受訂單",
     "icon": "server",
     "explain": "伺服器已收到這份要求，執行訂餐程式並留下已接受的訂單。只有這段處理完成，才有後面要交回的結果。"
    },
    {
     "id": "n3",
     "label": "手機收到回應",
     "detail": "顯示訂單已接受",
     "icon": "phone",
     "explain": "伺服器交回接受結果與訂單內容，瀏覽器收到後才顯示。這裡的回應是回傳訊息，與剛才送出的請求方向相反。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "餐點＋數量 →",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "接受結果 →",
     "tone": "normal"
    }
   ]
  }
 ],
 "program-data": [
  {
   "anchor": 2,
   "title": "正在算的數字，與留下的訂單",
   "purpose": "「記憶體」與「保存」在純文字中很像同一個放資料動作；用暫存工作桌對照可日後查回的訂單紀錄，呈現兩者的時間差。",
   "kind": "compare",
   "caption": "可重算的中間值與已接受的訂單有不同保存需求；需要日後查詢的內容必須明確寫入。",
   "nodes": [
    {
     "id": "n1",
     "label": "執行中的工作",
     "detail": "目前算到：2 × 100",
     "icon": "gear",
     "explain": "程式執行計價規則，記憶體暫放正在使用的數字。這份中間狀態不能直接當作程式結束或環境更換後仍會存在的訂單紀錄。"
    },
    {
     "id": "n2",
     "label": "持久留下的結果",
     "detail": "訂單：兩份／200元／已接受",
     "icon": "receipt",
     "explain": "需要之後給店員與客人查詢的內容，應寫到適當保存位置並確認結果。保存是應用安排的明確動作，不是算完就自然完成。"
    }
   ],
   "links": []
  }
 ],
 "cloud-rental": [
  {
   "anchor": 2,
   "title": "租到資源，仍要安排網站的工作",
   "purpose": "「交給雲端」容易讓人想成整套網站責任都移走；以供應商的設備工作與餐廳的規則工作並排，讓責任有具體對象。",
   "kind": "compare",
   "caption": "供應商管理哪些設備依服務而異；訂單規則、資料用途與操作權限仍須團隊決定。",
   "nodes": [
    {
     "id": "n1",
     "label": "供應商提供能力",
     "detail": "電腦、儲存與實體設施",
     "icon": "cloud",
     "explain": "供應商提供可使用的運算與保存服務，並依服務承擔底層設施工作。它不會因為你租了資源，就知道餐廳的計價或員工授權規則。"
    },
    {
     "id": "n2",
     "label": "餐廳安排用途",
     "detail": "程式規則、資料與誰能操作",
     "icon": "chef",
     "explain": "團隊決定訂單如何計算、資料要留多久以及哪些人能操作。使用資源後還要逐項看計費，停止一個工作不代表其他保存費也停止。"
    }
   ],
   "links": []
  }
 ],
 "ec2-first": [
  {
   "anchor": 1,
   "title": "開燈了，櫃台才開始工作",
   "purpose": "「執行個體正在執行」常被讀成網站已完成；用先開機、再安裝啟動程式的兩個可見狀態，區分電腦與應用。",
   "kind": "timeline",
   "caption": "EC2已開機，只確定執行環境存在；訂餐程式也啟動後，才完成本課的程式執行安排。",
   "nodes": [
    {
     "id": "n1",
     "label": "電腦已啟動",
     "detail": "EC2提供可用執行環境",
     "icon": "server",
     "explain": "這個狀態表示租用電腦已啟動，還不能推出訂餐程式已經安裝或開始接單。就像店面已開燈，櫃台是否有人工作要另外確認。"
    },
    {
     "id": "n2",
     "label": "程式也啟動",
     "detail": "訂餐程式開始接收需要的請求",
     "icon": "gear",
     "explain": "團隊在相容環境部署並啟動應用，確認它能接收所需請求。外部手機如何抵達仍是下一階段的網路工作，這幅圖沒有把那一段當作已完成。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "安裝並啟動應用",
     "tone": "normal"
    }
   ]
  }
 ],
 "s3-first": [
  {
   "anchor": 2,
   "title": "一張照片在桶裡，有自己的名稱",
   "purpose": "桶、物件與key同時出現容易只剩三個名詞；把一個桶框住兩張照片，讓名稱與保存內容對上實際位置。",
   "kind": "hierarchy",
   "caption": "桶提供保存範圍；每個key辨認一個物件，名稱中的斜線不代表與電腦資料夾行為完全相同。",
   "nodes": [
    {
     "id": "n1",
     "label": "照片桶",
     "detail": "餐廳用來保存圖片的範圍",
     "icon": "bucket",
     "explain": "桶是物件的保存範圍，程式讀取時會指定桶與key。畫出桶框是為了辨認資料放在哪裡，不代表任何人已獲准讀取裡面的內容。"
    },
    {
     "id": "n2",
     "label": "飯盒照片",
     "detail": "key：images/rice.jpg",
     "icon": "file",
     "explain": "這個物件保存飯盒照片的內容，以images/rice.jpg辨認它。名稱是讀取時找資料的線索，不是替照片內容執行程式的命令。",
     "parent": "n1"
    },
    {
     "id": "n3",
     "label": "另一張照片",
     "detail": "使用另一個key辨認",
     "icon": "file",
     "explain": "另一份圖片內容使用自己的key。把檔案存進S3完成的是保存，是否能讓某位使用者讀到，仍是另外的存取檢查。",
     "parent": "n1"
    }
   ],
   "links": []
  }
 ],
 "database-first": [
  {
   "anchor": 1,
   "title": "同一列訂單，只更新處理狀態",
   "purpose": "「更新某筆資料」難以想像時，直接把同一訂單的前後列放在時間線上，避免誤認成重傳整個網站。",
   "kind": "timeline",
   "caption": "訂單編號相同，應用按規則把狀態從已接受更新為已出餐；照片與程式不因此被重傳。",
   "nodes": [
    {
     "id": "n1",
     "label": "原來的訂單列",
     "detail": "編號42／200元／已接受",
     "icon": "database",
     "explain": "這列資料有可辨認的訂單編號、金額與狀態，應用能查到指定訂單。它不是一張只按檔名取回的照片，而是可依資料模型操作的內容。"
    },
    {
     "id": "n2",
     "label": "更新後的同一列",
     "detail": "編號42／200元／已出餐",
     "icon": "receipt",
     "explain": "資料庫依指定模型更新已選定的訂單列，讓同一訂單狀態顯示為已出餐。這不是重新上傳整個網站，也不需要更換執行程式的電腦；改的是這筆資料的狀態。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "確認規則後更新",
     "tone": "normal"
    }
   ]
  }
 ],
 "checkpoint-web": [
  {
   "anchor": 2,
   "title": "第一版網站：每個位置做一種工作",
   "purpose": "服務名稱容易搶走工作本身的意義；從訂餐應用分出客人、照片與訂單三個關係，讓每條線帶著不同用途。",
   "kind": "fanout",
   "caption": "客人先由手機把選擇送入應用；圖中應用回覆結果，並分別取用S3照片與資料庫訂單。這只整理分工，網路與授權還待下一階段補上。",
   "nodes": [
    {
     "id": "n1",
     "label": "EC2上的訂餐程式",
     "detail": "計算與處理訂單",
     "icon": "server",
     "explain": "這是執行規則的位置，接到餐點與數量後安排處理和保存。線條只表示概念互動，沒有替你完成公開入口、網路或資料授權。"
    },
    {
     "id": "n2",
     "label": "客人的手機",
     "detail": "交出餐點與數量，收到結果",
     "icon": "phone",
     "explain": "客人與應用交換點餐內容和結果；應用不是手機上的按鈕本身。下一階段還要說明手機如何真正抵達這個處理位置。"
    },
    {
     "id": "n3",
     "label": "S3照片",
     "detail": "保存並取回圖片",
     "icon": "bucket",
     "explain": "照片屬於檔案保存工作，不能因為S3能放程式檔，就把它放在計算總價的位置。讀圖也需要後續明確的存取安排。"
    },
    {
     "id": "n4",
     "label": "資料庫訂單",
     "detail": "保存、查詢與更新紀錄",
     "icon": "database",
     "explain": "應用把訂單寫入資料庫，之後可依需要查詢或更新。這條關係的用途與取回照片不同，因此圖上要用不同文字標清楚。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "回覆接受結果",
     "tone": "normal"
    },
    {
     "from": "n1",
     "to": "n3",
     "label": "保存與讀取照片",
     "tone": "normal"
    },
    {
     "from": "n1",
     "to": "n4",
     "label": "寫入與查詢訂單",
     "tone": "normal"
    }
   ]
  }
 ],
 "cloud-location": [
  {
   "anchor": 2,
   "title": "Region是大範圍，AZ是裡面的隔離位置",
   "purpose": "地理範圍與電腦台數容易混在一起；用外框與內框的包含關係，讓讀者看出AZ不是另一個全球範圍。",
   "kind": "hierarchy",
   "caption": "一個Region包含多個AZ；EC2放在對應位置，不會因畫出另一個框就自動多一份資料。",
   "nodes": [
    {
     "id": "n1",
     "label": "一個Region",
     "detail": "選定的地理區域",
     "icon": "globe",
     "explain": "建立這類區域資源時會先選Region，影響你在哪裡查看與部署。它是一個位置範圍，不是一台執行訂餐程式的電腦。"
    },
    {
     "id": "n2",
     "label": "AZ A",
     "detail": "Region內的一個隔離位置",
     "icon": "network",
     "explain": "AZ屬於這個Region，可由一個或多個資料中心組成。把它畫在Region框裡，表示位置層級，而不是表示只能放一台主機。",
     "parent": "n1"
    },
    {
     "id": "n3",
     "label": "EC2",
     "detail": "放在AZ A的資源",
     "icon": "server",
     "explain": "這台EC2屬於圖中標明的位置；資源和位置是不同層級。到另一個Region查看時看不到它，不代表這台資源必然已被刪除。",
     "parent": "n2"
    },
    {
     "id": "n4",
     "label": "AZ B",
     "detail": "同Region內的另一位置",
     "icon": "network",
     "explain": "另一個AZ仍在同一Region內。這個位置可以另有資源，但僅有位置範圍，不代表原EC2的程式和訂單已經自動出現。",
     "parent": "n1"
    }
   ],
   "links": []
  }
 ],
 "network-first": [
  {
   "anchor": 2,
   "title": "寄給哪裡、交給誰、能不能來回",
   "purpose": "位址、連接埠與路徑都被稱為連線，容易無法分辨檢查位置；以手機到應用的三個檢查點，讓每項條件都有位置。",
   "kind": "flow",
   "caption": "正確位址、應用接收位置與完整去回路徑需一起成立；資料操作授權還是另一項工作。",
   "nodes": [
    {
     "id": "n1",
     "label": "找對目的地",
     "detail": "網站名稱查出所需IP位址",
     "icon": "globe",
     "explain": "客人使用名稱找到連線目的地，DNS在這裡先作為查地址的步驟。名稱正確只完成找位置，還沒有證明目的端程式在接收。"
    },
    {
     "id": "n2",
     "label": "找到接收窗口",
     "detail": "應用在合適位址與埠接收",
     "icon": "server",
     "explain": "通訊埠協助區分同一台電腦上的接收位置。電腦開著和訂餐應用真的在接收不同，就像地址正確仍要有櫃台值班。"
    },
    {
     "id": "n3",
     "label": "確認完整來回",
     "detail": "去程能送達，回應也能返回",
     "icon": "network",
     "explain": "路由安排往哪裡走，安全規則限制能否通行。送出的道路和回來的道路都要核對，不能用增加資料權限代替補齊網路路徑。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "還要找接收埠",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "還要確認去回路",
     "tone": "normal"
    }
   ]
  }
 ],
 "vpc": [
  {
   "anchor": 2,
   "title": "私有應用下載更新的去程",
   "purpose": "NAT、路由表與IGW在段落中像是並列名詞；沿同一筆更新請求畫出下一站，讓「有NAT卻沒路」具體可見。",
   "kind": "flow",
   "caption": "這條箭頭是應用主動下載更新；回應沿相應路徑返回，不是公網客人任意連入私有應用的入口。",
   "nodes": [
    {
     "id": "n1",
     "label": "私有應用",
     "detail": "EC2主動要求下載更新",
     "icon": "server",
     "explain": "這筆工作由私有應用先提出，和客人從外面進網站是不同方向。主機是否有應用權限，並不能替它建立前往外部的路由。"
    },
    {
     "id": "n2",
     "label": "私有路由表",
     "detail": "外部目的地交給NAT",
     "icon": "network",
     "explain": "關聯路由表決定封包的下一站；若缺少適當外部路由，主機不知道要把更新要求交給誰，光建立NAT資源也不夠。"
    },
    {
     "id": "n3",
     "label": "公有NAT",
     "detail": "轉換這條主動出站連線",
     "icon": "network",
     "explain": "公有NAT承接私有主機的主動出站請求，配合後面的對外路徑工作。它沒有把外界任意發起的連線都交給這台私有主機。"
    },
    {
     "id": "n4",
     "label": "Internet Gateway",
     "detail": "從VPC送往外部更新站",
     "icon": "globe",
     "explain": "IGW是本例通往網際網路的適當路徑一部分，回應還須能返回原連線。整條路徑要逐段配置，不能用公有子網名稱代替驗證。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "按關聯路由找下一站",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "指向已配置NAT",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "經適當IGW路徑",
     "tone": "normal"
    }
   ]
  }
 ],
 "identity-first": [
  {
   "anchor": 2,
   "title": "同一個程式：可以讀，不可以刪",
   "purpose": "「已登入」與「有權做什麼」常被合成一個成功狀態；讓同一身分提出兩個不同動作，畫出需要分別驗證的結果。",
   "kind": "compare",
   "caption": "連線與身分已確認後，仍需分別判斷動作；讀菜單成功與刪除照片失敗可以同時符合設計。",
   "nodes": [
    {
     "id": "n1",
     "label": "應成功的要求",
     "detail": "網站程式：讀菜單照片",
     "icon": "file",
     "explain": "這是程式完成顯示菜單所需的讀取工作，應在適用授權下成功。它只驗證這個身分可讀指定資料，不能代表該身分的其他動作都被允許。"
    },
    {
     "id": "n2",
     "label": "應失敗的要求",
     "detail": "同一程式：刪除全部照片",
     "icon": "shield",
     "explain": "刪除和讀取是不同操作，並非菜單顯示工作的必要權限。用同一身分測試這項要求應失敗，才能確認授權沒有放得過寬。"
    }
   ],
   "links": []
  }
 ],
 "iam": [
  {
   "anchor": 2,
   "title": "取得角色，與用角色讀資料，是兩道問題",
   "purpose": "信任政策和權限政策都寫在角色附近，容易讀成同一份允許；分成「誰取得身分」與「取得後做什麼」兩張卡，避免把信任當資料授權。",
   "kind": "compare",
   "caption": "信任允許取得角色，不會自動授予S3讀取；明確拒絕及其他適用條件仍須一起核對。",
   "nodes": [
    {
     "id": "n1",
     "label": "信任政策",
     "detail": "EC2能否取得這個角色？",
     "icon": "person",
     "explain": "這一部分回答誰可使用角色身分，與資料動作本身分工不同。只有角色信任EC2，仍不能推出程式已被允許讀取報表物件。"
    },
    {
     "id": "n2",
     "label": "權限政策",
     "detail": "角色可讀哪些報表？",
     "icon": "key",
     "explain": "這一部分限定取得角色後可執行的動作與資源，例如只讀指定報表。讀取要求還受其他適用政策與明確拒絕影響，不是最近新增Allow就全部完成。"
    }
   ],
   "links": []
  }
 ],
 "ec2-role-profile": [
  {
   "anchor": 2,
   "title": "角色怎麼交到EC2程式手上",
   "purpose": "「附加角色」省略了profile與程式憑證來源，讀者很難想像真正發生的交付；把載體、SDK與讀取目標分成一條具名路徑。",
   "kind": "flow",
   "caption": "profile把工作角色關聯到EC2；SDK使用臨時憑證讀指定照片，仍需資料授權與網路路徑。",
   "nodes": [
    {
     "id": "n1",
     "label": "工作角色",
     "detail": "只允許讀photos/圖片",
     "icon": "key",
     "explain": "先把本例工作範圍放在角色政策中，限定讀取需要的圖片。這不是管理員角色，也沒有因為要顯示菜單就授予刪除訂單的能力。"
    },
    {
     "id": "n2",
     "label": "Instance profile",
     "detail": "把這個角色關聯EC2",
     "icon": "server",
     "explain": "profile是把角色交給EC2的關聯載體，建立角色之後還要確認關聯存在。圖中的連線是身分交付，不是開放資料桶或建立網路出口。"
    },
    {
     "id": "n3",
     "label": "程式中的SDK",
     "detail": "使用並更新臨時憑證",
     "icon": "gear",
     "explain": "SDK依預設憑證來源取得角色的臨時憑證，避免把個人長期金鑰固定在映像。程式仍須使用正確來源，不能只附profile卻沿用舊個人金鑰。"
    },
    {
     "id": "n4",
     "label": "S3照片",
     "detail": "核對授權後讀取圖片",
     "icon": "bucket",
     "explain": "S3核對本例讀取動作及其他適用規則，再交回照片。有角色憑證表示有了身分，不表示每個物件或每條網路路徑都已開通。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "由profile承載",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "SDK取用角色身分",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "帶有效憑證要求讀取",
     "tone": "normal"
    }
   ]
  }
 ],
 "root-daily-access": [
  {
   "anchor": 2,
   "title": "帳號擁有者，不是每天共用的工牌",
   "purpose": "root、管理員與工作角色都像高低不同的帳號名稱；把保管中的擁有者身分和兩張個人工牌並排，讓日常分工具體化。",
   "kind": "compare",
   "caption": "日常工作用個別登入與適當角色；root另行保護，MFA並不會把root的高權限變小。",
   "nodes": [
    {
     "id": "n1",
     "label": "Root保管",
     "detail": "少數確實需要的帳號工作",
     "icon": "lock",
     "explain": "root是帳號擁有者身分，應保護登入資訊與MFA，沒有必要為日常部署建立root金鑰。它和一般工作角色的用途不同，不是大家共用的一張工牌。"
    },
    {
     "id": "n2",
     "label": "營運人員",
     "detail": "自己的登入＋查詢角色",
     "icon": "person",
     "explain": "營運人員用個別身分取得適當臨時工作階段，依職務查詢所需資料。操作可以對回個人與角色，不必分享root密碼或永久金鑰。"
    },
    {
     "id": "n3",
     "label": "部署人員",
     "detail": "自己的登入＋部署角色",
     "icon": "worker",
     "explain": "部署人員取得符合部署工作的角色，而非因為不是root就一律給管理員。職務或人員變動時，也要調整權限並保留操作記錄。"
    }
   ],
   "links": []
  }
 ],
 "network-security": [
  {
   "anchor": 1,
   "title": "回程會不會自動算進原連線？",
   "purpose": "有狀態與無狀態很抽象；直接畫同一筆HTTPS的回應在兩種防護下需要什麼，避免只記兩個縮寫。",
   "kind": "compare",
   "caption": "安全群組追蹤已允許連線；NACL仍要逐趟允許回程，包括適用的暫時埠範圍。",
   "nodes": [
    {
     "id": "n1",
     "label": "安全群組",
     "detail": "原連線回應：以連線狀態辨認",
     "icon": "shield",
     "explain": "安全群組追蹤已允許的連線，回應可被視為原連線的一部分。這不表示任何新連線都放行，也不會替資料庫提供資料操作權限。"
    },
    {
     "id": "n2",
     "label": "網路ACL",
     "detail": "去程與回程：各查適用規則",
     "icon": "network",
     "explain": "NACL在子網邊界依規則順序判斷，不記住先前已允許的連線。本例出站443獲准，仍須安排回到應用暫時埠的適用入站規則。"
    }
   ],
   "links": []
  }
 ],
 "sg-allow-union": [
  {
   "anchor": 2,
   "title": "兩張允許清單，合成同一個入口集合",
   "purpose": "讀者容易把第二個窄SG想成多一道否決；從同一介面分出兩份允許清單，讓聯集是「任何一份允許仍算數」看得見。",
   "kind": "fanout",
   "caption": "同一介面上Web允許443、Admin允許22；另一份清單沒寫22，不會否決原有22許可。",
   "nodes": [
    {
     "id": "n1",
     "label": "同一個網路介面",
     "detail": "同時附加兩組SG",
     "icon": "server",
     "explain": "本例兩份規則作用在同一個介面，適用許可會聚合。這不是封包依序闖兩個必須都允許的獨立關卡，因此不能用新增窄SG收回原許可。"
    },
    {
     "id": "n2",
     "label": "SG-Web允許",
     "detail": "入口來源 → TCP 443",
     "icon": "shield",
     "explain": "這份清單允許本例入口來源的443，沒有寫22並不是對22下拒絕規則。另一份SG已允許的22，仍留在此介面的有效允許集合。"
    },
    {
     "id": "n3",
     "label": "SG-Admin允許",
     "detail": "管理網段 → TCP 22",
     "icon": "shield",
     "explain": "管理網段的22由這份規則允許，不需要Web也寫相同許可。若22來源過寬，應修改真正放開它的這條規則，而非再疊一個窄SG。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "提供443許可",
     "tone": "normal"
    },
    {
     "from": "n1",
     "to": "n3",
     "label": "提供22許可",
     "tone": "normal"
    }
   ]
  }
 ],
 "s3-endpoint-policy": [
  {
   "anchor": 2,
   "title": "走哪條路，與桶接受誰，是兩件事",
   "purpose": "gateway endpoint和SourceVpce都帶端點名稱，容易讀成建立一項就完成；以路牌與桶端檢查並排，分清路由與授權責任。",
   "kind": "compare",
   "caption": "路由將S3流量帶到指定端點；桶政策才依端點來源等條件決定是否接受，角色還需有讀取權限。",
   "nodes": [
    {
     "id": "n1",
     "label": "路由的工作",
     "detail": "S3目的地 → gateway endpoint",
     "icon": "network",
     "explain": "應用子網關聯的路由表把適用S3流量送往端點，避免這條讀圖路徑繞NAT。端點存在及路由正確，不會自動給程式資料讀取權。"
    },
    {
     "id": "n2",
     "label": "桶政策的工作",
     "detail": "核對aws:SourceVpce等條件",
     "icon": "bucket",
     "explain": "桶政策可拒絕不符合指定端點來源的適用要求，這才是資源端的來源限制。套用前還要核對管理和服務例外，避免把必要工作一併擋住。"
    },
    {
     "id": "n3",
     "label": "角色的工作",
     "detail": "允許讀指定照片",
     "icon": "key",
     "explain": "程式仍要有適用的S3讀取授權；桶條件符合不能代替角色需要的動作範圍。路由、來源限制與工作權限要分別測試，才能串成讀取流程。"
    }
   ],
   "links": []
  }
 ],
 "nat-public-path": [
  {
   "anchor": 2,
   "title": "私有主機主動下載更新，沿路有誰？",
   "purpose": "NAT是什麼與回程如何回到主機不容易靠名詞想像；用明確的更新站與四個位置，固定本課只談主動出站。",
   "kind": "flow",
   "caption": "EC2先發出下載要求，NAT配合EIP及IGW路徑；更新回應沿原連線返回，並未建立任意入站入口。",
   "nodes": [
    {
     "id": "n1",
     "label": "私有EC2",
     "detail": "沒有公有IP，先提出下載要求",
     "icon": "server",
     "explain": "更新工作由這台私有主機先發起，私有子網的預設路由把外部流量交給NAT。沒有公有IP不等於不能透過適當出口主動連線。"
    },
    {
     "id": "n2",
     "label": "公有zonal NAT",
     "detail": "在公有子網，配置EIP",
     "icon": "network",
     "explain": "本例NAT轉換這條連線來源，需有Elastic IP並放在具適當對外路由的公有子網。只有建立同名資源，沒有這些配置仍不能完成下載。"
    },
    {
     "id": "n3",
     "label": "Internet Gateway",
     "detail": "所在子網的對外路由到IGW",
     "icon": "globe",
     "explain": "VPC附加IGW，NAT所在子網有適用IGW路由，才能接續到IPv4公網。這是整條去回路的一部分，不會替代主機或端點的其他安全條件。"
    },
    {
     "id": "n4",
     "label": "外部更新站",
     "detail": "回覆沿已建立連線返回",
     "icon": "file",
     "explain": "更新站收到主機主動提出的要求後回覆，回應經原連線轉換返回EC2。這個畫面沒有允許任意外部客人直接連到私有主機。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "私有路由指向NAT",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "經IGW對外",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "到達更新站",
     "tone": "normal"
    }
   ]
  }
 ],
 "interface-endpoint-path": [
  {
   "anchor": 2,
   "title": "私有服務存取，依序定位是哪一段",
   "purpose": "DNS、SG與IAM混在「讀不到」裡很難定位；用三個不同問題串起一筆請求，說明每一步成功不會代替下一步。",
   "kind": "flow",
   "caption": "先看名稱是否解析到端點私有IP，再看連線，最後檢查適用資料授權；不要把其中一項當成全部。",
   "nodes": [
    {
     "id": "n1",
     "label": "名稱解析",
     "detail": "服務名稱 → 端點私有IP",
     "icon": "globe",
     "explain": "先在應用所在環境查名稱結果，確認是否導向本例端點私有IP。只建立interface endpoint不保證普通服務名稱已改走它，仍須核對private DNS前提。"
    },
    {
     "id": "n2",
     "label": "網路連線",
     "detail": "路由、NACL及端點SG允許443",
     "icon": "network",
     "explain": "解析正確後還要能真正連上端點介面。本例若端點SG未允許應用的HTTPS來源，增加服務讀取權限無法替它打通被擋的TCP連線。"
    },
    {
     "id": "n3",
     "label": "服務授權",
     "detail": "角色與適用政策允許讀取",
     "icon": "key",
     "explain": "連線成功只表示請求到得了服務，接著仍依IAM、端點及資源政策核對動作。若這時收到授權拒絕，就應查相應政策，而非重改已正常的網路。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "有正確位址才測連線",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "能連到才核對讀取",
     "tone": "normal"
    }
   ]
  }
 ],
 "encryption-first": [
  {
   "anchor": 2,
   "title": "鎖住路上的訊息，與鎖住留下的檔案",
   "purpose": "「有鎖頭」常被誤解成全部資料都受相同保護；把連線中的訂單與已保存訂單並排，讓保護階段分開。",
   "kind": "compare",
   "caption": "傳輸保護標在資料移動的路上；靜態加密標在保存位置。它們都不會替代正確的資料授權。",
   "nodes": [
    {
     "id": "n1",
     "label": "資料正在傳送",
     "detail": "手機 → 網站：HTTPS／TLS",
     "icon": "network",
     "explain": "傳輸保護作用在特定連線，例如手機把訂單交給網站。保護這條連線，不表示網站之後連到其他系統的每一段也已套用相同保護。"
    },
    {
     "id": "n2",
     "label": "資料已經保存",
     "detail": "磁碟或儲存服務中的訂單",
     "icon": "lock",
     "explain": "靜態加密保護存放中的資料，和連線上的TLS不同。若錯誤對象仍被授權讀取並解密，已加密也不能消除那個存取控制問題。"
    }
   ],
   "links": []
  }
 ],
 "kms-secrets": [
  {
   "anchor": 1,
   "title": "大檔用資料金鑰；KMS金鑰保護它",
   "purpose": "信封加密像連續出現兩次金鑰，純文字很容易把它們混成同一把；以外層保護與內層資料分工畫出兩種用途。",
   "kind": "flow",
   "caption": "箭頭表示兩層保護依賴：KMS金鑰保護資料金鑰，資料金鑰加密大型報表；不是把整個大檔送進一次KMS加密。",
   "nodes": [
    {
     "id": "n1",
     "label": "KMS金鑰的保護",
     "detail": "保護這把資料金鑰",
     "icon": "key",
     "explain": "KMS管理的金鑰在信封加密裡保護資料金鑰，並受相應使用權限控制。能取得加密檔案，不代表也有權使用這把金鑰解開所需內容。"
    },
    {
     "id": "n2",
     "label": "資料金鑰",
     "detail": "用於加密大型報表",
     "icon": "key",
     "explain": "資料金鑰實際用來保護這份大型資料；再由外層KMS金鑰保護它。分成兩層用途，避免把所有大檔內容當成單次KMS加密請求。"
    },
    {
     "id": "n3",
     "label": "加密報表",
     "detail": "保存的內容需要適當解密流程",
     "icon": "file",
     "explain": "這份報表是被資料金鑰保護的內容。讀取時需同時核對物件存取與相關金鑰使用權，不會因合作方拿到檔案就自動具有解密能力。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "保護資料金鑰",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "用資料金鑰保護報表",
     "tone": "normal"
    }
   ]
  }
 ],
 "kms-material-rotation": [
  {
   "anchor": 2,
   "title": "同一把邏輯金鑰，保留不同時期材料",
   "purpose": "「輪替」容易被想成舊鎖被丟掉或舊檔全部改寫；把同一key下的新舊材料用途並排，讓解密舊檔的依賴可見。",
   "kind": "compare",
   "caption": "材料輪替後key的身分不變；新要求用新材料，舊密文仍依原材料解密，舊檔不會因此被重寫。",
   "nodes": [
    {
     "id": "n1",
     "label": "昨天的密文",
     "detail": "同一key選原本對應材料",
     "icon": "file",
     "explain": "昨天報表仍保留原密文，KMS可為它選用正確的舊材料解密。輪替成功沒有把這個檔案改用新資料金鑰，若需重加密仍要另安排作業。"
    },
    {
     "id": "n2",
     "label": "今天的新要求",
     "detail": "同一key使用輪替後材料",
     "icon": "key",
     "explain": "在支援的材料輪替方式下，後續運算依規則使用新材料，但key的ID、ARN與政策不會因此變成另一資源。應用不必只因材料更新就換另一ARN。"
    },
    {
     "id": "n3",
     "label": "改Alias指向",
     "detail": "指向B不會替舊密文換鎖",
     "icon": "workflow",
     "explain": "若另建key-B再改別名，那是改變指向而非把A、B材料合併。舊資料仍依賴A及必要權限，不能因別名改向B就刪掉尚有依賴的A。"
    }
   ],
   "links": []
  }
 ],
 "kms-state-recovery": [
  {
   "anchor": 1,
   "title": "檔案沒消失，是金鑰狀態改了",
   "purpose": "「權限都在卻讀不到」缺少可見原因；把成功、停用與授權恢復三個狀態放在時間線上，顯示被改動的唯一控制。",
   "kind": "timeline",
   "caption": "S3物件與既有權限未變；Disabled會阻止所需KMS運算，經授權恢復Enabled後再用原權限驗證。",
   "nodes": [
    {
     "id": "n1",
     "label": "原來能讀",
     "detail": "金鑰Enabled，權限符合",
     "icon": "key",
     "explain": "本例已先確認物件讀取、金鑰使用授權與Enabled狀態都成立。留下測試和金鑰ARN，之後才知道故障是在內容、身分還是狀態這一層。"
    },
    {
     "id": "n2",
     "label": "金鑰被停用",
     "detail": "物件仍在，但解密受阻",
     "icon": "lock",
     "explain": "管理人員把key設為Disabled後，新讀取所需的解密運算受阻。再增加S3 Allow或換保存類別，沒有把停用的金鑰變回可運算狀態。"
    },
    {
     "id": "n3",
     "label": "批准後恢復",
     "detail": "確認原因，再啟用並重測",
     "icon": "shield",
     "explain": "授權人員確認誤停用原因後依程序恢復金鑰可用狀態，再用原先最小權限測試。這不是用更大資料權限繞過金鑰生命週期管理。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "只改金鑰狀態",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "依批准程序恢復",
     "tone": "normal"
    }
   ]
  }
 ],
 "secret-rotation": [
  {
   "anchor": 2,
   "title": "新密碼要同時被資料庫與應用採用",
   "purpose": "輪替若只理解成改儲存字串，會忽略兩端仍拿不同密碼；沿建立、測試發布與應用重讀畫出交接。",
   "kind": "flow",
   "caption": "機密服務發布新值前要讓資料庫接受並測試；應用也需更新取值與連線，保存成功不是輪替全程完成。",
   "nodes": [
    {
     "id": "n1",
     "label": "建立新密碼",
     "detail": "輪替流程準備可用新值",
     "icon": "key",
     "explain": "輪替流程不是隨機改一串文字，而是配合支援整合或函式更新相關系統。這個新值必須真的能用在本例資料庫登入，而不只存在機密記錄裡。"
    },
    {
     "id": "n2",
     "label": "測試並發布",
     "detail": "資料庫接受，發布目前版本",
     "icon": "database",
     "explain": "先確認新密碼能建立有效連線，再發布相符的新目前版本。若只更新保存的值而資料庫仍認舊值，程式改拿新值反而可能無法登入。"
    },
    {
     "id": "n3",
     "label": "應用重新取得",
     "detail": "更新快取並建立可用連線",
     "icon": "server",
     "explain": "應用依合適快取與失敗處理重新取值，讓執行中的程式用到正確版本。輪替服務完成不會自動替每份應用快取改掉原本記住的密碼。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "更新並驗證資料庫",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "讓程式取用目前版本",
     "tone": "normal"
    }
   ]
  }
 ],
 "parameter-securestring": [
  {
   "anchor": 1,
   "title": "參數名稱可辨認用途，秘密放值裡",
   "purpose": "SecureString容易讓人以為整筆參數都被隱藏；把可見名稱標籤與被保護的值分開，避免把密碼直接寫進名稱。",
   "kind": "compare",
   "caption": "SecureString使用KMS保護參數值；名稱等中繼資料不因此一起保密，讀取及必要解密授權仍需成立。",
   "nodes": [
    {
     "id": "n1",
     "label": "參數名稱",
     "detail": "/orders/service-token",
     "icon": "file",
     "explain": "名稱用來指出參數用途，不應把密碼本身放進名稱或標籤。SecureString不是把這些中繼資料都變秘密，因此應使用不含敏感值的描述。"
    },
    {
     "id": "n2",
     "label": "參數的值",
     "detail": "敏感內容由KMS加密",
     "icon": "lock",
     "explain": "這才是SecureString保護的內容；要求解密值時還要符合參數讀取與適用KMS授權。取得明文後也要保護日誌與接收對象，而非把它任意輸出。"
    }
   ],
   "links": []
  }
 ],
 "s3-security": [
  {
   "anchor": 1,
   "title": "一般刪除後，先看版本列",
   "purpose": "目前列表看不到物件很容易被想成資料全消失；把同key的新舊版本和刪除標記依時間排開，讓目前與歷史的差別可見。",
   "kind": "timeline",
   "caption": "開啟版本控制後，一般刪除可能新增刪除標記；舊版本仍可能保留，永久刪除特定版本是另一種操作。",
   "nodes": [
    {
     "id": "n1",
     "label": "昨日菜單",
     "detail": "menu.json的舊版本",
     "icon": "file",
     "explain": "這是同一key較早保存的菜單內容，版本控制讓它可能在上傳新菜單後仍保留。它不一定顯示在一般目前物件列表，需查看版本才能找出。"
    },
    {
     "id": "n2",
     "label": "今日菜單",
     "detail": "相同key，另一個版本",
     "icon": "file",
     "explain": "新上傳使用相同key，仍是另一個版本，並不是宣告所有舊內容都永久消失。若今日內容有錯，可先查看保留版本再選恢復方式。"
    },
    {
     "id": "n3",
     "label": "一般刪除",
     "detail": "刪除標記成為目前狀態",
     "icon": "receipt",
     "explain": "未指定版本的一般刪除通常加入刪除標記，讓普通讀取像是物件不在。這個標記沒有直接證明舊版本全被永久刪除，保存費與清理仍要盤點。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "上傳新版本",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "未指定版本的一般刪除",
     "tone": "normal"
    }
   ]
  }
 ],
 "s3-presigned-session": [
  {
   "anchor": 2,
   "title": "網址寫12點，憑證卻只活到11點",
   "purpose": "兩個到期時間如果藏在長句裡很難比較；將10點、11點與12點放到同一時間線，突出真正較早的限制。",
   "kind": "timeline",
   "caption": "以臨時憑證簽出的舊網址不能超過該憑證有效期；11點半發起新下載時，不能只看網址宣告12點到期。",
   "nodes": [
    {
     "id": "n1",
     "label": "10點簽出",
     "detail": "網址宣告12點到期",
     "icon": "clock",
     "explain": "客服用當時有效的角色憑證產生指定收據下載網址。網址同時依賴簽名者有效憑證與權限，宣告期限不是獨立於這些條件的永久許可。"
    },
    {
     "id": "n2",
     "label": "11點憑證到期",
     "detail": "舊網址的新下載受此限制",
     "icon": "key",
     "explain": "這是本例較早到達的有效期限制；即使網址字面仍寫12點，舊簽名所用憑證已失效。重新取得角色憑證也不會回頭改寫這份舊簽名。"
    },
    {
     "id": "n3",
     "label": "12點宣告期限",
     "detail": "無法把已到期憑證延長",
     "icon": "file",
     "explain": "這個時間不能讓11點到期的簽名依據繼續有效。若客人仍有資格，後端要重新判斷並用有效憑證簽新網址，不能直接修改舊連結的期限字串。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "簽名憑證先到期",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "網址宣告仍有更晚時間",
     "tone": "normal"
    }
   ]
  }
 ],
 "s3-historical-encryption": [
  {
   "anchor": 2,
   "title": "改預設後，新檔與舊檔走不同路",
   "purpose": "「預設」容易被當成套用全桶的回溯修改；用2022舊檔、今天新檔及完成後的版本盤點對照，讓歷史責任留在畫面。",
   "kind": "compare",
   "caption": "桶的新預設影響後續寫入；歷史未加密內容需適用的加密複製或重寫，還要另外確認保留版本。",
   "nodes": [
    {
     "id": "n1",
     "label": "今天的新檔",
     "detail": "依新預設驗證SSE-KMS",
     "icon": "file",
     "explain": "今天上傳的新檔可以用來確認桶的新預設是否生效，但這個結果只證明這次寫入的狀態。不能用它推論2022年留下的未加密內容也被重寫。"
    },
    {
     "id": "n2",
     "label": "2022年舊檔",
     "detail": "盤點後安排加密複製／重寫",
     "icon": "file",
     "explain": "這批未加密舊物件不會被預設設定自動修改，需使用支援其來源的作業。不能把只支援既有加密來源的更新功能直接套在未加密檔上。"
    },
    {
     "id": "n3",
     "label": "保留的歷史版",
     "detail": "目前版完成後仍逐一確認",
     "icon": "receipt",
     "explain": "版本控制可能讓作業產生新版本，而舊版本仍留著。應核對清單、失敗報告及實際金鑰，確認範圍內歷史資料也符合要求，而不只看作業已送出。"
    }
   ],
   "links": []
  }
 ],
 "s3-customer-key-custody": [
  {
   "anchor": 1,
   "title": "同樣客戶保管金鑰，加密發生處不同",
   "purpose": "「客戶提供」和「客戶端加密」名稱接近但責任不同；把加密位置與傳給S3的內容放在兩張卡，直接比較信任邊界。",
   "kind": "compare",
   "caption": "SSE-C由S3在服務端加解密，要求須供應金鑰；客戶端加密則先在自己的程式產生密文再上傳。",
   "nodes": [
    {
     "id": "n1",
     "label": "SSE-C",
     "detail": "HTTPS送資料與金鑰給S3處理",
     "icon": "bucket",
     "explain": "公司保管每個版本對應的金鑰，但本次要求會把金鑰交給S3完成服務端加解密。客戶保管不等於金鑰從不離開客戶環境，也不代表S3替公司長期保管它。"
    },
    {
     "id": "n2",
     "label": "客戶端加密",
     "detail": "公司程式先加密，只送密文",
     "icon": "lock",
     "explain": "公司控制的程式先完成加密，再把密文交給S3保存，取回後也由自己解密。這符合本課明文和解密金鑰不交給S3處理的不同要求，仍要管理保存權限與金鑰生命週期。"
    }
   ],
   "links": []
  }
 ],
 "s3-https-policy": [
  {
   "anchor": 1,
   "title": "同一角色，用兩種傳輸測同一條規則",
   "purpose": "Bool=false加Deny是雙重語句，很容易把真假看反；直接呈現HTTP符合拒絕與HTTPS不觸發此拒絕的兩個測試。",
   "kind": "compare",
   "caption": "SecureTransport=false時觸發本例拒絕；HTTPS不觸發這條拒絕，但仍要有正常資料權限。",
   "nodes": [
    {
     "id": "n1",
     "label": "HTTP要求",
     "detail": "SecureTransport=false → 拒絕",
     "icon": "network",
     "explain": "這筆要求未使用安全傳輸，符合本例Bool條件，因此適用Deny會拒絕它。桶的SSE-KMS保存加密沒有把這條HTTP傳輸自動變安全。"
    },
    {
     "id": "n2",
     "label": "HTTPS要求",
     "detail": "不觸發這條非TLS拒絕",
     "icon": "lock",
     "explain": "這筆要求使用TLS，所以不符合本例拒絕非安全傳輸的條件。這不是額外授予讀寫權；只有其他適用資料授權也成立時，操作才可成功。"
    }
   ],
   "links": []
  }
 ],
 "failure-first": [
  {
   "anchor": 0,
   "title": "多兩個窗口，仍等同一個保存位置",
   "purpose": "數主機台數不等於找到單點；用一個必要保存位置連著兩個應用，讓共同依賴看得見。",
   "kind": "fanout",
   "caption": "如果兩個應用都必須使用同一個不可用保存位置，增加應用台數仍不能讓這筆訂單完成保存。",
   "nodes": [
    {
     "id": "n1",
     "label": "共同訂單保存處",
     "detail": "不可用時，必要保存工作停住",
     "icon": "database",
     "explain": "這是兩個應用完成訂單都需要的共同位置。即使資料還在，這個位置此刻不可用仍可能讓接受訂單的必要流程停住，不能只數應用有兩份。"
    },
    {
     "id": "n2",
     "label": "應用A",
     "detail": "需要同一處留下訂單",
     "icon": "server",
     "explain": "應用A能執行程式，不代表它能越過不可用的必要依賴。若訂單還無法按接受條件留下，就不能因畫面仍能顯示而輕易宣稱接單成功。"
    },
    {
     "id": "n3",
     "label": "應用B",
     "detail": "也需要同一處留下訂單",
     "icon": "server",
     "explain": "另一台應用仍使用相同保存位置，所以並未移除這個單點。下一步應先說明可容忍的中斷與需要的接手能力，而非把多一台等同完整備援。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "兩者共同依賴",
     "tone": "normal"
    },
    {
     "from": "n1",
     "to": "n3",
     "label": "兩者共同依賴",
     "tone": "normal"
    }
   ]
  }
 ],
 "region-first": [
  {
   "anchor": 2,
   "title": "跨AZ是跨故障範圍，不是跨整個Region",
   "purpose": "「兩份」只表示數量，不能看出是否一起受影響；用同Region內兩個AZ及各一份應用的外框，標明這次跨過哪個範圍。",
   "kind": "hierarchy",
   "caption": "應用分在兩個AZ降低單AZ共同故障風險；仍在同一Region，且資料層與流量切換還需另行安排。",
   "nodes": [
    {
     "id": "n1",
     "label": "同一Region",
     "detail": "兩份應用仍位於這個區域",
     "icon": "globe",
     "explain": "這是較大的地理部署範圍，裡面包含多個AZ。跨過下面兩個小框，並不表示已跨過整個Region，也不能視為所有災難復原都完成。"
    },
    {
     "id": "n2",
     "label": "AZ A",
     "detail": "一個隔離位置",
     "icon": "network",
     "explain": "這個位置有自己的故障影響範圍。若兩份應用都放在這裡，AZ層級故障仍可能一起影響它們，因此要辨認位置而不只看台數。",
     "parent": "n1"
    },
    {
     "id": "n3",
     "label": "應用A",
     "detail": "部署在AZ A",
     "icon": "server",
     "explain": "第一份應用位於AZ A，與另一份不在相同AZ。畫出位置只證明部署安排，資料與入口是否具備接手能力，仍要在後續逐層驗證。",
     "parent": "n2"
    },
    {
     "id": "n4",
     "label": "AZ B",
     "detail": "同Region的另一隔離位置",
     "icon": "network",
     "explain": "這個小框與AZ A屬不同隔離位置，但仍在同一Region內。將另一份應用放到這裡，是針對單AZ故障的安排，而非全球所有情境。",
     "parent": "n1"
    },
    {
     "id": "n5",
     "label": "應用B",
     "detail": "部署在AZ B",
     "icon": "server",
     "explain": "第二份應用跨過單一AZ位置範圍，仍需要能取得必要資料並接到請求。若兩份都依賴原本不可用的資料位置，位置分開後仍可能無法下單。",
     "parent": "n4"
    }
   ],
   "links": []
  }
 ],
 "ha": [
  {
   "anchor": 1,
   "title": "購物車只在A，與放在共享保存處",
   "purpose": "無狀態不是「沒有資料」，文字很容易造成誤解；並排顯示A記憶體獨有與兩台都可讀的保存安排。",
   "kind": "compare",
   "caption": "把重要購物車狀態從單台記憶體移出，才能讓另一台健康應用接續；外部狀態服務也需可用性與授權。",
   "nodes": [
    {
     "id": "n1",
     "label": "只留在A記憶體",
     "detail": "下一個請求到B：看不到剛才選擇",
     "icon": "server",
     "explain": "客人先在A加入餐點，資料卻只留在A的記憶體。當後續請求交給B時，B沒有這份狀態，增加應用副本本身不會自動複製它。"
    },
    {
     "id": "n2",
     "label": "合適共享保存處",
     "detail": "A與B可讀取必要購物車狀態",
     "icon": "database",
     "explain": "需要共享與保存的狀態放到合適資料服務，健康應用才有共同依據。這不是取消資料，而是移開單台獨有依賴，並另設狀態服務的保護與存取。"
    }
   ],
   "links": []
  }
 ],
 "elb": [
  {
   "anchor": 1,
   "title": "同一入口，依網址路徑交到不同工作台",
   "purpose": "listener、目標群組與應用容易成為堆疊名詞；以同一ALB入口分出menu與orders兩條具名路徑，讓分流和處理分開。",
   "kind": "fanout",
   "caption": "ALB依HTTP路徑選擇目標群組；真正查菜單、處理訂單與保存資料，仍由後端應用負責。",
   "nodes": [
    {
     "id": "n1",
     "label": "共同ALB入口",
     "detail": "接收HTTP要求並判斷路徑",
     "icon": "network",
     "explain": "客人只使用一個入口，不必自行挑應用主機。ALB可判讀本例HTTP路徑來選後端，但它不會替應用執行訂單計價或保存完整購物車。"
    },
    {
     "id": "n2",
     "label": "菜單目標群組",
     "detail": "/menu → 菜單應用",
     "icon": "menu",
     "explain": "帶/menu的要求交給對應菜單目標群組，群組中的應用執行自己的工作。箭頭描述HTTP路徑規則，不是DNS依每個網址路徑重新解析。"
    },
    {
     "id": "n3",
     "label": "訂單目標群組",
     "detail": "/orders → 訂單應用",
     "icon": "receipt",
     "explain": "帶/orders的要求交給訂單目標群組，由適合的健康應用處理。被分到正確目標仍不代表訂單規則與資料保存可以省略，兩層各負其責。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "路徑是/menu",
     "tone": "normal"
    },
    {
     "from": "n1",
     "to": "n3",
     "label": "路徑是/orders",
     "tone": "normal"
    }
   ]
  }
 ],
 "alb-certificate": [
  {
   "anchor": 1,
   "title": "前段HTTPS，不等於後段也自動加密",
   "purpose": "「網站用了HTTPS」常讓讀者看不見ALB前後兩條連線；把兩段分開並標憑證使用處，避免混成一把全程鎖。",
   "kind": "compare",
   "caption": "瀏覽器到ALB的HTTPS listener使用合適憑證；ALB到目標的協定是另一段設定，不能直接推論。",
   "nodes": [
    {
     "id": "n1",
     "label": "瀏覽器 → ALB",
     "detail": "443 listener呈現網站憑證",
     "icon": "lock",
     "explain": "瀏覽器與ALB建立這段TLS連線，listener需有涵蓋網站名稱的合適憑證。本例區域性ALB使用相同Region的ACM憑證，不沿用其他服務的區域規則。"
    },
    {
     "id": "n2",
     "label": "ALB → 訂單應用",
     "detail": "是否HTTPS：另外配置與驗證",
     "icon": "server",
     "explain": "ALB解開前段連線後依規則轉交目標，後段使用的協定需另外決定。前段有HTTPS不代表這一段也被自動加密，應沿每條連線分別確認。"
    }
   ],
   "links": []
  }
 ],
 "asg-application-health": [
  {
   "anchor": 2,
   "title": "入口避開壞程式，容量管理再補回它",
   "purpose": "ALB停止分流常被誤想成ALB會開新主機；把觀察、替換與重新接流量串成三個責任，凸顯交接者。",
   "kind": "flow",
   "caption": "ALB避開壞目標；ASG採用適用健康結果後補建，新的應用真正就緒後才接正常請求。",
   "nodes": [
    {
     "id": "n1",
     "label": "ALB看到應用失敗",
     "detail": "EC2正常，訂單程式不回應",
     "icon": "network",
     "explain": "健康檢查觀察的是指定應用路徑，因此可能與EC2系統狀態不同。本例入口避開A，只完成流量選擇，還沒有執行補建EC2的工作。"
    },
    {
     "id": "n2",
     "label": "ASG依健康結果替換",
     "detail": "啟用適用ELB健康檢查",
     "icon": "gear",
     "explain": "ASG須採用適用的ELB健康檢查並關聯目標群組，才能讓本例應用不健康成為替換依據。只看預設EC2檢查不一定發現這個程式錯誤。"
    },
    {
     "id": "n3",
     "label": "新應用通過檢查",
     "detail": "留合理啟動寬限，再接流量",
     "icon": "server",
     "explain": "新主機需下載程式或完成準備，ASG寬限避免過早替換，但不會修好永遠啟動失敗的程式。ALB仍依自己的健康結果決定正常請求目標。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "把適用健康結果用於替換",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "啟動並驗證後補回容量",
     "tone": "normal"
    }
   ]
  }
 ],
 "alb-all-unhealthy": [
  {
   "anchor": 2,
   "title": "部分壞掉與全部不健康，入口行為不同",
   "purpose": "「不送不健康目標」若只記一句會錯過重要例外；將A壞B好與A、B全壞並排，清楚標出條件變化。",
   "kind": "compare",
   "caption": "當所有啟用AZ內註冊目標都不健康，ALB會fail open；這不是修復成功，也不能拿健康檢查當停交易開關。",
   "nodes": [
    {
     "id": "n1",
     "label": "A不健康，B健康",
     "detail": "一般請求交給合適健康目標",
     "icon": "server",
     "explain": "在本例部分目標仍健康時，ALB通常把一般流量送到符合分流條件的健康目標。A仍要由適當維護或容量機制修復，避開不是修好。"
    },
    {
     "id": "n2",
     "label": "A、B全部不健康",
     "detail": "仍可能送給A或B：fail open",
     "icon": "network",
     "explain": "本例目標群組在所有啟用AZ的註冊目標都不健康時，ALB依演算法仍向它們送流量。不能據此保證成功，也不能藉故弄壞健康檢查阻止付款。"
    }
   ],
   "links": []
  }
 ],
 "nlb-transport": [
  {
   "anchor": 2,
   "title": "網址路徑分流，與既有TCP接入",
   "purpose": "ALB與NLB若只按名字選會失去協定畫面；用HTTP網址路徑與原有TCP資料兩種輸入並排，連上各自能力。",
   "kind": "compare",
   "caption": "本例保留自訂TCP與靜態入口IP需求，先比較NLB；HTTP主機或路徑分流則回到ALB。",
   "nodes": [
    {
     "id": "n1",
     "label": "ALB應用層分流",
     "detail": "看HTTP的主機與/orders路徑",
     "icon": "network",
     "explain": "ALB可理解本例HTTP的主機名稱與網址路徑，適合按這些內容選後端。既有自訂TCP格式沒有相同HTTP路徑，不能硬把資料當成網址判讀。"
    },
    {
     "id": "n2",
     "label": "NLB傳輸層接入",
     "detail": "保留TCP，核對各AZ靜態IP",
     "icon": "network",
     "explain": "NLB適合支援的傳輸層情境，需核對啟用AZ、入口位址、目標與健康檢查。它不會因有靜態IP就替應用保存工作階段或修復資料庫。"
    }
   ],
   "links": []
  }
 ],
 "scale-first": [
  {
   "anchor": 1,
   "title": "一張大工作桌，或多個能協作的窗口",
   "purpose": "「變大」與「變多」沒有圖很難區分；以單台資源增加對照多副本分工，補上後者需要共同狀態的限制。",
   "kind": "compare",
   "caption": "先量測真正瓶頸，再決定單台加資源或增加副本；多份應用仍需入口分流與可共享的必要狀態。",
   "nodes": [
    {
     "id": "n1",
     "label": "單台變大",
     "detail": "同一份工作有更多資源",
     "icon": "server",
     "explain": "這是調整一台主機的資源規格，先確認忙的是CPU、記憶體、磁碟或別處等待。若瓶頸其實在資料庫，無目的地加網頁主機規格不一定有效。"
    },
    {
     "id": "n2",
     "label": "副本變多",
     "detail": "多個工作者分攤不同請求",
     "icon": "worker",
     "explain": "這是增加可同時處理工作的副本，需有入口把要求交給它們。若登入或購物車只在第一台記憶體，第二台可能無法接續，因此要先處理共同狀態。"
    }
   ],
   "links": []
  }
 ],
 "autoscaling": [
  {
   "anchor": 2,
   "title": "補回原來兩台，與因尖峰增加到四台",
   "purpose": "替換與擴容都會看到新主機啟動，容易混為同一原因；並排顯示期望容量不變與期望容量提高兩種數量變化。",
   "kind": "compare",
   "caption": "故障補建是在恢復原期望容量；工作量增加則要提高適當容量，兩者都還需等待新主機就緒。",
   "nodes": [
    {
     "id": "n1",
     "label": "維持原容量",
     "detail": "期望2台，少1台就補1台",
     "icon": "server",
     "explain": "原目標仍是兩台，其中一台停止或不健康時，群組補回一台是在維持期望容量。這個動作沒有因為出現新主機就變成流量擴展。"
    },
    {
     "id": "n2",
     "label": "回應新工作量",
     "detail": "午餐需要4台，調整期望容量",
     "icon": "chart",
     "explain": "本例工作量上升到需要四台，是容量需求的變化。應選反映實際負載的指標，留準備時間並評估下游，不能只把最大上限提高就當成已完成。"
    }
   ],
   "links": []
  }
 ],
 "asg-scheduled-capacity": [
  {
   "anchor": 2,
   "title": "尖峰12點到，準備工作11:55先開始",
   "purpose": "排程時間與主機可用時間容易被讀成同一瞬間；把五分鐘準備放在尖峰前，讓提前安排有具體長度。",
   "kind": "timeline",
   "caption": "本例量測準備需5分鐘，因此11:55先要求至少6台；12點仍要驗證就緒，動態調整在有效上下界內運作。",
   "nodes": [
    {
     "id": "n1",
     "label": "11:55排程",
     "detail": "min與desired提到6台",
     "icon": "clock",
     "explain": "依本例已量測的五分鐘準備時間，排程先提出容量要求。max仍須容得下需求，不能把desired改成六卻保留不相容的兩台上限。"
    },
    {
     "id": "n2",
     "label": "準備這5分鐘",
     "detail": "主機啟動、載入並確認就緒",
     "icon": "gear",
     "explain": "要求建立容量之後仍有真實準備過程，不是排程執行完就全數能服務。時間安排應含時區與餘裕，並用實際就緒結果確認是否足夠。"
    },
    {
     "id": "n3",
     "label": "12:00尖峰",
     "detail": "至少6台，範圍容許最多10台",
     "icon": "chart",
     "explain": "尖峰期間保留六台下界，目標追蹤等動態政策可在有效範圍內調整。只設定一次desired沒有保證它不再改變，結束後也要安排適當回調。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "預留準備時間",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "核對實際可服務容量",
     "tone": "normal"
    }
   ]
  }
 ],
 "asg-scheduled-warmup": [
  {
   "anchor": 2,
   "title": "同一段初始化，兩個計時器看不同事",
   "purpose": "warmup和health grace都像等待時間，很容易互換；用「擴展指標」與「故障替換」兩個觀察面向比較。",
   "kind": "compare",
   "caption": "暖機避免初始化使用率過早影響擴展判斷；健康寬限避免ASG過早替換，兩者都不會把未就緒應用變健康。",
   "nodes": [
    {
     "id": "n1",
     "label": "Instance warmup",
     "detail": "看群組擴展的指標判斷",
     "icon": "chart",
     "explain": "新主機載入時CPU暫時高，暖機讓指標式擴展先保留準備時間。它處理群組判斷，不會替程式載入資料，也不會把實際十分鐘工作縮成五分鐘。"
    },
    {
     "id": "n2",
     "label": "Health grace",
     "detail": "看ASG是否過早替換主機",
     "icon": "clock",
     "explain": "健康寬限針對適用健康結果給初始化機會，避免新主機太早被替換。ALB仍做自己的健康檢查，真實故障仍需排查，不能只無限延長等待。"
    }
   ],
   "links": []
  }
 ],
 "recovery-first": [
  {
   "anchor": 2,
   "title": "恢復得快，與資料夠新，分別看",
   "purpose": "RTO、RPO都是時間，缺乏畫面時容易背反；用恢復中的服務與保存點後的訂單兩個圖像，分開兩種結果。",
   "kind": "compare",
   "caption": "RTO看中斷多久才恢復服務；RPO看最後可恢復資料距事故有多遠，兩項結果需要分別驗證。",
   "nodes": [
    {
     "id": "n1",
     "label": "RTO：恢復服務",
     "detail": "停機到可用：還原、啟動、驗證",
     "icon": "clock",
     "explain": "這個時間包含把整個必要服務恢復的工作，不只是找到備份。餐廳若只容半小時中斷，實測兩小時才恢復就不符需求，即使最後資料找得到。"
    },
    {
     "id": "n2",
     "label": "RPO：資料落差",
     "detail": "最後保存點之後，可能少了訂單",
     "icon": "receipt",
     "explain": "這個時間表示可接受的資料落後範圍；只有昨晚備份可能缺今天新增內容。網站十分鐘就開起來，也不能證明恢復的資料已足夠接近事故時刻。"
    }
   ],
   "links": []
  }
 ],
 "rds-ha": [
  {
   "anchor": 2,
   "title": "接手、分擔讀取與回到昨天：三份用途",
   "purpose": "都叫副本或備份，文字容易被看成可互換；用三張各有工作目標的資料庫卡，分清本例的接手、讀取與歷史復原。",
   "kind": "compare",
   "caption": "先辨識部署型態：傳統Multi-AZ standby不供一般讀取；讀取副本與歷史備份另外處理不同需求。",
   "nodes": [
    {
     "id": "n1",
     "label": "跨AZ接手",
     "detail": "傳統DB instance的standby",
     "icon": "database",
     "explain": "這張卡限定傳統Multi-AZ DB instance的一個standby，不把其他叢集型態混在一起。它提供相應接手能力，但不是本例新增日常查詢流量的端點。"
    },
    {
     "id": "n2",
     "label": "分擔讀取",
     "detail": "應用把合適查詢導向讀取副本",
     "icon": "database",
     "explain": "讀取副本接收來源變更以提供額外讀取，資料可能有延遲。建立資源不等於查詢已自動分流，付款後即時核對還要按一致性要求選來源。"
    },
    {
     "id": "n3",
     "label": "歷史還原",
     "detail": "錯價或誤刪後找較早狀態",
     "icon": "receipt",
     "explain": "現況副本也可能同步收到錯價或誤刪，因此換主機不一定找回昨天。歷史備份及時間點還原提供另一種恢復方式，需還原、驗證再安排應用切換。"
    }
   ],
   "links": []
  }
 ],
 "rds-failover-reconnect": [
  {
   "anchor": 2,
   "title": "門牌沒換，舊的通話仍要重撥",
   "purpose": "端點名稱與TCP連線都像「連資料庫」，讀者不易想像為何名稱不變仍會斷線；依序畫出名稱指向及連線池的變化。",
   "kind": "timeline",
   "caption": "切換後沿用同一端點名稱，但須淘汰舊連線、重新解析並重連；提交結果不確定時先按訂單識別查核。",
   "nodes": [
    {
     "id": "n1",
     "label": "切換前",
     "detail": "orders-db → 舊主庫",
     "icon": "database",
     "explain": "程式先解析端點名稱，再建立到當時資料庫節點的連線，連線池可能持續重用。名稱入口與已建立工作階段是不同狀態，不是每次查詢都重新解析。"
    },
    {
     "id": "n2",
     "label": "切換完成",
     "detail": "orders-db → 接手主庫",
     "icon": "network",
     "explain": "本例接手後名稱仍相同，但DNS對應位址已更新到新主庫。原本對舊主庫的TCP不會被搬過去，不能因設定檔名稱沒改就認為舊連線可繼續。"
    },
    {
     "id": "n3",
     "label": "應用恢復連線",
     "detail": "淘汰失效連線，重新解析重連",
     "icon": "server",
     "explain": "應用需偵測斷線並讓連線池丟棄失效連線，再依合適DNS快取設定重連。若剛才提交結果不明，先查訂單狀態，而不是收到錯誤就再扣一次款。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "主庫接手並更新名稱對應",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "程式另做連線恢復",
     "tone": "normal"
    }
   ]
  }
 ],
 "aurora": [
  {
   "anchor": 1,
   "title": "分配新連線，不是每條SQL重選一台",
   "purpose": "reader endpoint的「平衡」容易被想成查詢逐條輪流；比較新連線建立與同一長連線中的查詢，讓分配粒度可見。",
   "kind": "compare",
   "caption": "reader端點可分配合適reader的新連線；一條已建立的長連線，不保證每次SQL都換另一台。",
   "nodes": [
    {
     "id": "n1",
     "label": "建立新連線",
     "detail": "reader端點選擇合適reader",
     "icon": "network",
     "explain": "報表應用建立新的讀取連線時，reader端點可在適合reader間分配。這是連線層次的安排，仍要有相應讀取節點、容量及一致性需求設計。"
    },
    {
     "id": "n2",
     "label": "沿用長連線",
     "detail": "多次SQL仍在同一條連線中",
     "icon": "clock",
     "explain": "如果報表程式持續使用原連線，不能期待每次查詢自動重新挑不同reader。連線池與查詢使用方式仍會影響負載，因此端點名稱不等於每條SQL都平均。"
    }
   ],
   "links": []
  }
 ],
 "aurora-reader-boundary": [
  {
   "anchor": 2,
   "title": "reader這個名字，要配合實際叢集看",
   "purpose": "讀取入口名稱容易讓人以為必然連到另一台唯讀庫；將有Replica與只有writer兩種配置並排，突出名稱本身不是授權。",
   "kind": "compare",
   "caption": "沒有Replica時，reader endpoint可連到writer；要禁止寫入，仍需資料庫帳號的適當唯讀權限。",
   "nodes": [
    {
     "id": "n1",
     "label": "有Aurora Replica",
     "detail": "新讀取連線可分擔到Replica",
     "icon": "database",
     "explain": "叢集實際有合適Replica時，reader端點可為新讀取連線分配它們。建立這些節點與讓應用走對端點，才是本例分擔讀取的必要安排。"
    },
    {
     "id": "n2",
     "label": "只有writer",
     "detail": "reader endpoint仍可連到writer",
     "icon": "database",
     "explain": "本例沒有Replica時，reader端點會連到writer，具寫權的帳號甚至可寫入。要限制報表使用者只能讀，應另設資料庫權限，不能靠名稱裡的reader字樣保證。"
    }
   ],
   "links": []
  }
 ],
 "dr": [
  {
   "anchor": 1,
   "title": "備用廚房準備到哪一步？",
   "purpose": "四種災復策略若只列名稱無法形成準備程度的畫面；用食材清單、核心設備、小型營業與雙店營業對比，銜接本課餐廳比喻。",
   "kind": "compare",
   "caption": "策略差在平時準備程度與接手工作；名稱本身不保證固定恢復秒數，仍需依完整流程演練。",
   "nodes": [
    {
     "id": "n1",
     "label": "備份還原",
     "detail": "先留保存點，事故後建立環境",
     "icon": "receipt",
     "explain": "像保留食譜和食材清單，事故後還要重建可營運環境。資料保存不等於立即可接客，還原、啟動、切換與驗證都需要時間。"
    },
    {
     "id": "n2",
     "label": "Pilot light",
     "detail": "保留核心，接客前補齊其他部分",
     "icon": "gear",
     "explain": "像先保留核心設備與必要材料，但要開始接單仍需啟動或部署其餘部分。它比只留保存點準備更多，仍不能從名稱推出固定恢復時間。"
    },
    {
     "id": "n3",
     "label": "Warm standby",
     "detail": "較小但完整的備用廚房",
     "icon": "chef",
     "explain": "像另一間縮小卻能實際工作的廚房，事故後主要增加容量。仍要準備設定、權限及切換，也要量測擴容後能否達到業務需求。"
    },
    {
     "id": "n4",
     "label": "Active／active",
     "detail": "兩地平時都提供服務",
     "icon": "cloud",
     "explain": "像兩間廚房平時都在接單，準備程度與操作複雜度不同。多地提供服務仍要設計一致寫入、故障處理與回切，不代表歷史備份可以省略。"
    }
   ],
   "links": []
  }
 ],
 "backup-plan-vault": [
  {
   "anchor": 2,
   "title": "選中資源、留下復原點、真的還原一次",
   "purpose": "計畫、選取與vault容易被讀成一個備份開關；把有訂單的資源與最後能查回的測試環境接起來，讓空vault不能代表成功。",
   "kind": "flow",
   "caption": "計畫要選到正確資源並完成備份；復原點保存後，仍需實際還原、查驗資料與量測時間。",
   "nodes": [
    {
     "id": "n1",
     "label": "被選中的訂單庫",
     "detail": "標籤或選取確實包含目標",
     "icon": "database",
     "explain": "這是本次需要保護的真實資源，必須確認選取規則確實涵蓋它。只有建立備份計畫而沒有選中目標，不會自動替所有公司資料做備份。"
    },
    {
     "id": "n2",
     "label": "備份計畫",
     "detail": "按排程與保留規則執行",
     "icon": "clock",
     "explain": "計畫描述排程、保留等規則，還需具備相應角色與服務條件。圖中這一步要看實際工作結果，不是設定頁出現一份計畫就代表已成功保存。"
    },
    {
     "id": "n3",
     "label": "Vault復原點",
     "detail": "保管本次成功的備份結果",
     "icon": "lock",
     "explain": "vault管理復原點，副本跨帳號或跨區仍須核對所選資源支援、授權與金鑰。空vault或目的地存在，不能替代來源備份和複製完成的證據。"
    },
    {
     "id": "n4",
     "label": "隔離環境還原",
     "detail": "查到訂單，量測恢復所需時間",
     "icon": "receipt",
     "explain": "從復原點實際還原後再核對內容、應用讀取及時間目標。這一步能發現備份存在卻無法完成應用恢復的問題，演練後也要清理測試資源。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "依適用規則保護",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "成功備份成復原點",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "取復原點進行測試",
     "tone": "normal"
    }
   ]
  }
 ],
 "backup-vault-lock-boundaries": [
  {
   "anchor": 1,
   "title": "不可變設定前，先留出驗證窗口",
   "purpose": "Compliance鎖定的寬限期與正式鎖定若只寫在句子裡，容易把可調整時間和正式保護混為一談；用時間線區分兩段責任。",
   "kind": "timeline",
   "caption": "本例Compliance有至少三天的寬限時間；在此期間先驗證設定，結束後不能把root當作任意解除鎖的捷徑。",
   "nodes": [
    {
     "id": "n1",
     "label": "設定Compliance",
     "detail": "先核對要保護的是備份復原點",
     "icon": "lock",
     "explain": "Vault Lock針對backup vault中的復原點與生命週期，不是替所有S3物件直接啟用Object Lock。先選對保護對象，再處理這項鎖定設定。"
    },
    {
     "id": "n2",
     "label": "寬限期間",
     "detail": "至少3天，可核對與調整設定",
     "icon": "clock",
     "explain": "本例利用寬限時間先測保存期、費用與還原，必要時修正鎖定配置。這段是完成不可變保護前的驗證機會，不應未測試就隨意留下過長保存。"
    },
    {
     "id": "n3",
     "label": "寬限結束後",
     "detail": "含復原點的vault受正式鎖定保護",
     "icon": "shield",
     "explain": "正式鎖定後，不能假設高權限身分或AWS可任意改動含復原點vault的鎖。備份依自身生命週期保存，仍需考量帳號及整體保護安排，而非宣稱無條件永遠保存。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "進入驗證窗口",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "完成正式鎖定",
     "tone": "normal"
    }
   ]
  },
  {
   "anchor": 2,
   "title": "新規則，不會回頭延長既有復原點",
   "purpose": "「最短30天」容易被理解成vault裡每份備份都變30天；用原有7天與新工作限制並排，顯示規則作用範圍。",
   "kind": "compare",
   "caption": "既有復原點原來7天期限仍適用；新的備份或複製工作要符合新規則，跨帳號副本仍需另外配置。",
   "nodes": [
    {
     "id": "n1",
     "label": "既有復原點",
     "detail": "原來保留7天，仍依原生命週期",
     "icon": "receipt",
     "explain": "這份復原點在新最短限制前就存在，原本的七天保存不會被自動拉長成三十天。不能只讀新鎖定數字，就推論每份歷史備份現在都有相同期限。"
    },
    {
     "id": "n2",
     "label": "新工作",
     "detail": "須符合新規則的最短30天等限制",
     "icon": "clock",
     "explain": "新備份或複製工作會依鎖定的保留限制檢查，不符合時可能失敗。這項期限控制也不會自行建立跨帳號副本，仍需另設複製與授權。"
    }
   ],
   "links": []
  }
 ],
 "observability": [
  {
   "anchor": 1,
   "title": "同一個系統，三種問題找不同證據",
   "purpose": "監控、API稽核與設定紀錄容易被叫成同一種日誌；讓三個具體問題各配一種證據，建立調查時的想像。",
   "kind": "compare",
   "caption": "服務是否成功、誰呼叫修改API、資源設定如何改變，是不同問題；有其中一份證據不代表另外兩種也已保存。",
   "nodes": [
    {
     "id": "n1",
     "label": "服務發生什麼事？",
     "detail": "請求成功率、延遲與資源指標",
     "icon": "chart",
     "explain": "客人在意付款是否成功與等待多久，再用CPU等資源指標找原因。CPU偏低不能證明服務沒壓力，因為要求可能正等待資料庫或外部服務。"
    },
    {
     "id": "n2",
     "label": "誰做了修改？",
     "detail": "CloudTrail的支援API活動",
     "icon": "person",
     "explain": "要調查哪個身分何時修改安全群組，可看相應API活動。紀錄範圍仍依事件類型與配置而定，不能以管理事件存在就推論全部資料操作都有記錄。"
    },
    {
     "id": "n3",
     "label": "設定怎麼改？",
     "detail": "Config設定紀錄與規則評估",
     "icon": "file",
     "explain": "資源設定的前後差異及適用合規評估，是Config等對應紀錄的用途。它和誰呼叫API、應用錯誤內容各有證據範圍，不能互相當作完整替代。"
    }
   ],
   "links": []
  }
 ],
 "audit-api-network": [
  {
   "anchor": 2,
   "title": "讀哪份收據，與連去哪個位址",
   "purpose": "CloudTrail和Flow Logs都像存了一堆事件；用檔案讀取人與連線地址兩種可見線索，讓不同調查問題對到不同紀錄。",
   "kind": "compare",
   "caption": "指定S3讀取需配置適用資料事件；Flow Logs提供流量中繼資訊，不含收據內容，也不直接等同API使用者記錄。",
   "nodes": [
    {
     "id": "n1",
     "label": "CloudTrail資料事件",
     "detail": "誰對receipts/42.pdf做GetObject",
     "icon": "person",
     "explain": "追查指定物件讀取時，要先配置必要的S3資料事件並驗證實際送達。預設管理事件或事件歷史不能直接代替這份讀取活動記錄。"
    },
    {
     "id": "n2",
     "label": "VPC Flow Logs",
     "detail": "來源／目的／埠／接受或拒絕",
     "icon": "network",
     "explain": "這份紀錄提供網路介面的流量中繼資訊，幫你看連去哪裡。它不保存完整HTTP或封包負載，也不能只靠其中位址直接指出某個AWS API使用者。"
    }
   ],
   "links": []
  }
 ],
 "event-first": [
  {
   "anchor": 2,
   "title": "已接受訂單，通知仍可能只是待辦",
   "purpose": "「訊息進佇列」容易被當作簡訊已寄到；以已接受訂單、通知待辦與尚需執行者的三個狀態，讓延後工作具體可見。",
   "kind": "flow",
   "caption": "訂單接受與通知送達是不同狀態；佇列留下待辦，後續仍需處理者執行，不能把排隊成功當全部完成。",
   "nodes": [
    {
     "id": "n1",
     "label": "訂單已接受",
     "detail": "核心工作符合明確接受條件",
     "icon": "receipt",
     "explain": "先依業務定義訂單何時算接受，才能把非核心通知分開。圖中只是區分工作狀態，不是因為想讓畫面快，就先回覆所有後續工作都已完成。"
    },
    {
     "id": "n2",
     "label": "通知待辦在佇列",
     "detail": "保留要做什麼的訊息",
     "icon": "queue",
     "explain": "這個訊息描述需要做的通知工作，或提供後續程式所需資料位置。它本身不是執行程式，也不能證明客人已經收到了簡訊或信件。"
    },
    {
     "id": "n3",
     "label": "後續處理者",
     "detail": "按能力取件，實際執行通知",
     "icon": "worker",
     "explain": "處理者恢復後還要消化積壓、依權限規則完成通知。佇列能緩衝部分中斷與工作量，但沒有取消重試與重複處理的設計責任。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "通知可另外留下待辦",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "取出後還要執行",
     "tone": "normal"
    }
   ]
  }
 ],
 "sqs": [
  {
   "anchor": 2,
   "title": "訊息隱藏中，工作還沒被判定完成",
   "purpose": "可見性逾時與刪除同時出現，讀者不容易想像訊息仍在佇列；用接收、處理、保存、刪除四個狀態拉開差別。",
   "kind": "timeline",
   "caption": "接收後暫時不可見，直到成功保存結果才刪除；未刪除而逾時可能再被接收，因此仍需業務冪等。",
   "nodes": [
    {
     "id": "n1",
     "label": "消費者收到",
     "detail": "訊息暫時對其他消費者不可見",
     "icon": "queue",
     "explain": "接收後的不可見期間是在保留處理機會，不是把訊息當成功移除。若消費者剛拿到就當機，原訊息尚未刪除，後續仍有重試機會。"
    },
    {
     "id": "n2",
     "label": "程式處理中",
     "detail": "依訊息執行工作，可能失敗",
     "icon": "worker",
     "explain": "消費者執行訊息描述的工作，這段期間仍可能逾時或中斷。不可見時間要配合工作長度，但不能用它保證外部付款等副作用只出現一次。"
    },
    {
     "id": "n3",
     "label": "結果已保存",
     "detail": "確認業務完成且有冪等依據",
     "icon": "database",
     "explain": "保存成功結果與完成紀錄，能讓重收相同事件時回到已知狀態。至少一次投遞仍可能帶來重複，不能每次拿到相同付款事件就再扣款。"
    },
    {
     "id": "n4",
     "label": "刪除這次訊息",
     "detail": "用本次接收對應的憑據確認完成",
     "icon": "receipt",
     "explain": "消費者成功後才刪除該次接收對應訊息；過早刪除後若工作失敗，原待辦已不在。保存後尚未刪就重收時，則靠業務冪等避免重做副作用。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "保留處理時間",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "確認保存成功",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "再向佇列確認完成",
     "tone": "normal"
    }
   ]
  }
 ],
 "sqs-fifo-identifiers": [
  {
   "anchor": 2,
   "title": "順序的群組、重送的識別、已做完的紀錄",
   "purpose": "三個識別都含訂單或事件名稱，容易以一個ID代替全部責任；用實際order-123與payment-event-789並排標示各自用途。",
   "kind": "compare",
   "caption": "群組ID界定同組順序；去重ID辨認發送重試；消費端完成紀錄仍保護外部業務副作用。",
   "nodes": [
    {
     "id": "n1",
     "label": "MessageGroupId",
     "detail": "order-123：建立、付款、出貨同組",
     "icon": "queue",
     "explain": "這個識別決定同一群組的處理順序範圍，另一訂單可用另一群組並行。它不是用來判斷付款事件是否與近期發送相同，也不保證外部扣款只做一次。"
    },
    {
     "id": "n2",
     "label": "Deduplication ID",
     "detail": "payment-event-789：同事件重送沿用",
     "icon": "file",
     "explain": "同一付款事件重送時維持去重識別，在五分鐘區間內由SQS抑制重複發送。之後出貨是新事件，不能因同屬order-123就沿用付款的這個識別。"
    },
    {
     "id": "n3",
     "label": "消費端完成紀錄",
     "detail": "事件已付款：重收時不再扣款",
     "icon": "database",
     "explain": "消費者可能扣款完成卻尚未刪訊息就中斷，再收到相同事件。用業務識別與條件紀錄核對已完成結果，才不把又一次收到誤當成要再付款。"
    }
   ],
   "links": []
  }
 ],
 "fifo-dlq-business-order": [
  {
   "anchor": 2,
   "title": "前置建立被移走，付款不會因此有訂單",
   "purpose": "「移到DLQ讓佇列繼續」容易讓人以為業務已安全跳過；把被隔離的建立與仍缺輸入的付款接起來，顯示缺口沒有消失。",
   "kind": "flow",
   "caption": "DLQ隔離訊息沒有補做K8建立；嚴格順序業務需明確封鎖後續副作用，修復前置並有序恢復。",
   "nodes": [
    {
     "id": "n1",
     "label": "建立K8失敗",
     "detail": "訂單尚未成功留下",
     "icon": "receipt",
     "explain": "這筆建立工作沒有完成，所以後面的付款還沒有可用訂單。問題是本課已明示的前置缺失，不需要讀者猜另一個資料庫或網路事故。"
    },
    {
     "id": "n2",
     "label": "建立訊息進DLQ",
     "detail": "錯誤被隔離，前置工作仍未完成",
     "icon": "queue",
     "explain": "移到DLQ可以隔離反覆失敗的工作，但不會替它建立訂單。來源佇列阻塞解除，不代表原本依賴這個動作的業務條件已經成立。"
    },
    {
     "id": "n3",
     "label": "付款輪到處理",
     "detail": "仍找不到應先存在的K8",
     "icon": "money",
     "explain": "付款雖輪到處理，仍缺前面未完成的訂單，不能把交付順序當成業務已完整。需要應用明確處理這個缺口，而不是照常做出有害後續副作用。"
    },
    {
     "id": "n4",
     "label": "受控修復順序",
     "detail": "先封鎖，再修正建立並驗證付款",
     "icon": "gear",
     "explain": "維護流程先限制K8後續副作用，修復失敗原因，讓建立成功後再驗證付款與出餐。重送不會自行倒回已改動的業務狀態，還要核對依賴與冪等。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "反覆失敗後隔離",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "後續仍缺前置結果",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "需要明確業務控制",
     "tone": "blocked"
    }
   ]
  }
 ],
 "dlq-retention-clock": [
  {
   "anchor": 2,
   "title": "星期二進DLQ，兩種訊息到期日不同",
   "purpose": "保存設定與Age指標引用不同起點不容易在長句中比較；用相同星期一入列、星期二轉入的兩張日曆並排。",
   "kind": "compare",
   "caption": "相同四天DLQ保存設定：Standard沿原入列時計約剩三天；FIFO進DLQ重設時刻，可再保存四天。",
   "nodes": [
    {
     "id": "n1",
     "label": "Standard",
     "detail": "週一入列 → 週二DLQ → 約週五到期",
     "icon": "clock",
     "explain": "原始入列時間不因移到DLQ重設，因此來源已待的一天也計入本例四天保存。DLQ的Age指標卻反映進DLQ後時間，不能把它當原訊息完整年齡。"
    },
    {
     "id": "n2",
     "label": "FIFO",
     "detail": "週一入列 → 週二DLQ → 約週六到期",
     "icon": "clock",
     "explain": "進DLQ時入列時刻重設，本例可從星期二再計四天。這個差異不代表可以省略告警與調查，仍要在訊息到期前修復原因並驗證恢復。"
    }
   ],
   "links": []
  }
 ],
 "sqs-long-job": [
  {
   "anchor": 2,
   "title": "第40秒發現做不完：先延長，不先刪",
   "purpose": "原60秒與仍需90秒如果只寫在句子裡不易判斷何時動作；把延長放在原逾時前，最後再畫保存與刪除。",
   "kind": "timeline",
   "caption": "處理還沒結束就先延長本次可見性；成功轉檔、保存結果與完成狀態後，才刪除該次接收訊息。",
   "nodes": [
    {
     "id": "n1",
     "label": "開始轉檔",
     "detail": "訊息先隱藏60秒，尚未刪除",
     "icon": "queue",
     "explain": "圖片轉換開始時，訊息暫時對其他消費者不可見，仍在佇列裡。這是處理機會，不是完成證明，原逾時後若未刪除仍可能重新交付。"
    },
    {
     "id": "n2",
     "label": "第40秒檢查",
     "detail": "估計還需90秒，先延長可見性",
     "icon": "clock",
     "explain": "處理者在原逾時前發現還需時間，呼叫適用操作延長這次處理機會。延長須有合理上限，若工作者真的失效，有限等待後仍要容許重試。"
    },
    {
     "id": "n3",
     "label": "轉檔結果完成",
     "detail": "保存輸出與完成狀態",
     "icon": "file",
     "explain": "程式先完成轉換並安全保存輸出與狀態，才有依據把待辦視為完成。若保存後重收相同事件，仍沿已教的冪等紀錄保護副作用。"
    },
    {
     "id": "n4",
     "label": "最後刪除訊息",
     "detail": "使用本次receipt handle",
     "icon": "receipt",
     "explain": "刪除使用這次接收取得的receipt handle，不能在工作一開始就先刪。若太早刪後程式失敗，佇列無法再靠這份原訊息協助重試。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "仍在原處理機會內",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "保持處理並完成保存",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "確認結果後才刪除",
     "tone": "normal"
    }
   ]
  }
 ],
 "queue-capacity": [
  {
   "anchor": 1,
   "title": "同一條佇列，先換成每台工作量",
   "purpose": "總訊息數不容易想像每台要等多久；用同單位長條比較目前積壓與等待目標。",
   "kind": "capacity",
   "caption": "兩條都用「筆／台」比較；目前60筆／台，等待目標只容許約6筆／台。",
   "nodes": [
    {
     "id": "n1",
     "label": "目前每台積壓",
     "detail": "120筆由2台處理",
     "icon": "queue",
     "explain": "圖中60是每台平均分到的可見待辦數，來自120筆除以2台可工作主機。不是120筆變少了，而是把總量換成能反映工作者數量的指標。",
     "value": 60,
     "unit": "筆／台"
    },
    {
     "id": "n2",
     "label": "等待目標",
     "detail": "允許60秒，每筆10秒",
     "icon": "clock",
     "explain": "圖中6來自允許等待60秒除以每筆10秒，假設每台一次只做一筆。它是規劃目標，不是服務對任何工作大小都提供六筆的保證。",
     "value": 6,
     "unit": "筆／台"
    }
   ],
   "links": [],
   "formula": "120 ÷ 2 = 60筆／台；60秒 ÷ 10秒 = 6筆／台"
  }
 ],
 "events": [
  {
   "anchor": 0,
   "title": "一筆訂單，要交給三種工作",
   "purpose": "競爭佇列與各收一份容易混淆；畫出同一事件複製到不同用途的分支。",
   "kind": "fanout",
   "caption": "每條分支都要收到這筆訂單；各用途有自己的工作，不是共同搶一份。",
   "nodes": [
    {
     "id": "n1",
     "label": "訂單已成立",
     "detail": "同一筆訂單事件",
     "icon": "receipt",
     "explain": "這是已成立訂單產生的一個事件，帳務、通知與分析各有自己的後續工作。圖中由它向外分支，表示各用途都需要取得這份事件。"
    },
    {
     "id": "n2",
     "label": "帳務",
     "detail": "自己的訂閱與佇列",
     "icon": "database",
     "explain": "帳務取得自己需要的事件並進行記帳。它不應只在通知沒取走訊息時才有機會取得工作，否則不能確保每筆訂單都被記帳。"
    },
    {
     "id": "n3",
     "label": "通知",
     "detail": "自己的訂閱與佇列",
     "icon": "phone",
     "explain": "通知依自己的事件副本寄出訊息，和帳務不是競爭同一份待辦。通知處理的速度也不必因分析積壓而一起等待。"
    },
    {
     "id": "n4",
     "label": "分析",
     "detail": "自己的訂閱與佇列",
     "icon": "chart",
     "explain": "分析也要處理每筆事件，因此需要獨立的接收路徑與緩衝。分析變慢時，保留自己的積壓，不要求帳務跟著等同一條工作佇列。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "各收一份",
     "tone": "normal"
    },
    {
     "from": "n1",
     "to": "n3",
     "label": "各收一份",
     "tone": "normal"
    },
    {
     "from": "n1",
     "to": "n4",
     "label": "各收一份",
     "tone": "normal"
    }
   ]
  }
 ],
 "workflow-wait-callback": [
  {
   "anchor": 2,
   "title": "通知送出，不等於店長核准",
   "purpose": "API回應與人工完成的時間不在同一刻；用時間線顯示中間真正等待的狀態。",
   "kind": "timeline",
   "caption": "流程保存等待狀態；核准回呼才往下走，超過三小時則按已設計的逾時分支處理。",
   "nodes": [
    {
     "id": "n1",
     "label": "09:00 已送出",
     "detail": "API只回覆已接受",
     "icon": "phone",
     "explain": "九點的回應只說明通知要求已被服務接受，店長還沒有核准。把這個時間點和後面的人工結果分開，就不會把送出成功當成整張訂單已確認。"
    },
    {
     "id": "n2",
     "label": "等待中的案件",
     "detail": "案件對應task token",
     "icon": "workflow",
     "explain": "受控處理流程保管案件與task token的對應，讓回覆能找到正在等待的工作。等待有逾時與權限安排，不必讓一段短程式持續空轉。"
    },
    {
     "id": "n3",
     "label": "11:00 核准",
     "detail": "授權呼叫者回報成功",
     "icon": "chef",
     "explain": "店長兩小時後核准，由符合條件的呼叫者將結果回報到對應工作。核對案件仍有效後繼續；若三小時仍沒回覆，則走已安排的逾時處理。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "保存等待",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "收到相符回呼",
     "tone": "normal"
    }
   ]
  }
 ],
 "workflow-execution-semantics": [
  {
   "anchor": 1,
   "title": "把三種執行語意分開看",
   "purpose": "Standard與兩種Express名稱相近；並排同層比較，避免把所有Express背成同一種。",
   "kind": "compare",
   "caption": "這是流程執行模型的比較；任務Retry、客戶端重送與付款冪等仍需分別處理。",
   "nodes": [
    {
     "id": "n1",
     "label": "Standard",
     "detail": "exactly-once流程語意",
     "icon": "workflow",
     "explain": "Standard的執行語意不能代替外部付款的業務保護。流程若明確安排Retry，任務仍可重新嘗試，應以同一操作識別辨認重複付款要求。"
    },
    {
     "id": "n2",
     "label": "非同步Express",
     "detail": "at-least-once",
     "icon": "queue",
     "explain": "非同步Express先回報已開始，流程可能重複執行，因此本例的小事件轉換保留事件識別與冪等。不能把收到開始回應當成全部工作已完成。"
    },
    {
     "id": "n3",
     "label": "同步Express",
     "detail": "at-most-once",
     "icon": "phone",
     "explain": "同步Express等待結果回覆，與非同步的執行模型不同。這不代表每次要求一定成功，呼叫失敗或客戶端重送仍須有清楚的處理安排。"
    }
   ],
   "links": []
  }
 ],
 "lambda": [
  {
   "anchor": 0,
   "title": "做出收據後，把結果放到環境外",
   "purpose": "函式執行與資料保存容易被看成同一件事；用收據跨出執行環境呈現持久保存。",
   "kind": "flow",
   "caption": "函式可以被替換；需要日後讀回的收據要保存在外部合適位置。",
   "nodes": [
    {
     "id": "n1",
     "label": "輸入訂單",
     "detail": "本次呼叫的資料",
     "icon": "receipt",
     "explain": "本次事件把需要處理的訂單交給函式。它是這次執行的輸入，不表示下一次一定會回到同一份記憶體或仍留著上次的檔案。"
    },
    {
     "id": "n2",
     "label": "函式處理",
     "detail": "產生本次收據",
     "icon": "function",
     "explain": "函式執行收據產生邏輯，執行環境之後可能重用，也可能被替換。因此運算完成後不能把唯一收據只留在本次的本機目錄。"
    },
    {
     "id": "n3",
     "label": "外部保存",
     "detail": "S3或資料庫留下結果",
     "icon": "database",
     "explain": "將收據與處理狀態寫入合適的外部資料服務，日後才有明確的讀回位置。圖中的保存箭頭是應用要完成的工作，並非環境存在就自動保存。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "交付輸入",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "保存結果",
     "tone": "normal"
    }
   ]
  }
 ],
 "lambda-reuse": [
  {
   "anchor": 2,
   "title": "工具可以留下，客人的資料要換新",
   "purpose": "環境重用缺乏具體畫面；以同一工具箱與兩筆不同訂單對照，避免把重用當共享資料。",
   "kind": "compare",
   "caption": "可重用的是已初始化的client；每次仍從自己的event取得訂單，正式結果另存。",
   "nodes": [
    {
     "id": "n1",
     "label": "共用工具箱",
     "detail": "handler外的SDK client",
     "icon": "gear",
     "explain": "同一執行環境再次被使用時，已準備好的SDK client可能直接重用，減少初始化工作。環境仍可能換新，因此程式也必須能獨立重新準備工具。"
    },
    {
     "id": "n2",
     "label": "訂單123",
     "detail": "第一次event的顧客資料",
     "icon": "receipt",
     "explain": "第一次呼叫以自己的事件取得訂單123。這筆顧客資料與結果只屬於本次處理，不應成為下一次不同客人訂單的預設值。"
    },
    {
     "id": "n3",
     "label": "訂單456",
     "detail": "第二次event重新取資料",
     "icon": "receipt",
     "explain": "第二次若重用同一環境，可以沿用工具，但仍從新event讀取456的內容。正式資料保存到外部，並檢查被重用的連線是否仍然有效。"
    }
   ],
   "links": []
  }
 ],
 "lambda-rds-proxy": [
  {
   "anchor": 2,
   "title": "把大量短連線交給池管理",
   "purpose": "五百個函式各開連線不容易想像；畫出許多來源經共享池到同一資料庫的責任。",
   "kind": "flow",
   "caption": "並行限制管總工作量，Proxy管理連線；兩者都不會讓資料庫變成無限容量。",
   "nodes": [
    {
     "id": "n1",
     "label": "多個Lambda",
     "detail": "先控制同時執行量",
     "icon": "function",
     "explain": "尖峰時許多函式可能同時連RDS，即使每個環境只有一條，也會累積連線壓力。本例先按實測能力限制同時工作數，避免全部一起壓向下游。"
    },
    {
     "id": "n2",
     "label": "RDS Proxy",
     "detail": "連線池與重用",
     "icon": "network",
     "explain": "應用改連Proxy端點，由它管理可重用的後端連線。仍需相符授權與網路；交易特性可能影響池化效果，所以不能只看到Proxy就當作問題消失。"
    },
    {
     "id": "n3",
     "label": "RDS",
     "detail": "仍有查詢與連線容量",
     "icon": "database",
     "explain": "資料庫仍要執行SQL與交易，容量並不因中間多了一層池而無限增加。觀察查詢、交易時間與重試，才能確認整條流程承受尖峰。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "連到Proxy",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "使用受管連線",
     "tone": "normal"
    }
   ]
  }
 ],
 "lambda-duration-fit": [
  {
   "anchor": 1,
   "title": "二十分鐘工作，十五分鐘容器裝不下",
   "purpose": "工作時間與單次時限容易只看數字忽略差距；用同單位長條呈現超出的五分鐘。",
   "kind": "capacity",
   "caption": "本圖只比較一般Lambda模式；排隊或編排不會替它延長單次時限。",
   "nodes": [
    {
     "id": "n1",
     "label": "正式工作需求",
     "detail": "實測不可中斷報表",
     "icon": "file",
     "explain": "正式最大檔案已量測需二十分鐘，這個需求不能由小測試檔的三十秒取代。圖中長條代表完成這一份報表需要的單次執行時間。",
     "value": 20,
     "unit": "分鐘"
    },
    {
     "id": "n2",
     "label": "一般Lambda上限",
     "detail": "900秒，也就是15分鐘",
     "icon": "clock",
     "explain": "一般Lambda的單次timeout最多十五分鐘，因此不能僅把設定拉到最大值就完成本例工作。若能拆分可另設計小工作，否則評估合適的長作業平台。",
     "value": 15,
     "unit": "分鐘"
    }
   ],
   "links": [],
   "formula": "20分鐘需求 > 15分鐘一般模式時限"
  }
 ],
 "lambda-concurrency-controls": [
  {
   "anchor": 2,
   "title": "先備20個，不等於最多只能做20個",
   "purpose": "預先準備與並行上限是不同尺度；在相同呼叫數尺度上比較20、30與50。",
   "kind": "capacity",
   "caption": "30個同時呼叫中，超出20個預備環境的部分可能冷啟動；50才是本例函式上限。",
   "nodes": [
    {
     "id": "n1",
     "label": "預先準備",
     "detail": "Provisioned 20",
     "icon": "function",
     "explain": "二十個環境已依指定版本或alias預先初始化，用來減少適用呼叫的初始化等待。這個數目不是函式最高並行，也不能套到錯誤的呼叫目標。",
     "value": 20,
     "unit": "個同時呼叫"
    },
    {
     "id": "n2",
     "label": "目前同時要求",
     "detail": "本例30個",
     "icon": "queue",
     "explain": "三十個同時呼叫超過已準備的二十個，但尚在本例五十的reserved範圍內。多出的部分可能改用隨需環境，不能推論全部三十個都已暖好。",
     "value": 30,
     "unit": "個同時呼叫"
    },
    {
     "id": "n3",
     "label": "函式並行上限",
     "detail": "Reserved 50",
     "icon": "shield",
     "explain": "Reserved同時保留可用配額並限制本例函式的最高並行。它沒有提前初始化環境；若超過此界線，來源的節流、等待或重試行為還需另外處理。",
     "value": 50,
     "unit": "個同時呼叫"
    }
   ],
   "links": [],
   "formula": "預備20 < 本次30 < 上限50"
  }
 ],
 "sqs-partial-batch": [
  {
   "anchor": 1,
   "title": "一批A、B、C，回報要指到B",
   "purpose": "整批失敗與部分失敗缺乏一一對應的畫面；將每筆訊息狀態並排列出。",
   "kind": "compare",
   "caption": "先啟用ReportBatchItemFailures，再回傳B的messageId；已辨認的單筆失敗不讓A、C一起重跑。",
   "nodes": [
    {
     "id": "n1",
     "label": "訊息A",
     "detail": "結果已保存",
     "icon": "receipt",
     "explain": "A對應的訂單工作已成功保存，可以保留完成結果。部分回報要明確辨認失敗項目，讓映射不因B的已捕捉失敗而把A也當作未完成。"
    },
    {
     "id": "n2",
     "label": "訊息B",
     "detail": "未完成，列入失敗清單",
     "icon": "queue",
     "explain": "B的結果尚未完成，程式以其messageId列入batchItemFailures。事件來源映射也必須啟用相應協議，只回傳一段自訂文字並不足夠。"
    },
    {
     "id": "n3",
     "label": "訊息C",
     "detail": "結果已保存",
     "icon": "receipt",
     "explain": "這張圖固定為A、C已成功保存的標準佇列例子，保留各筆的完成與冪等紀錄。部分回報讓映射辨認B尚未完成，不因這個已捕捉失敗而要求C一起重跑。"
    }
   ],
   "links": []
  }
 ],
 "s3-events-version-order": [
  {
   "anchor": 2,
   "title": "收到的順序，和資料新舊分開",
   "purpose": "舊通知晚到難以在文字中保持兩個順序；時間線只畫已確定的通知到達與處理判斷。",
   "kind": "timeline",
   "caption": "對同一key，比較sequencer並核對versionId；重送與晚到舊版由不同判斷保護。",
   "nodes": [
    {
     "id": "n1",
     "label": "先收到v2",
     "detail": "新版本通知先到",
     "icon": "file",
     "explain": "資料已先寫v1再寫v2，但通知交付可以讓v2先到。處理者按事件指定版本讀內容，並記錄此key已接受的較新序號與結果。"
    },
    {
     "id": "n2",
     "label": "再收到v1",
     "detail": "晚到不等於較新",
     "icon": "clock",
     "explain": "接著收到的是另一個舊版本事件，不能只因它最後到達就覆蓋目前縮圖。比較同一key的sequencer，並用條件更新保護較新的結果。"
    },
    {
     "id": "n3",
     "label": "v2再次送達",
     "detail": "相同工作不重做副作用",
     "icon": "shield",
     "explain": "同一工作識別再次收到時，由處理紀錄實作冪等。這和阻止不同舊事件晚到的序號比較不同，兩項保護不能只做其中一種就視為完整。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "交付先後可不同",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "另辨認重複",
     "tone": "normal"
    }
   ]
  }
 ],
 "api": [
  {
   "anchor": 0,
   "title": "同一個讀訂單要求，穿過兩道授權",
   "purpose": "使用者可呼叫API與Lambda可讀資料庫易混為一個權限；畫出請求實際經過的角色。",
   "kind": "flow",
   "caption": "入口呼叫通過，不代表函式已獲准讀資料；每段的身分與授權各自核對。",
   "nodes": [
    {
     "id": "n1",
     "label": "客人要求",
     "detail": "GET /orders/123",
     "icon": "phone",
     "explain": "客人向入口提出讀取123號訂單的要求。這一段先需要能合法呼叫API，不代表後端函式便自動取得資料庫中的所有操作權限。"
    },
    {
     "id": "n2",
     "label": "API入口",
     "detail": "把路徑交給函式",
     "icon": "network",
     "explain": "入口依設定將這個路徑交給相應函式處理。路徑對應完成只說明工作被安排到哪裡，還需要函式以自己的身分讀取所需資料。"
    },
    {
     "id": "n3",
     "label": "Lambda",
     "detail": "使用自己的執行角色",
     "icon": "function",
     "explain": "函式要以自身執行角色讀取資料庫，再產生回應。如果資料庫拒絕，應檢查這一段的角色與資源權限，而不是只重做客人的登入設定。"
    },
    {
     "id": "n4",
     "label": "資料庫",
     "detail": "回傳獲准的訂單資料",
     "icon": "database",
     "explain": "資料庫是函式需要取得資料的位置，仍依相應授權控制。圖中的箭頭表示讀取請求的責任交接，並不把入口身分和後端角色合併。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "呼叫授權",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "安排處理",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "資料存取授權",
     "tone": "normal"
    }
   ]
  }
 ],
 "browser-cors-path": [
  {
   "anchor": 2,
   "title": "瀏覽器規則與資料權限，是兩張檢查表",
   "purpose": "CORS常被誤當IAM；把瀏覽器會核對的三項與S3真實操作授權並排。",
   "kind": "compare",
   "caption": "新增標頭未獲允許時先修CORS；實際PUT仍要通過簽名與資料授權。",
   "nodes": [
    {
     "id": "n1",
     "label": "CORS檢查",
     "detail": "來源、PUT、必要標頭",
     "icon": "phone",
     "explain": "瀏覽器對需要預檢的跨來源要求先核對來源、方法與標頭。本例新增x-amz-meta-menu-id而規則未允許，應先處理這份瀏覽器使用規則。"
    },
    {
     "id": "n2",
     "label": "S3資料授權",
     "detail": "簽名身分可否PutObject",
     "icon": "shield",
     "explain": "實際上傳仍由S3核對簽名者的適用資料權限。CORS符合不會主動授予PutObject，因此加大IAM也不能代替修正缺少的允許標頭。"
    }
   ],
   "links": []
  }
 ],
 "api-rest-cache-scope": [
  {
   "anchor": 1,
   "title": "門市不同，就不是同一份菜單",
   "purpose": "相同GET路徑可能回不同內容；用兩家門市的獨立快取識別建立可見畫面。",
   "kind": "compare",
   "caption": "門市參數改變回應時，應納入適用cache key；這裡只處理可共用的公開菜單。",
   "nodes": [
    {
     "id": "n1",
     "label": "門市甲的/menu",
     "detail": "甲的參數 → 甲的快取鍵",
     "icon": "menu",
     "explain": "甲門市與乙門市可能有不同菜單，即使路徑同為GET /menu，也不能直接共用同一份回應。以影響內容的門市參數形成適當的鍵。"
    },
    {
     "id": "n2",
     "label": "門市乙的/menu",
     "detail": "乙的參數 → 乙的快取鍵",
     "icon": "menu",
     "explain": "乙應取得乙門市的回應，而不是先前甲的快取。這是REST API在stage及method配置下的比較，還需設定符合可接受舊值時間的TTL。"
    }
   ],
   "links": []
  }
 ],
 "containers": [
  {
   "anchor": 0,
   "title": "同一張配方，做出兩份獨立工作",
   "purpose": "映像與執行中容器很抽象；由同一映像分支成兩份工作，強調記憶體不會自動共享。",
   "kind": "fanout",
   "caption": "映像可重複建立容器；圖中的分支不代表容器自動同步訂單或本機檔案。",
   "nodes": [
    {
     "id": "n1",
     "label": "容器映像",
     "detail": "程式與相依的建立配方",
     "icon": "file",
     "explain": "映像提供建立工作所需的程式與相依基礎，可啟動多份容器。它需要版本與來源管理，也不應把執行時機密固定寫進這份配方。"
    },
    {
     "id": "n2",
     "label": "執行中的容器A",
     "detail": "自己的記憶體與本機檔",
     "icon": "server",
     "explain": "A是從配方建立的一份實際工作，會有自己的執行狀態。圖中和B來自同一映像，不表示A收到的新訂單自動出現在B的本機資料中。"
    },
    {
     "id": "n3",
     "label": "執行中的容器B",
     "detail": "另一份獨立工作狀態",
     "icon": "server",
     "explain": "B可以和A執行相同版本的程式，但仍是另一份工作。需要持久保存的訂單應交到合適外部資料服務，不能跟著替換舊容器就消失。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "建立一份",
     "tone": "normal"
    },
    {
     "from": "n1",
     "to": "n3",
     "label": "再建立一份",
     "tone": "normal"
    }
   ]
  }
 ],
 "ecs-secret-refresh": [
  {
   "anchor": 2,
   "title": "秘密已更新，舊容器不會自己換值",
   "purpose": "把服務裡的密碼與容器環境變數視為同一位置容易誤判；時間線標出兩份值各在何時取得。",
   "kind": "timeline",
   "caption": "保留啟動時注入模式，就啟動新task取v2並驗證；舊task內的v1不會自動改寫。",
   "nodes": [
    {
     "id": "n1",
     "label": "上午啟動",
     "detail": "task取得環境變數v1",
     "icon": "server",
     "explain": "上午容器啟動時，ECS依設定把指定秘密內容注入環境變數。程式之後讀這份值連資料庫，不能把啟動注入當成持續即時查詢。"
    },
    {
     "id": "n2",
     "label": "中午輪替",
     "detail": "秘密與資料庫改成v2",
     "icon": "key",
     "explain": "輪替完成表示秘密來源和資料庫已完成相應更新。仍在執行的舊容器保留啟動時的v1，實際連線結果還要看輪替策略的相容期間。"
    },
    {
     "id": "n3",
     "label": "新task啟動",
     "detail": "取得v2並驗證連線",
     "icon": "worker",
     "explain": "本例選擇輪替後啟動新任務，確認新任務使用v2能建立連線，再逐步結束舊任務。這一步才完成應用換用新值，不只是秘密來源更新。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "來源值已變",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "重新取值",
     "tone": "normal"
    }
   ]
  }
 ],
 "batch-job-flow": [
  {
   "anchor": 1,
   "title": "報表不是直接丟給Fargate就完成",
   "purpose": "工作定義、佇列及運算環境容易只記服務名；以同一報表走完整排程路徑。",
   "kind": "flow",
   "caption": "Batch安排哪個工作執行；Fargate可提供相符容量，仍需程式自己讀輸入與保存結果。",
   "nodes": [
    {
     "id": "n1",
     "label": "工作定義",
     "detail": "映像、資源、角色",
     "icon": "file",
     "explain": "工作定義描述這份報表如何執行，包括容器映像、記憶體與角色等規格。每次提交再帶入門市日期與輸入位置，不由服務猜測報表邏輯。"
    },
    {
     "id": "n2",
     "label": "提交到佇列",
     "detail": "nightly-reports等待排程",
     "icon": "queue",
     "explain": "每次報表工作提交到指定job queue，在此等待排程安排。它不是直接代表已有運算容量，也不表示容器啟動便已完成輸出。"
    },
    {
     "id": "n3",
     "label": "相符運算環境",
     "detail": "本例使用Fargate容量",
     "icon": "server",
     "explain": "佇列關聯運算環境，由受支援容量執行符合需求的工作。若資源規格不相容，要調整規格或容量選擇，而不是只增加工作數量。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "帶參數提交",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "依需求安排執行",
     "tone": "normal"
    }
   ]
  }
 ],
 "ec2": [
  {
   "anchor": 0,
   "title": "都叫慢，卡住的位置可能不同",
   "purpose": "CPU、記憶體與磁碟的限制沒有形狀；並排資源位置，讓讀者想像不同等待來源。",
   "kind": "compare",
   "caption": "先找哪一段忙或等待，再選規格；更多CPU不能直接消除磁碟等待。",
   "nodes": [
    {
     "id": "n1",
     "label": "CPU忙",
     "detail": "計算能力可能不足",
     "icon": "gear",
     "explain": "計算密集工作可能需要較多CPU，但應先確認程式能使用所增核心。規格很大而只用單一執行緒時，不代表整個工作會隨核心數增加而加快。"
    },
    {
     "id": "n2",
     "label": "記憶體滿",
     "detail": "工作資料放不下",
     "icon": "server",
     "explain": "大量資料留在記憶體運算時，限制可能來自可用記憶體。若只看CPU低就縮小主機，可能讓原本已緊張的資料空間更加不足。"
    },
    {
     "id": "n3",
     "label": "磁碟等待",
     "detail": "查詢在等資料讀回",
     "icon": "database",
     "explain": "查詢若主要時間在等磁碟，單純增加CPU可能仍然等待。需要觀察讀寫延遲、吞吐及查詢模式，再選擇對應資源調整方式。"
    }
   ],
   "links": []
  }
 ],
 "ec2-dedicated-license": [
  {
   "anchor": 2,
   "title": "專用硬體，還差一層主機控制",
   "purpose": "Host與Instance名稱只差一字；並排是否能交出合約要求的實體主機盤點。",
   "kind": "compare",
   "caption": "本例需要主機ID、插槽核心與指定放置控制；不是只要求不和其他客戶共用硬體。",
   "nodes": [
    {
     "id": "n1",
     "label": "Dedicated Host",
     "detail": "可見host ID、核心與放置",
     "icon": "server",
     "explain": "合約要求知道實體主機識別與插槽核心，並控制執行個體放在哪台主機。Dedicated Host提供相應可見性，但仍要核對軟體授權條款和容量。"
    },
    {
     "id": "n2",
     "label": "Dedicated Instance",
     "detail": "專用硬體，控制範圍不同",
     "icon": "server",
     "explain": "Dedicated Instance也使用專用硬體，卻沒有相同的指定主機放置與核心盤點控制。不能因兩者都叫專用，就把只有租用隔離的方案套回本例合約。"
    }
   ],
   "links": []
  }
 ],
 "ec2-placement": [
  {
   "anchor": 2,
   "title": "先看要放近，還是分開故障範圍",
   "purpose": "放置群組的名字無法形成空間感；以三種配置目標並排呈現距離與隔離的不同。",
   "kind": "compare",
   "caption": "位置策略不會自動複寫資料；分散系統仍需把副本放到合適位置。",
   "nodes": [
    {
     "id": "n1",
     "label": "Cluster",
     "detail": "同AZ緊密安排",
     "icon": "network",
     "explain": "密集交換中間結果的模擬節點，可能重視互通延遲，因此比較同AZ的緊密安排。這項目標不是跨AZ容錯，仍要查核支援機型與可用容量。"
    },
    {
     "id": "n2",
     "label": "Spread",
     "detail": "少量主機分散硬體",
     "icon": "shield",
     "explain": "關鍵控制主機不希望共用同一底層硬體故障範圍時，可比較Spread。它的用途是隔離共同故障，不是直接提升每秒運算次數。"
    },
    {
     "id": "n3",
     "label": "Partition",
     "detail": "副本放到不同邏輯分區",
     "icon": "database",
     "explain": "分區之間不共用同一組底層硬體，適合會感知分區的分散系統。應用自己安排資料副本的位置，建立群組本身沒有代做複寫。"
    }
   ],
   "links": []
  }
 ],
 "eni-same-az-transfer": [
  {
   "anchor": 2,
   "title": "移交的是次要介面，不是整台主機",
   "purpose": "私有IP看似只是數字；把帶著位址的介面畫成可移交物件，限定在同一AZ。",
   "kind": "flow",
   "caption": "先確認原機停止使用這個位址，再把次要ENI交給同AZ備機並驗證服務。",
   "nodes": [
    {
     "id": "n1",
     "label": "原機停止使用",
     "detail": "不再處理10.0.1.50",
     "icon": "server",
     "explain": "本例舊程式固定連次要介面的私有位址。移交前先確認原機不再處理這個介面的工作，避免兩台同時宣稱接手相同服務。"
    },
    {
     "id": "n2",
     "label": "拆離次要ENI",
     "detail": "位址與介面屬性跟著走",
     "icon": "network",
     "explain": "要拆離的是已規劃好的次要ENI，帶著10.0.1.50及適用屬性。主要介面不能照這個方式任意移交，不能把任何主機位址都當成可搬資源。"
    },
    {
     "id": "n3",
     "label": "同AZ備機附加",
     "detail": "設定介面並測試服務",
     "icon": "server",
     "explain": "ENI所在子網決定AZ，只能附加到同AZ執行個體。備機仍需支援介面配置並啟動已準備的服務；取得同一位址不代表資料及交易也一起搬過去。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "釋出使用",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "同AZ接手",
     "tone": "normal"
    }
   ]
  }
 ],
 "efa-cluster-requirements": [
  {
   "anchor": 2,
   "title": "放得近，不等於已使用EFA",
   "purpose": "位置安排與通訊介面常被視為同一個勾選項；拆成兩個相配但不能互代的條件。",
   "kind": "compare",
   "caption": "平行程式要真的走支援的通訊路徑；放置群組不會替你裝好介面、驅動或函式庫。",
   "nodes": [
    {
     "id": "n1",
     "label": "放置位置",
     "detail": "Cluster降低互通距離",
     "icon": "network",
     "explain": "先前的cluster placement group處理工作節點的位置安排。它可以服務低延遲目標，卻沒有替程式改寫通訊方式或替主機裝好EFA驅動。"
    },
    {
     "id": "n2",
     "label": "EFA通訊準備",
     "detail": "支援機型、驅動與軟體",
     "icon": "gear",
     "explain": "EFA要有合適機型、作業系統、驅動與通訊函式庫，應用也必須實際使用。完成後用同一工作負載量測，不把一般HTTP網站直接當成平行計算例子。"
    }
   ],
   "links": []
  }
 ],
 "block-storage": [
  {
   "anchor": 2,
   "title": "跨AZ重建時，是由快照建立新卷",
   "purpose": "磁碟和快照容易被當可直接搬移的同一東西；畫出保存狀態到另一AZ新磁碟的路徑。",
   "kind": "flow",
   "caption": "不是把原EBS卷直接掛到另一AZ；建立新卷後，還要啟動應用與驗證資料。",
   "nodes": [
    {
     "id": "n1",
     "label": "AZ-A原卷",
     "detail": "原本的EBS資料",
     "icon": "database",
     "explain": "EBS卷屬於特定AZ，本例原卷在AZ-A供主機讀寫。需要去另一AZ重建時，不能直接把這顆卷當成跨AZ可掛載的同一裝置。"
    },
    {
     "id": "n2",
     "label": "時間點快照",
     "detail": "保存適當一致的狀態",
     "icon": "file",
     "explain": "快照保留卷某個時間點的狀態，供建立新卷等復原流程使用。還需要核對應用一致性與金鑰授權，不是自動持續運作的備援資料庫。"
    },
    {
     "id": "n3",
     "label": "AZ-B新卷",
     "detail": "供備援主機使用",
     "icon": "database",
     "explain": "由適合快照在目標AZ建立新卷後，才有該位置能使用的磁碟。啟動程式、確認內容和切換使用者仍是另外工作，不能只看建立卷成功。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "建立快照",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "在目標AZ建立",
     "tone": "normal"
    }
   ]
  }
 ],
 "ec2-state-data": [
  {
   "anchor": 2,
   "title": "休眠保存RAM，沒有保住本機暫存",
   "purpose": "記憶體與兩種磁碟容易混在一起；用同一次休眠後的三種結果建立保存範圍。",
   "kind": "compare",
   "caption": "本例休眠符合前提；RAM可恢復、EBS成品仍在、instance store中間檔要重建。",
   "nodes": [
    {
     "id": "n1",
     "label": "RAM分析進度",
     "detail": "休眠寫入加密根磁碟",
     "icon": "gear",
     "explain": "本例尚未完成的分析只在RAM，普通停止不會保存其執行狀態。符合休眠前提時可先寫到加密EBS根磁碟，之後依支援流程恢復。"
    },
    {
     "id": "n2",
     "label": "EBS報表成品",
     "detail": "跨停止仍可留下",
     "icon": "file",
     "explain": "需保存的成品已寫到EBS，沒有只留在本機暫存。EBS在終止時是否刪除另看設定，不能把停止、休眠與終止當成完全相同事件。"
    },
    {
     "id": "n3",
     "label": "instance store",
     "detail": "休眠後中間檔需重建",
     "icon": "server",
     "explain": "本機暫存依附主機生命週期，停止或休眠都會清掉這些中間檔。休眠保住RAM不代表它也保住instance store，因此本例只放可重算資料。"
    }
   ],
   "links": []
  }
 ],
 "ebs-performance-types": [
  {
   "anchor": 2,
   "title": "相同IOPS，品質需求可能不同",
   "purpose": "只盯著80,000數字會忽略延遲與耐久；讓選型回到兩類磁碟的用途。",
   "kind": "compare",
   "caption": "以完整品質需求與相容EC2驗證；不能用過去的gp3上限作唯一排除依據。",
   "nodes": [
    {
     "id": "n1",
     "label": "gp3",
     "detail": "容量與效能分別配置",
     "icon": "database",
     "explain": "資料量沒增加但需要更多效能時，可比較gp3的獨立配置與適用比例限制。現行能力不能只用舊上限判斷，額外配置仍有成本及EC2端條件。"
    },
    {
     "id": "n2",
     "label": "io2 Block Express",
     "detail": "低延遲、高耐久等要求",
     "icon": "database",
     "explain": "本例關鍵資料庫同時重視延遲、耐久與持續效能，才評估相應io2方案。不因單一IOPS數字就宣稱另一類磁碟不可能，仍需實測完整需求。"
    },
    {
     "id": "n3",
     "label": "EC2端",
     "detail": "磁碟與主機共同受限",
     "icon": "server",
     "explain": "即使磁碟配置足夠，EC2的EBS頻寬、IOPS和應用I/O形態仍可能成為瓶頸。圖中的第三張卡提醒讀者，產品設定數字不是端到端效能保證。"
    }
   ],
   "links": []
  }
 ],
 "ebs-snapshot-ready": [
  {
   "anchor": 2,
   "title": "先暖好資料，與建立時已準備好",
   "purpose": "快照初次讀取的額外延遲看不見；把一般預備與FSR的等待放在不同位置比較。",
   "kind": "compare",
   "caption": "FSR要對準指定快照及AZ；不能把區域中某次啟用當成所有新磁碟都已準備。",
   "nodes": [
    {
     "id": "n1",
     "label": "一般還原",
     "detail": "先讀區塊，再跑報表",
     "icon": "file",
     "explain": "一般快照還原後可能在首次讀取區塊時才初始化，因此第一輪較慢。若能等待，可在正式工作前依支援方式先讀所需區塊，再量測後續效能。"
    },
    {
     "id": "n2",
     "label": "FSR還原",
     "detail": "指定快照＋目標AZ先就緒",
     "icon": "clock",
     "explain": "若要求新卷建立後立即取得配置效能，可提前為指定快照和AZ準備FSR。仍需核對狀態、額度及費用，新快照不會自動繼承原來設定。"
    }
   ],
   "links": []
  }
 ],
 "ebs-iops-throughput": [
  {
   "anchor": 1,
   "title": "IOPS夠，資料量仍可能過不去",
   "purpose": "次數與每秒資料量是不同瓶頸；把算出的需求與吞吐上限畫成同單位長條。",
   "kind": "capacity",
   "caption": "125 MiB/s的上限低於250 MiB/s需求；只提高IOPS沒有移除這段資料量限制。",
   "nodes": [
    {
     "id": "n1",
     "label": "工作吞吐需求",
     "detail": "4000次／秒，每次64 KiB",
     "icon": "chart",
     "explain": "每次64 KiB乘每秒4000次，得到256000 KiB/s，再換成250 MiB/s。先用一致單位相乘，不能把每次大小和每秒次數當成相同概念。",
     "value": 250,
     "unit": "MiB/s"
    },
    {
     "id": "n2",
     "label": "目前吞吐上限",
     "detail": "本例配置125 MiB/s",
     "icon": "database",
     "explain": "本例磁碟的IOPS即使足夠，吞吐仍只有125 MiB/s，較低的一段先限制傳送量。以相同操作大小估算約2000次每秒，仍需另看實際延遲及其他瓶頸。",
     "value": 125,
     "unit": "MiB/s"
    }
   ],
   "links": [],
   "formula": "4000 × 64 ÷ 1024 = 250 MiB/s > 125 MiB/s"
  }
 ],
 "ebs-existing-encryption": [
  {
   "anchor": 2,
   "title": "建立加密副本後，還要讓應用換過去",
   "purpose": "啟用預設與舊卷遷移容易跳過切換；畫出原卷、快照、新卷和驗證的實際交接。",
   "kind": "flow",
   "caption": "帳號新預設不會重寫舊卷；加密副本存在，也不代表應用已改用它。",
   "nodes": [
    {
     "id": "n1",
     "label": "舊未加密卷",
     "detail": "先盤點實際狀態",
     "icon": "database",
     "explain": "帳號啟用EBS預設加密，只影響適用的新建行為，不會回頭改寫本例既有卷。先確認原卷與快照狀態，避免只看帳號開關就宣稱歷史已處理。"
    },
    {
     "id": "n2",
     "label": "一致快照",
     "detail": "依支援方式建立加密副本",
     "icon": "file",
     "explain": "取得符合應用一致性需求的快照，再依支援方式指定加密與合適KMS金鑰。核對金鑰狀態和使用權，避免副本存在卻不能供應用讀取。"
    },
    {
     "id": "n3",
     "label": "加密新卷",
     "detail": "接上應用、驗證再切換",
     "icon": "lock",
     "explain": "應用需依計畫改用新卷，確認檔案、權限與實際讀寫，再決定清理舊資源時機。只建立新卷沒有改變仍掛著原卷的應用流程。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "保存可復原狀態",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "建立並切換",
     "tone": "normal"
    }
   ]
  }
 ],
 "file-storage": [
  {
   "anchor": 1,
   "title": "同叫共享檔案，介面要先對上",
   "purpose": "NFS、SMB和AD常變成縮寫清單；將既有程式需要的入口放回服務比較。",
   "kind": "compare",
   "caption": "先核對協定與身分需求，再比容量和價格；共享檔案不是所有介面都相同。",
   "nodes": [
    {
     "id": "n1",
     "label": "Linux共用檔",
     "detail": "依NFS等需求比較EFS",
     "icon": "file",
     "explain": "多個Linux應用需要共用檔案時，先確認它們實際使用的檔案介面與存取方式。選擇需要接上原程式操作，不是只看檔案數量或容量。"
    },
    {
     "id": "n2",
     "label": "Windows共用檔",
     "detail": "SMB與AD需求需相容",
     "icon": "file",
     "explain": "既有Windows程式若明確要求SMB與Active Directory整合，應先排除不相容介面。受管共享服務也不能略過身分與檔案存取設計。"
    }
   ],
   "links": []
  }
 ],
 "efs-regional-path": [
  {
   "anchor": 2,
   "title": "資料跨AZ保存，入口仍要能連上",
   "purpose": "Regional名稱容易被誤讀為每台應用已連通；並排保存範圍與掛載入口的責任。",
   "kind": "compare",
   "caption": "Regional描述資料範圍；mount target與NFS規則讓應用真的能讀寫。",
   "nodes": [
    {
     "id": "n1",
     "label": "Regional EFS",
     "detail": "資料的多AZ保存範圍",
     "icon": "cloud",
     "explain": "本例要跨AZ共用並承受單AZ故障，因此先選符合保存範圍的檔案系統。只有應用跨兩個AZ，不會把One Zone資料自動變成Regional。"
    },
    {
     "id": "n2",
     "label": "各使用AZ的入口",
     "detail": "mount targets與NFS連線",
     "icon": "network",
     "explain": "應用還要有適當掛載入口、路徑與NFS安全規則，才能真正讀寫檔案。跨AZ保存成功不等於每個應用已建立有效的掛載與故障接手機制。"
    }
   ],
   "links": []
  }
 ],
 "windows-file-permissions": [
  {
   "anchor": 2,
   "title": "連得到，登入對，才輪到檔案權限",
   "purpose": "把SG、AD與NTFS視為同種允許會漏檢；以員工開報告的順序建立各層責任。",
   "kind": "flow",
   "caption": "三項各管不同範圍：網路連線、員工身分、這份檔案能讀還是能寫。",
   "nodes": [
    {
     "id": "n1",
     "label": "能到共享入口",
     "detail": "DNS、路徑及連線規則",
     "icon": "network",
     "explain": "客戶端先要能找到並連到檔案系統，這段需DNS、網路與適用安全規則。安全群組放通不表示已替員工完成登入或准許修改所有檔案。"
    },
    {
     "id": "n2",
     "label": "AD驗證身分",
     "detail": "確認是哪位Windows員工",
     "icon": "person",
     "explain": "員工經支援的Active Directory安排驗證身分，與IAM管理FSx資源不同。登入成功也還不能直接推論他能修改本例的財務月報。"
    },
    {
     "id": "n3",
     "label": "檔案存取範圍",
     "detail": "分享與NTFS ACL核對",
     "icon": "lock",
     "explain": "財務可修改、其他部門只能讀指定報告，是分享與檔案權限需要實作的業務分工。用不同實際身分測試，不能只以管理員測通代表所有授權都正確。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "確認連線",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "核對讀寫範圍",
     "tone": "normal"
    }
   ]
  }
 ],
 "fsx-ontap-compatibility": [
  {
   "anchor": 1,
   "title": "同一ONTAP環境，接不同客戶端",
   "purpose": "多協定能力沒有形狀；把一個受管檔案環境接到Linux與Windows的不同入口。",
   "kind": "fanout",
   "caption": "圖示只表達本例介面需求；身分、權限與實際資料遷移仍要逐一驗證。",
   "nodes": [
    {
     "id": "n1",
     "label": "FSx ONTAP",
     "detail": "支援的SVM與volume配置",
     "icon": "database",
     "explain": "本例要延續既有ONTAP管理與多協定能力，因此比較受管ONTAP檔案儲存。建立資源不會自動搬完檔案，也不會自動修正不同協定的權限語意。"
    },
    {
     "id": "n2",
     "label": "Linux應用",
     "detail": "經NFS讀寫",
     "icon": "server",
     "explain": "Linux端按本例需求經NFS開檔，還要驗證路徑、網路與適用權限。不能只因檔案系統建立成功，就宣稱原本應用已能正確讀寫。"
    },
    {
     "id": "n3",
     "label": "Windows應用",
     "detail": "經SMB讀寫",
     "icon": "server",
     "explain": "Windows端使用SMB入口，需配合適用身分整合與檔案安全形式。圖中兩端指向同一方案，是需求配置示意，不代表兩端自動取得相同權限。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "提供NFS入口",
     "tone": "normal"
    },
    {
     "from": "n1",
     "to": "n3",
     "label": "提供SMB入口",
     "tone": "normal"
    }
   ]
  }
 ],
 "lustre-s3-workflow": [
  {
   "anchor": 2,
   "title": "S3保存原料，Lustre提供工作桌",
   "purpose": "資料關聯易被誤當所有檔案即時同步；以輸入、工作空間、輸出分三個位置。",
   "kind": "flow",
   "caption": "關聯不等於所有修改已永久同步；清理工作空間前，確認結果已匯出並可讀。",
   "nodes": [
    {
     "id": "n1",
     "label": "S3輸入檔",
     "detail": "保存需要分析的物件",
     "icon": "bucket",
     "explain": "本例輸入原本保存在S3，物件網址不能直接視為所有程式可用的檔案目錄。先確認運算程式需要的檔案介面，才有加入工作檔案系統的理由。"
    },
    {
     "id": "n2",
     "label": "Lustre工作空間",
     "detail": "節點掛載並平行處理",
     "icon": "server",
     "explain": "計算節點透過支援配置掛載Lustre工作空間，使用與S3整合的輸入。Lustre和S3仍是兩個位置，需要安排實際載入與匯出責任。"
    },
    {
     "id": "n3",
     "label": "S3輸出結果",
     "detail": "查驗結果後再清理",
     "icon": "bucket",
     "explain": "工作完成後核對哪些結果已按規劃匯出S3，哪些還只是暫時工作檔。只有確認保存結果，才能依可重建性和部署方式清理工作空間。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "匯入或載入",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "依規劃匯出",
     "tone": "normal"
    }
   ]
  }
 ],
 "dynamodb": [
  {
   "anchor": 2,
   "title": "同一筆新訂單，讀哪裡會不同",
   "purpose": "主表與索引都能查資料卻有不同新鮮度；並排付款確認與列表兩種已教用途。",
   "kind": "compare",
   "caption": "需要最新付款狀態時，選支援強一致的適當路徑；GSI查詢可能稍晚更新。",
   "nodes": [
    {
     "id": "n1",
     "label": "主表付款核對",
     "detail": "可依需求用強一致讀",
     "icon": "database",
     "explain": "結帳後立即核對付款，需求是先前成功寫入的最新內容。主表支援強一致讀取選項，但仍須以實際存取模式和相應條件設計查詢。"
    },
    {
     "id": "n2",
     "label": "GSI列表查詢",
     "detail": "另一組鍵，可能稍晚更新",
     "icon": "file",
     "explain": "GSI幫助按不同查找方式查資料，索引更新可能落後主表。不能把暫時查不到新訂單推成成功寫入未保存，也不能直接要求同樣的強一致讀法。"
    }
   ],
   "links": []
  }
 ],
 "dynamodb-ttl-expiry": [
  {
   "anchor": 1,
   "title": "優惠券過期，資料還可能留著",
   "purpose": "到期授權與背景刪除有時間差；用19:59和20:01讓讀者看到仍存在但不能用的狀態。",
   "kind": "timeline",
   "caption": "是否查得到不等於是否能核銷；核銷API依目前時間與業務狀態判斷。",
   "nodes": [
    {
     "id": "n1",
     "label": "19:59",
     "detail": "到期20:00，尚未使用",
     "icon": "receipt",
     "explain": "此時券未到期且未使用，程式仍須核對狀態並依條件完成核銷。不是只要查到這筆資料，就略過期限與是否已使用的判斷。"
    },
    {
     "id": "n2",
     "label": "20:00 到期",
     "detail": "有效期限已過",
     "icon": "clock",
     "explain": "expiresAt描述這張優惠券業務上何時不再有效。到期時刻不等於DynamoDB已在同一秒完成刪除，背景清理與授權是兩項工作。"
    },
    {
     "id": "n3",
     "label": "20:01 仍在表中",
     "detail": "清單過濾，核銷拒絕",
     "icon": "shield",
     "explain": "過期項目等待背景清理時仍可能被讀到，因此前台不顯示還不夠。直接呼叫核銷API的人也必須被當下時間檢查拒絕，不能繞過期限。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "跨過期限",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "可能尚未刪除",
     "tone": "normal"
    }
   ]
  }
 ],
 "dynamodb-gsi-write-chain": [
  {
   "anchor": 2,
   "title": "主表夠快，索引仍可能卡住寫入",
   "purpose": "非同步索引容易被想成完全不反壓；用同一寫入鏈的兩段能力表示窄口。",
   "kind": "capacity",
   "caption": "這是教材給定的相應寫入能力示意，不是把WCU直接等同任意大小的筆數。",
   "nodes": [
    {
     "id": "n1",
     "label": "主表可接寫入",
     "detail": "本例每秒100筆",
     "icon": "database",
     "explain": "本例主表原本可接每秒一百筆新訂單，寫入同時需要更新相關GSI。只看這一段尚有餘裕，不能證明整條寫入鏈都足以接受相同流量。",
     "value": 100,
     "unit": "筆／秒"
    },
    {
     "id": "n2",
     "label": "需更新的GSI",
     "detail": "本例足夠20筆相應寫入",
     "icon": "file",
     "explain": "索引需要接住相應更新，若寫容量不足或鍵過熱，可讓主表寫入也節流。圖中較短的一段表達下游索引限制，不是多加主表讀容量便能消除。",
     "value": 20,
     "unit": "筆／秒"
    }
   ],
   "links": [],
   "formula": "主表寫入涉及GSI更新；索引不足可能反壓主表"
  }
 ],
 "dynamodb-read-unit-math": [
  {
   "anchor": 1,
   "title": "先分4 KB區段，再乘讀取頻率",
   "purpose": "6 KB直接除4易誤得1.5；把向上進位與每秒用量拆成兩個可見動作。",
   "kind": "flow",
   "caption": "本例固定為相同6 KB項目的強一致GetItem；其他API不能直接沿用此公式。",
   "nodes": [
    {
     "id": "n1",
     "label": "一張6 KB訂單",
     "detail": "強一致GetItem",
     "icon": "receipt",
     "explain": "先固定每次讀取一筆六KB訂單，避免把多項目查詢或其他讀取型態混進同一公式。接著按每四KB或不足一段的計量規則計算。"
    },
    {
     "id": "n2",
     "label": "兩個4 KB區段",
     "detail": "不足一段也算一段",
     "icon": "file",
     "explain": "六KB跨過第一個四KB區段，還需要第二段，因此每次用兩個讀單位。這是計量向上進位，不是實際資料內容被補成八KB。"
    },
    {
     "id": "n3",
     "label": "每秒100次",
     "detail": "理論200讀單位／秒",
     "icon": "chart",
     "explain": "每次兩個單位再乘每秒一百次，得到理論兩百讀單位每秒。正式預置容量還要留餘裕並檢查熱鍵與節流，不能只以平均公式保證可用性。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "向上進位",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "2 × 100",
     "tone": "normal"
    }
   ]
  }
 ],
 "dynamodb-global-write-semantics": [
  {
   "anchor": 2,
   "title": "多地可寫，仍要選一致性模式",
   "purpose": "多活入口與全球最新容易混同；並排兩種模式的複寫及衝突責任。",
   "kind": "compare",
   "caption": "MREC與MRSC不是同一套一致性保證；兩者都不替業務完成任意多步交易。",
   "nodes": [
    {
     "id": "n1",
     "label": "MREC",
     "detail": "非同步複寫與版本收斂",
     "icon": "globe",
     "explain": "另一區可能暫時看舊值，同一項目跨區同時改動以內部時間戳收斂。不能把兩地寫入金額想成自動相加，當地條件寫也不是全球鎖。"
    },
    {
     "id": "n2",
     "label": "MRSC",
     "detail": "跨區同步與強一致讀選項",
     "icon": "globe",
     "explain": "本例需全球最新項目時，核對支援配置並使用強一致讀。並行寫同一項目可能衝突，仍需處理重試、延遲及功能限制，不是所有讀取自動變強一致。"
    }
   ],
   "links": []
  }
 ],
 "cache-databases": [
  {
   "anchor": 2,
   "title": "沒命中，才回資料庫找並補快取",
   "purpose": "Cache-aside不容易想像誰在管理；畫出商品123第一次查詢未命中的順序。",
   "kind": "flow",
   "caption": "這張圖只走「未命中」路徑；之後相同查詢命中，可直接重用快取結果。",
   "nodes": [
    {
     "id": "n1",
     "label": "應用查商品123",
     "detail": "使用product:123作鍵",
     "icon": "phone",
     "explain": "應用先依商品識別形成快取鍵，並向快取詢問這一份內容。這項查詢與鍵的安排由應用負責，不是資料庫所有查詢自動都加入快取。"
    },
    {
     "id": "n2",
     "label": "快取未命中",
     "detail": "這次還沒有可用副本",
     "icon": "clock",
     "explain": "第一次沒有可用的商品123副本，因此不能直接回傳快取結果。這個未命中狀態使應用接著去查主資料庫，而不是把查不到當成商品不存在。"
    },
    {
     "id": "n3",
     "label": "查資料庫",
     "detail": "取得正式商品內容",
     "icon": "database",
     "explain": "應用向資料庫取得商品內容，仍需完成正常查詢與授權。快取省略的是之後可重用的查詢工作，不是讓主資料庫失去正式保存資料的責任。"
    },
    {
     "id": "n4",
     "label": "填入快取",
     "detail": "相同查詢之後可重用",
     "icon": "file",
     "explain": "把這次查得內容按適當鍵放進快取，後續命中才可減少重複資料庫工作。仍需另外安排更新失效、過期及故障時行為，不能永久沿用所有舊值。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "先詢問",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "未命中才查",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "應用保存副本",
     "tone": "normal"
    }
   ]
  }
 ],
 "dynamodb-dax-path": [
  {
   "anchor": 2,
   "title": "商品快讀，與付款最新核對分兩路",
   "purpose": "DAX微秒快取容易被套到所有讀取；用兩種讀取目的表明新鮮度需求不同。",
   "kind": "compare",
   "caption": "DAX主要加速相容路徑的重複最終一致讀；強一致讀取送往DynamoDB。",
   "nodes": [
    {
     "id": "n1",
     "label": "商品介紹",
     "detail": "DAX命中可重用內容",
     "icon": "file",
     "explain": "反覆按同商品鍵讀取且容許短暫舊值，才符合本例快取目的。應用要用相容client連DAX端點，單純建立叢集不會讓原請求自動命中。"
    },
    {
     "id": "n2",
     "label": "付款後確認",
     "detail": "按強一致要求讀表",
     "icon": "database",
     "explain": "付款後要確認最新資料，不能為較低延遲改用舊快取。要求強一致的讀取送往DynamoDB，不會從DAX快取取得同樣加速利益。"
    }
   ],
   "links": []
  }
 ],
 "dns": [
  {
   "anchor": 0,
   "title": "先問地址，再送網站請求",
   "purpose": "DNS常被誤想成每次HTTP請求都經過的代理；分開查名稱與實際應用連線。",
   "kind": "flow",
   "caption": "DNS回答要連哪裡；/orders路徑屬於後面的應用請求，不由DNS逐條判讀。",
   "nodes": [
    {
     "id": "n1",
     "label": "瀏覽器要開網站",
     "detail": "先拿網站名稱詢問",
     "icon": "phone",
     "explain": "使用者先輸入網站名稱，瀏覽器需要取得連線位置資訊。這時還不是把付款或訂單內容交給DNS處理，而是在問目的地在哪裡。"
    },
    {
     "id": "n2",
     "label": "DNS解析結果",
     "detail": "回覆名稱對應資訊",
     "icon": "globe",
     "explain": "DNS回答名稱對應的資訊，供用戶端建立後續連線。Route 53規則改變這份回答，不會逐一檢查每筆HTTP要求中的網址路徑。"
    },
    {
     "id": "n3",
     "label": "依結果連入口",
     "detail": "之後才送/orders請求",
     "icon": "server",
     "explain": "使用者依解析結果連到應用入口，HTTP請求才帶著/orders等路徑。若要按這些路徑分流，應比較應用層入口，而不是增加DNS記錄。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "查詢名稱",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "依回覆連線",
     "tone": "normal"
    }
   ]
  }
 ],
 "dns-apex-alias": [
  {
   "anchor": 1,
   "title": "同一ALB，頂點與子網域選法不同",
   "purpose": "apex與www的層級沒有畫面；把兩個完整名稱及可用紀錄方式並排列出。",
   "kind": "compare",
   "caption": "Route 53 Alias可指向支援的ALB目標；CNAME不能放在這個網域頂點。",
   "nodes": [
    {
     "id": "n1",
     "label": "example.com",
     "detail": "網域頂點 → ALB Alias",
     "icon": "globe",
     "explain": "這列是區域的網域頂點，本例要指向支援的ALB目標，因此比較Route 53 Alias。不能將頂點當一般子網域直接放CNAME。"
    },
    {
     "id": "n2",
     "label": "www.example.com",
     "detail": "子網域 → 合適Alias或CNAME",
     "icon": "globe",
     "explain": "www是此頂點下的子網域，可依支援條件選Alias或適當CNAME。兩列最終服務入口可以相同，但名稱層級與可用紀錄條件不同。"
    }
   ],
   "links": []
  }
 ],
 "edge": [
  {
   "anchor": 0,
   "title": "同一個來源，命中與未命中不同",
   "purpose": "快取是一份可重用副本，光讀hit/miss不易想像；對照是否真的回來源。",
   "kind": "compare",
   "caption": "CloudFront有仍可用副本就直接回應；沒有可用副本時仍需要向來源取得。",
   "nodes": [
    {
     "id": "n1",
     "label": "命中hit",
     "detail": "可用副本 → 回給客人",
     "icon": "file",
     "explain": "常被讀取的同一份logo若已有可用副本，CloudFront可直接回應。這次不必重新向origin取內容，因此減少來源工作與部分等待。"
    },
    {
     "id": "n2",
     "label": "未命中miss",
     "detail": "向origin取內容再回應",
     "icon": "bucket",
     "explain": "剛產生、從未有人讀過的報表可能尚無副本，此時仍要回來源取得。使用CDN沒有讓來源從此完全沒有流量，兩條路徑要分開理解。"
    }
   ],
   "links": []
  }
 ],
 "cloudfront-origin-oac": [
  {
   "anchor": 2,
   "title": "來源讀取，要有兩把不同的准許",
   "purpose": "OAC、桶與KMS授權常被背成名單；畫出本例私有加密教材的讀取鏈。",
   "kind": "flow",
   "caption": "OAC驗證來源請求，桶核對指定分發，SSE-KMS還需適用金鑰授權；本課尚未加入付費觀看者。",
   "nodes": [
    {
     "id": "n1",
     "label": "CloudFront分發",
     "detail": "以OAC簽署來源請求",
     "icon": "cloud",
     "explain": "分發使用私有S3 REST來源與OAC，而不是不支援這條安排的website endpoint。OAC處理的是分發向來源讀資料，沒有替客人判斷是否付費。"
    },
    {
     "id": "n2",
     "label": "私有S3桶",
     "detail": "桶政策核對指定分發",
     "icon": "bucket",
     "explain": "桶政策需允許相應CloudFront服務並限制指定distribution來源，保留適當公開存取保護。只設定OAC而缺這份授權，沒有完成來源讀取。"
    },
    {
     "id": "n3",
     "label": "KMS使用條件",
     "detail": "允許對應分發使用金鑰",
     "icon": "key",
     "explain": "本例物件使用SSE-KMS，因此讀取還依賴相應KMS金鑰使用授權。桶允許不等於已能解密，必須沿完整讀取鏈分別核對。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "提出來源讀取",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "加密物件另需",
     "tone": "normal"
    }
   ]
  }
 ],
 "cloudfront-viewer-access": [
  {
   "anchor": 2,
   "title": "誰能看，與誰能讀來源是兩段",
   "purpose": "簽名URL與OAC都像通行證卻保護不同對象；並排觀看端與來源端兩段門。",
   "kind": "compare",
   "caption": "先驗證購買資格並核發觀看票證，同時保留私有來源保護，避免繞過分發。",
   "nodes": [
    {
     "id": "n1",
     "label": "觀看者這一段",
     "detail": "後端核資格，再發signed URL",
     "icon": "phone",
     "explain": "會員A購買影片後，受信任後端才發有限期限網址；CloudFront核對配置的簽章與期限。持有者仍可能轉傳，不能把網址當永不外流的身分證。"
    },
    {
     "id": "n2",
     "label": "來源這一段",
     "detail": "OAC與私有S3授權",
     "icon": "lock",
     "explain": "來源端保留私有桶與指定分發的讀取安排，防止觀看者繞過分發直接讀來源。OAC不核對客人付款，觀看簽名也不能取代來源端保護。"
    }
   ],
   "links": []
  }
 ],
 "s3-cloudfront-freshness": [
  {
   "anchor": 1,
   "title": "S3的新菜單，和邊緣的舊副本",
   "purpose": "兩次讀取來自不同層，看似矛盾；並排同時刻S3和仍有效的CloudFront副本。",
   "kind": "compare",
   "caption": "來源已更新不等於所有快取被推送更新；客人若由有效副本取得v1，不違反S3一致性。",
   "nodes": [
    {
     "id": "n1",
     "label": "直接讀S3",
     "detail": "10:02已成功寫入v2",
     "icon": "bucket",
     "explain": "管理員成功寫同key的v2後，直接對S3執行適用讀取可取得最新內容。這一張卡表達來源狀態，不能推出其他位置保存的副本都已經更新。"
    },
    {
     "id": "n2",
     "label": "經CloudFront讀",
     "detail": "10:00取得的v1仍有效",
     "icon": "cloud",
     "explain": "邊緣先前取得v1並可保留十分鐘，客人此時可能由該有效副本收到v1。這次沒有重新向S3讀，所以不是S3把資料倒退成舊內容。"
    }
   ],
   "links": []
  }
 ],
 "cloudfront-private-cache-policy": [
  {
   "anchor": 2,
   "title": "共用菜單，和每人自己的訂單",
   "purpose": "同一路徑可能因登入者不同回私人資料；兩份內容並排表明快取隔離邊界。",
   "kind": "compare",
   "caption": "公共內容可依規則重用；私人路徑不需要快取時，明確停用並保留必要授權資訊。",
   "nodes": [
    {
     "id": "n1",
     "label": "公開/menu",
     "detail": "可共用的相同菜單",
     "icon": "menu",
     "explain": "所有客人看同一份公開菜單時，可依可接受舊值時間與快取鍵重用回應。這種共用前提不能直接套用到每位使用者內容不同的/my-orders。"
    },
    {
     "id": "n2",
     "label": "私人/my-orders",
     "detail": "A只能看A，B只能看B",
     "icon": "lock",
     "explain": "私人回應若不需要快取，可用適當CachingDisabled或完整零TTL配置，再核對身分轉送及來源授權。只轉送身分或寫private標頭，不足證明全部隔離已正確。"
    }
   ],
   "links": []
  }
 ],
 "streaming": [
  {
   "anchor": 0,
   "title": "串流保留同批事件，各讀各的進度",
   "purpose": "競爭工作與完整重播容易混在一起；從同一保留紀錄分支到兩個獨立消費用途。",
   "kind": "fanout",
   "caption": "兩個分析程式都能讀同批保留事件；不是各自只分到其中一半。",
   "nodes": [
    {
     "id": "n1",
     "label": "保留的點擊事件",
     "detail": "同一批持續累積的紀錄",
     "icon": "queue",
     "explain": "本例點擊事件同時供欺詐偵測與商品推薦使用，每個用途都需要讀到完整紀錄。圖中的保留區不是一般工作佇列被一人取走就完成的分配模型。"
    },
    {
     "id": "n2",
     "label": "欺詐偵測",
     "detail": "自己的讀取進度",
     "icon": "shield",
     "explain": "偵測程式按自己的進度讀取保留事件，即使推薦程式先前已讀過，也不表示這個用途的工作被別人代做或被分走。"
    },
    {
     "id": "n3",
     "label": "商品推薦",
     "detail": "另一份讀取進度",
     "icon": "chart",
     "explain": "推薦程式也按自己的讀取進度處理同批事件。保留重播並不自動保證外部資料庫沒有重複副作用，後續業務仍要安排正確保護。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "各自完整讀取",
     "tone": "normal"
    },
    {
     "from": "n1",
     "to": "n3",
     "label": "各自完整讀取",
     "tone": "normal"
    }
   ]
  }
 ],
 "firehose-record-vs-throughput": [
  {
   "anchor": 1,
   "title": "大報表放S3，事件只帶位置",
   "purpose": "提高吞吐配額不能讓單筆變小；把大檔本體與小參照事件畫成不同物件。",
   "kind": "flow",
   "caption": "本例8 MiB原始報表不塞成一筆PutRecord；先保存原檔，再送小型參照事件。",
   "nodes": [
    {
     "id": "n1",
     "label": "8 MiB原始報表",
     "detail": "資料本體",
     "icon": "file",
     "explain": "原始報表超過本課PutRecord單筆1000 KiB資料限制，不能只提高每秒總吞吐就解除。先把一筆大小與每秒很多筆兩種限制分開。"
    },
    {
     "id": "n2",
     "label": "S3原檔",
     "detail": "先確認上傳成功",
     "icon": "bucket",
     "explain": "將大型本體存到S3並核對成功，後續有明確物件位置可取得。這一步保存檔案，不是把任意大資料直接包成Firehose的一筆紀錄。"
    },
    {
     "id": "n3",
     "label": "小型參照事件",
     "detail": "位置、版本與必要識別",
     "icon": "receipt",
     "explain": "送出較小的事件帶物件位置、版本及必要識別，後續處理者再按權限讀原檔。圖中縮小的是傳遞的參照內容，不是聲稱原始報表已消失或被壓成小檔。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "另存本體",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "送參照，不送整檔",
     "tone": "normal"
    }
   ]
  }
 ],
 "analytics": [
  {
   "anchor": 0,
   "title": "資料在S3，目錄只是閱讀說明",
   "purpose": "Catalog表像資料表名稱，容易被誤當另一份資料；並排檔案本體、目錄與查詢引擎。",
   "kind": "compare",
   "caption": "建立目錄定義不等於複製資料；Athena依定義讀S3檔案並執行SQL。",
   "nodes": [
    {
     "id": "n1",
     "label": "S3檔案",
     "detail": "CSV或Parquet真實內容",
     "icon": "bucket",
     "explain": "交易內容真正保存在S3檔案中，目錄表指向它們的位置。不能因為在Catalog看到一個表名，就當作目錄中另外保存了完整交易資料。"
    },
    {
     "id": "n2",
     "label": "Glue Data Catalog",
     "detail": "欄位型別、格式、位置",
     "icon": "file",
     "explain": "目錄描述怎樣解讀這些檔案，例如欄位名稱與型別。定義寫錯可能讓查詢失敗，但建立或刪除定義不應直接被想成同樣建立或刪除原始檔。"
    },
    {
     "id": "n3",
     "label": "Athena",
     "detail": "依定義查詢原始檔",
     "icon": "chart",
     "explain": "Athena利用目錄定義理解來源並執行SQL，資料內容品質仍要另查。這三張卡各自負責保存、描述與運算，不是三份相同的資料庫。"
    }
   ],
   "links": []
  }
 ],
 "redshift-spectrum-path": [
  {
   "anchor": 2,
   "title": "Spectrum讀外部，COPY搬入本地",
   "purpose": "SQL都能查資料容易混淆保存位置；並排兩種資料流的結果位置。",
   "kind": "compare",
   "caption": "是否把內容載入Redshift本地表，是兩種流程的關鍵差別。",
   "nodes": [
    {
     "id": "n1",
     "label": "Spectrum",
     "detail": "資料仍留在S3",
     "icon": "bucket",
     "explain": "本例透過external schema與外部目錄查S3歷史資料，還需對目錄、物件及加密金鑰有適當授權。能解析表名不代表已取得實際檔案讀取權。"
    },
    {
     "id": "n2",
     "label": "COPY載入",
     "detail": "資料寫入Redshift表",
     "icon": "database",
     "explain": "若需求改成先把熱資料載入本地表，就評估適合的載入流程。不能只建立external schema，就宣稱S3內容已成為Redshift本地資料。"
    }
   ],
   "links": []
  }
 ],
 "emr-spark-work": [
  {
   "anchor": 1,
   "title": "帶著既有Spark程式，選相容執行環境",
   "purpose": "框架與服務名稱容易只剩縮寫；把程式、執行平台和輸入位置接成具體工作。",
   "kind": "flow",
   "caption": "本例選型原因是保留Spark程式與套件，不是因為資料在S3就只能用某一種工具。",
   "nodes": [
    {
     "id": "n1",
     "label": "既有Spark程式",
     "detail": "多步清理與計算邏輯",
     "icon": "file",
     "explain": "團隊已經有依Spark框架撰寫的多步資料工作，希望保留程式。這項前提不能直接換成一條SQL就視為相同，需先核對所需框架和套件。"
    },
    {
     "id": "n2",
     "label": "相容EMR方式",
     "detail": "配置工作資源與角色",
     "icon": "server",
     "explain": "EMR提供適用開放資料框架的受管執行選項，可依控制需要比較部署方式。仍要指定程式、資料位置與角色，不是選服務名稱就完成工作設定。"
    },
    {
     "id": "n3",
     "label": "S3輸入資料",
     "detail": "本體仍保存在S3",
     "icon": "bucket",
     "explain": "選定環境依權限讀S3並執行原Spark邏輯。圖中S3是資料位置，程式在相容運算環境執行，兩者不能因建立關聯就混成同一個服務。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "交付相容程式",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "依授權讀取",
     "tone": "normal"
    }
   ]
  }
 ],
 "compute-cost": [
  {
   "anchor": 2,
   "title": "先問工作能否中斷，再看費用",
   "purpose": "折扣名稱很吸引注意；並排穩定基線、短期尖峰與可重跑工作的不同條件。",
   "kind": "compare",
   "caption": "最低費用要在符合工作限制後比較；能重跑的轉檔不等於唯一付款資料庫也能中斷。",
   "nodes": [
    {
     "id": "n1",
     "label": "全年穩定基線",
     "detail": "評估合適承諾折扣",
     "icon": "money",
     "explain": "全年每天都要使用的基礎容量，才適合按穩定用量比較承諾方案。偶發最高峰不是穩定基線，不能只看折扣率就承諾數年的峰值規模。"
    },
    {
     "id": "n2",
     "label": "偶發尖峰",
     "detail": "不要直接承諾整年峰值",
     "icon": "chart",
     "explain": "活動當天才增加的工作量和全年需求不同。先確認持續時間、服務品質及實際使用方式，再比較可行成本，不把一次高峰直接當長期承諾。"
    },
    {
     "id": "n3",
     "label": "可重試轉檔",
     "detail": "Spot中斷後可重新排隊",
     "icon": "queue",
     "explain": "本例圖片轉檔能按張拆分、保存進度並重試，因此可評估Spot。便宜建立在真能承受容量回收，不是收到通知後就保證任意工作能完整跑完。"
    }
   ],
   "links": []
  }
 ],
 "graviton-compatibility": [
  {
   "anchor": 2,
   "title": "先讓程式相容，再比較同一份成果",
   "purpose": "改CPU型號看似一個欄位；把原生套件、相符映像與實測成果畫成必要檢查。",
   "kind": "flow",
   "caption": "能啟動不等於所有報表正確；相容通過後，才比較代表性工作量的時間與總成本。",
   "nodes": [
    {
     "id": "n1",
     "label": "盤點原程式",
     "detail": "含Python的原生套件",
     "icon": "file",
     "explain": "高階語言相同不代表全部相依都可原封移到Arm。先找原生二進位、驅動與商業套件，確認有無相容版本或需要重建的部分。"
    },
    {
     "id": "n2",
     "label": "Arm測試映像",
     "detail": "安裝相符程式與相依",
     "icon": "server",
     "explain": "使用符合架構的AMI或容器映像，安裝適當版本並驗證功能。只修改instance type或只看到開機成功，都沒有證明原生套件和全部路徑正確。"
    },
    {
     "id": "n3",
     "label": "相同報表輸出",
     "detail": "核對結果、時間與成本",
     "icon": "chart",
     "explain": "以同一組輸入和結果需求量測兩方案，先確認輸出一致再看價格效能。每小時較便宜不保證完成同工作總費用較低，必須帶入實際時間與用量。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "核對相依相容",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "用同一輸入驗證",
     "tone": "normal"
    }
   ]
  }
 ],
 "lambda-cost-gbseconds": [
  {
   "anchor": 1,
   "title": "記憶體加倍，總運算用量反而變小",
   "purpose": "只看GB會忽略時間縮短；以相同GB-seconds單位比較兩個已量測配置。",
   "kind": "capacity",
   "caption": "本圖只比較簡化運算用量；兩者另有相同1000次請求用量，不是完整帳單。",
   "nodes": [
    {
     "id": "n1",
     "label": "配置A：1 GB",
     "detail": "每次0.4秒，共1000次",
     "icon": "function",
     "explain": "配置A每次計費零點四秒，以一GB乘時間再乘一千次，得到四百GB-seconds。這是運算用量，請求數還要另外按相應單價計算。",
     "value": 400,
     "unit": "GB-seconds"
    },
    {
     "id": "n2",
     "label": "配置B：2 GB",
     "detail": "每次0.15秒，共1000次",
     "icon": "function",
     "explain": "配置B用了較多記憶體，但實測時間下降到零點一五秒，因此得到三百GB-seconds。這只對給定測量數字成立，不能推論所有程式加倍記憶體都更省。",
     "value": 300,
     "unit": "GB-seconds"
    }
   ],
   "links": [],
   "formula": "A：1 × 0.4 × 1000 = 400；B：2 × 0.15 × 1000 = 300"
  }
 ],
 "compute-commitment-scope": [
  {
   "anchor": 2,
   "title": "承諾同一筆用量，能跟著搬多遠",
   "purpose": "兩種Savings Plans範圍難想像；並排可移動的服務、家族與Region邊界。",
   "kind": "compare",
   "caption": "先估穩定基線，再看未來變動範圍；兩種折扣都不等於自動預留容量。",
   "nodes": [
    {
     "id": "n1",
     "label": "Compute方案",
     "detail": "可涵蓋適用EC2、Lambda、Fargate",
     "icon": "cloud",
     "explain": "本例未來可能跨家族、Region或移向Lambda與Fargate，因此先比較較廣的適用範圍。儲存與一般資料傳輸等費用仍另估，不會因承諾就全部折扣。"
    },
    {
     "id": "n2",
     "label": "EC2 Instance方案",
     "detail": "所選EC2家族與Region內",
     "icon": "server",
     "explain": "若長期固定在所選家族與Region，可比較較窄方案的條件。不能拿這份範圍涵蓋Lambda或Fargate，也不能只因折扣百分比就忽略未來可能搬移。"
    }
   ],
   "links": []
  }
 ],
 "ri-capacity-scope": [
  {
   "anchor": 2,
   "title": "有折扣，與某AZ留有容量不同",
   "purpose": "RI常被想成已買好一台主機；用帳單與指定位置兩張圖卡分開責任。",
   "kind": "compare",
   "caption": "Regional RI不保留容量；Zonal RI對相符條件在指定AZ有容量作用，不延伸成另一AZ備援。",
   "nodes": [
    {
     "id": "n1",
     "label": "Regional RI",
     "detail": "區域折扣，非AZ容量保證",
     "icon": "money",
     "explain": "報表團隊只需適用區域折扣時可比較Regional RI。之後要在AZ-A啟動新主機，不能單憑持有折扣方案就認為那個位置一定有可用容量。"
    },
    {
     "id": "n2",
     "label": "Zonal RI",
     "detail": "相符設定的指定AZ容量",
     "icon": "server",
     "explain": "活動團隊明確指定AZ-A及相符主機條件，才比較此範圍的容量保留。需要AZ-B備援仍另行安排，不能把一個位置的容量推成多AZ保障。"
    }
   ],
   "links": []
  }
 ],
 "s3-cost": [
  {
   "anchor": 0,
   "title": "同一份日誌，使用需求會長大變老",
   "purpose": "儲存級別像名單難記；沿日誌生命故事建立即時、偶爾與歷史取回的時間感。",
   "kind": "timeline",
   "caption": "先問每個階段多久讀一次、可等多久；相同檔案格式不代表使用同一儲存政策。",
   "nodes": [
    {
     "id": "n1",
     "label": "昨天的日誌",
     "detail": "工程師可能立即排錯",
     "icon": "file",
     "explain": "剛產生的日誌可能需要反覆或立即讀取，先固定這段實際用途。不能因知道它叫日誌，就直接以保存多年為由選需要等待的方案。"
    },
    {
     "id": "n2",
     "label": "較久以前",
     "detail": "較少讀，仍需核對速度",
     "icon": "clock",
     "explain": "過一段時間後讀取頻率可能下降，但是否仍要快速取得要由需求決定。較低儲存單價之外，取回方式、費用與時間也會影響選擇。"
    },
    {
     "id": "n3",
     "label": "三年前稽核資料",
     "detail": "可等待取回的歷史用途",
     "icon": "receipt",
     "explain": "本例舊稽核日誌可以接受等待取回，因此可評估相應封存類別。圖中時間線表達需求改變，沒有假定系統已經執行任何保存類別的轉換。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "使用頻率可能改變",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "取回等待也需確認",
     "tone": "normal"
    }
   ]
  }
 ],
 "s3-archive-choice": [
  {
   "anchor": 2,
   "title": "取回不是立刻打開檔案",
   "purpose": "「先還原再取回」容易被想成普通下載。以稽核等待的先後順序，顯示保存與讀取之間多了一段準備。",
   "kind": "timeline",
   "caption": "本例可等約一天，才評估標準取回；較慢批次模式需重新核對時限。",
   "nodes": [
    {
     "id": "n1",
     "label": "七年封存",
     "detail": "平時極少讀取",
     "icon": "file",
     "explain": "這批日誌為多年後稽核保存，最近常查資料已另外安排。長期保存的需求先成立，才有理由評估較低保存單價但需要等待的類別。"
    },
    {
     "id": "n2",
     "label": "提出還原",
     "detail": "先申請，尚未取得內容",
     "icon": "clock",
     "explain": "稽核人員先發起還原；Deep Archive不是直接GET就立即取得內容。此時開始的是還原流程，不能把申請成功當成檔案已可讀。"
    },
    {
     "id": "n3",
     "label": "等待取回",
     "detail": "標準通常約12小時",
     "icon": "clock",
     "explain": "課文的標準取回通常約十二小時，批次可能到四十八小時；這是選擇模式時的差別，不把通常時間當作任何情況都不會超過的保證。"
    },
    {
     "id": "n4",
     "label": "讀取並計費",
     "detail": "取回及暫存也列成本",
     "icon": "receipt",
     "explain": "還原後才能按流程取得內容；保存費以外還要估取回、請求與還原暫存等費用。圖中的最後一步不是免費下載或永久改成即時存取。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "稽核需要資料",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "選擇取回模式",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "還原完成後",
     "tone": "normal"
    }
   ]
  }
 ],
 "s3-intelligent-tiers": [
  {
   "anchor": 1,
   "title": "同叫Archive，讀取方式卻不同",
   "purpose": "相近英文名稱容易讓讀者把所有Archive都想成同一種倉庫。兩組入口對照直接分出能立即拿到與必須等待。",
   "kind": "compare",
   "caption": "本例每張照片都要即時讀，所以不要啟用需要還原的可選封存層。",
   "nodes": [
    {
     "id": "n1",
     "label": "即時存取層",
     "detail": "Frequent等3個即時層",
     "icon": "bucket",
     "explain": "這三個層在本課屬於可即時取得內容的範圍。Archive Instant Access雖有Archive字樣，仍不能與必須先還原的可選層混為一談。"
    },
    {
     "id": "n2",
     "label": "可選封存層",
     "detail": "Archive／Deep Archive Access",
     "icon": "clock",
     "explain": "這組可選層需要還原。若照片突然熱門但客人不能等待，啟用它們便改變原本讀取條件，不能只因儲存便宜就先加入。"
    }
   ],
   "links": []
  }
 ],
 "s3-small-object-cost": [
  {
   "anchor": 2,
   "title": "20 KB收據，兩個128 KB規則",
   "purpose": "同一數字分別描述資格與計費大小，純文字很容易把收據想成被擴大。用同一張小檔案分叉比較兩份結果。",
   "kind": "compare",
   "caption": "物件內容仍是20 KB；Intelligent-Tiering的分層門檻與Standard-IA最低計費是兩種規則。",
   "nodes": [
    {
     "id": "n1",
     "label": "實際收據",
     "detail": "檔案內容：20 KB",
     "icon": "receipt",
     "explain": "收據真正保存的內容是二十KB。後面選擇儲存類別，並不會把內容擴寫成一百二十八KB；先固定資料本身與物件數量。"
    },
    {
     "id": "n2",
     "label": "自動分層類別",
     "detail": "Intelligent-Tiering：不降層",
     "icon": "bucket",
     "explain": "這張收據小於一百二十八KB，不符合監控與自動分層資格，留在Frequent Access，也不收這類小物件的監控自動化費。"
    },
    {
     "id": "n3",
     "label": "Standard-IA",
     "detail": "儲存按128 KB最低計",
     "icon": "money",
     "explain": "相同收據若放Standard-IA，儲存帳單採一百二十八KB最低大小；內容仍只有二十KB，另需計保存期間及取回等適用費用。"
    }
   ],
   "links": []
  }
 ],
 "s3-leftovers": [
  {
   "anchor": 2,
   "title": "一般清單之外，還有兩種殘留",
   "purpose": "「看不到完整物件」容易被讀成沒有資料。以完整舊照片與未組裝的影片片段對照，讓兩種清理對象有形狀。",
   "kind": "compare",
   "caption": "非目前版本到期與中止未完成上傳各清一種資料，不能互相取代。",
   "nodes": [
    {
     "id": "n1",
     "label": "舊照片版本",
     "detail": "曾經完整保存的歷史版",
     "icon": "file",
     "explain": "同名照片重傳後，非目前版本仍可能保存並計費。先按復原需要決定哪些版本保留，再用適用的非目前版本到期規則處理。"
    },
    {
     "id": "n2",
     "label": "未完成影片parts",
     "detail": "只有片段，尚未組成物件",
     "icon": "file",
     "explain": "上傳一半的影片可能只留下多個parts，普通物件畫面不一定出現完整影片。它們不是照片的歷史版本，需另安排中止未完成上傳。"
    }
   ],
   "links": []
  }
 ],
 "s3-version-expiration": [
  {
   "anchor": 1,
   "title": "同一份版本清單，到期前後怎麼變",
   "purpose": "「刪除」在一般畫面與版本清單有不同含義。把同一個menu.jpg到期前後並排，顯示資料版本沒有一起消失。",
   "kind": "compare",
   "caption": "目前版本到期會加刪除標記；v1、v2仍在，不能由普通GET看不見推出全部清空。",
   "nodes": [
    {
     "id": "n1",
     "label": "到期以前",
     "detail": "current：v2；舊版：v1",
     "icon": "file",
     "explain": "目前普通讀取拿到v2，v1仍以非目前版本保留。圖中兩份內容屬於同一個key的版本，不是兩個名稱不同的獨立照片。"
    },
    {
     "id": "n2",
     "label": "到期以後",
     "detail": "current：刪除標記；舊版：v2、v1",
     "icon": "receipt",
     "explain": "到期後刪除標記成為目前版本，原v2轉為舊版，v1也仍是舊版。普通讀取看不見照片，並不表示這兩份資料版本已永久刪除。"
    }
   ],
   "links": []
  }
 ],
 "database-cost": [
  {
   "anchor": 0,
   "title": "只找一位客人，為什麼讀了整張表",
   "purpose": "掃描與針對性查詢缺少空間感。用需要一筆卻搬整本名冊，對照沿正確路徑取需要內容的工作量。",
   "kind": "compare",
   "caption": "先減少無關資料與重複工作，再判斷是否真的需要更大容量。",
   "nodes": [
    {
     "id": "n1",
     "label": "掃描後過濾",
     "detail": "先讀整表，再留下目標客人",
     "icon": "database",
     "explain": "程式只需要一位客人的訂單，卻先掃全部資料再過濾，讓不相關內容也參與讀取。把主機加大可能只是更快執行相同浪費。"
    },
    {
     "id": "n2",
     "label": "依需求找資料",
     "detail": "檢查索引或合適的鍵與Query",
     "icon": "chart",
     "explain": "關聯式資料庫先檢查查詢計畫與適合索引；DynamoDB先看鍵設計及Query路徑。改善要符合存取模式，也要計入索引的寫入維護成本。"
    }
   ],
   "links": []
  }
 ],
 "aurora-io-cost-model": [
  {
   "anchor": 1,
   "title": "兩張帳單要換整套費率",
   "purpose": "「不另收I/O費」容易讓人只刪掉一欄。兩份帳單並排，提醒運算與儲存也必須套各自費率。",
   "kind": "compare",
   "caption": "比較A+B+C與D+E；不能先假定兩邊運算、儲存相同，再只扣掉I/O。",
   "nodes": [
    {
     "id": "n1",
     "label": "Standard模式",
     "detail": "A運算＋B儲存＋C I/O",
     "icon": "receipt",
     "explain": "這一列把相同工作量需要的運算、儲存與I/O費用一起估算。它是整月總額的一部分比較，不是只取其中最低的一種單價。"
    },
    {
     "id": "n2",
     "label": "I/O-Optimized",
     "detail": "D運算＋E儲存",
     "icon": "receipt",
     "explain": "另一模式不另計相應讀寫I/O，但運算與儲存有自己的費率。D、E不能先視為A、B相等，必須用同一負載重新計算。"
    }
   ],
   "links": []
  }
 ],
 "rds-stop-window": [
  {
   "anchor": 2,
   "title": "停止是暫停運算，不是永遠零費用",
   "purpose": "停止後仍保留資料及七天自動啟動較難同時想像。時間軸把週末暫停與長期不用的界線放在一起。",
   "kind": "timeline",
   "caption": "RDS DB instance最多連續停七天；停止期間仍計適用儲存與備份費。",
   "nodes": [
    {
     "id": "n1",
     "label": "星期五停止",
     "detail": "先備份，確認沒有必要工作",
     "icon": "database",
     "explain": "本例只針對支援停止的測試DB instance。先確認沒有必要連線與工作並保存必要備份，不把正式服務當成可隨時無感關閉。"
    },
    {
     "id": "n2",
     "label": "停止期間",
     "detail": "運算時數暫停，資料仍保留",
     "icon": "money",
     "explain": "DB instance hours暫停計費，但配置儲存、適用IOPS與備份等仍存在。省掉的是某些運算用量，不是整張帳單歸零。"
    },
    {
     "id": "n3",
     "label": "最遲七天後",
     "detail": "服務會自動啟動",
     "icon": "clock",
     "explain": "若不自行提早啟動，連續停止七天後會自動啟動。若測試課停辦一個月，需另外評估排程或經驗證的快照刪除還原方案。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "維持停止狀態",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "達到連續停止上限",
     "tone": "normal"
    }
   ]
  }
 ],
 "dynamodb-capacity-plan": [
  {
   "anchor": 1,
   "title": "容量是在範圍內調整，不是無邊界旋鈕",
   "purpose": "最小、最大與目標使用率是三個不同控制點。以同一容量調整範圍分成基準、調整與邊界三張卡。",
   "kind": "compare",
   "caption": "Auto Scaling有偵測與生效時間；上下限要容納需求，不能把最小值壓到不符突發負載。",
   "nodes": [
    {
     "id": "n1",
     "label": "最小容量",
     "detail": "平時也保留的合理基準",
     "icon": "database",
     "explain": "最小容量是可下降的下界，應依實際用量與突然需求安排。它不是把數字設得越低越省而不需考慮等待或節流。"
    },
    {
     "id": "n2",
     "label": "目標追蹤",
     "detail": "依消耗比例偵測與調整",
     "icon": "chart",
     "explain": "目標使用率協助判斷需要調整到哪裡，但觀察與生效需要時間。負載突然變大時，不能將自動調整想成瞬間增加全部容量。"
    },
    {
     "id": "n3",
     "label": "最大容量",
     "detail": "可上調的上界",
     "icon": "shield",
     "explain": "最大值限制可調整範圍，要能容納預期高峰。即使有Auto Scaling，索引容量、熱門鍵及配額仍需另外核對與監控。"
    }
   ],
   "links": []
  }
 ],
 "dynamodb-scheduled-capacity": [
  {
   "anchor": 2,
   "title": "知道十二點會忙，就先備好容量",
   "purpose": "被動指標追蹤與事先排程容易混為一種自動化。午餐時間軸把準備、尖峰微調與收尾拆清楚。",
   "kind": "timeline",
   "caption": "主表與GSI都要提早準備；排程時間不等於容量已瞬間生效。",
   "nodes": [
    {
     "id": "n1",
     "label": "11:40先安排",
     "detail": "提高最小值並留足上限",
     "icon": "clock",
     "explain": "團隊已知道十二點促銷，先提高適用表與索引的容量界線，並檢查實際是否到位。這是使用已知時間，而不是等節流後才開始。"
    },
    {
     "id": "n2",
     "label": "12:00尖峰",
     "detail": "目標追蹤處理預估誤差",
     "icon": "chart",
     "explain": "午餐流量到來後，動態政策在可用範圍內處理比預估更多或更少的工作。排程與指標追蹤可以配合，不是只能選一個。"
    },
    {
     "id": "n3",
     "label": "尖峰結束",
     "detail": "確認尾端工作再降回",
     "icon": "database",
     "explain": "先看流量及待處理寫入是否回落，再調回離峰範圍。主表放大但GSI仍不足可能反壓寫入，因此兩邊都放進同一計畫。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "確認容量已到位",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "觀察流量及尾端工作",
     "tone": "normal"
    }
   ]
  }
 ],
 "network-cost": [
  {
   "anchor": 1,
   "title": "同一份S3資料，可以走不同計費路徑",
   "purpose": "網路費用缺少「走哪條路」的畫面。並列兩條已教的私有讀取路徑，把NAT處理與服務端點分開。",
   "kind": "compare",
   "caption": "同區大量S3讀取可比較gateway endpoint；改變路徑後仍要核對資料授權。",
   "nodes": [
    {
     "id": "n1",
     "label": "經NAT讀S3",
     "detail": "私有主機 → NAT → S3",
     "icon": "network",
     "explain": "應用若沿NAT路徑存取，除服務本身費用外也要核對NAT相關處理成本。資料在AWS裡不表示每條傳輸路徑都同樣計費。"
    },
    {
     "id": "n2",
     "label": "經S3閘道端點",
     "detail": "私有主機 → gateway endpoint → S3",
     "icon": "bucket",
     "explain": "對本例同區大量S3存取，可比較合適的gateway endpoint與路由，減少相應NAT路徑。網路可達並未取代IAM與資源存取授權。"
    }
   ],
   "links": []
  }
 ],
 "finops": [
  {
   "anchor": 1,
   "title": "預算警示後，還需要有人接手",
   "purpose": "「通知」容易被想像成自動煞車。把費用資料、通知與負責人的後續動作分成三個有交接的節點。",
   "kind": "flow",
   "caption": "10美元提醒是通知條件，不是各服務到門檻就瞬間停止的硬上限。",
   "nodes": [
    {
     "id": "n1",
     "label": "費用持續累積",
     "detail": "Budgets追蹤實際或預測成本",
     "icon": "money",
     "explain": "預算依設定追蹤費用，資料及通知可能延遲。看到十美元提醒值，不表示資源被放上即時停止的開關，仍要控制實驗規模。"
    },
    {
     "id": "n2",
     "label": "發出警示",
     "detail": "通知指定負責人",
     "icon": "receipt",
     "explain": "通知把成本變化交給事先安排的對象。團隊要明確知道誰收到、何時檢查，而不是把建立通知當成全部成本控制工作。"
    },
    {
     "id": "n3",
     "label": "採取核准動作",
     "detail": "檢查、清理或受控自動化",
     "icon": "worker",
     "explain": "後續動作需要自己規劃，若使用自動化也要有支援範圍、權限與避免誤關正式資源的安排。提醒本身不會完成這些步驟。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "符合通知條件",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "由人員或已設計流程處理",
     "tone": "normal"
    }
   ]
  }
 ],
 "instance-scheduler-solution": [
  {
   "anchor": 1,
   "title": "標籤是名單，不是會自己動的開關",
   "purpose": "標籤與自動啟停之間缺少執行者的想像。圖中把排程觸發、讀取設定與資源動作連成具體流程。",
   "kind": "flow",
   "caption": "先部署與設定方案，再依排程及標籤對合適測試資源執行啟停。",
   "nodes": [
    {
     "id": "n1",
     "label": "EventBridge排程",
     "detail": "定期觸發已部署的流程",
     "icon": "clock",
     "explain": "官方方案包含按時間觸發的元件。標籤不會自行計時，必須先部署方案並設定適當時區、工作日與例外，才有持續執行的起點。"
    },
    {
     "id": "n2",
     "label": "Lambda判斷",
     "detail": "讀DynamoDB排程與目標",
     "icon": "function",
     "explain": "部署的函式讀取排程定義及目標資料，判斷目前應啟動或停止。這一段才把時間、設定與標籤連起來，不是貼標籤就會執行。"
    },
    {
     "id": "n3",
     "label": "測試資源啟停",
     "detail": "只操作核准且支援的資源",
     "icon": "server",
     "explain": "先前選出的合適測試資源才進入名單。正式入口不能因相同標籤被隨意關閉，儲存等持續費用也不會隨停止全部消失。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "觸發函式",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "依排程與目標條件操作",
     "tone": "normal"
    }
   ]
  }
 ],
 "compute-optimizer-evidence": [
  {
   "anchor": 2,
   "title": "建議要經測試，才成為可採用配置",
   "purpose": "工具建議容易被讀成已證明省錢。把觀測資料、候選與同一工作負載測試分開，顯示中間缺的驗證。",
   "kind": "flow",
   "caption": "先取得代表性資料，再測試候選；預估節省不是調整後帳單的保證。",
   "nodes": [
    {
     "id": "n1",
     "label": "代表性觀測",
     "detail": "不只看三十分鐘低CPU",
     "icon": "chart",
     "explain": "剛建立的報表主機可能還沒跑月結，短時間低CPU看不到完整需求。先補足支援資源需要的觀測與必要指標，才有判斷依據。"
    },
    {
     "id": "n2",
     "label": "配置候選",
     "detail": "檢查相容性、尖峰及折扣",
     "icon": "server",
     "explain": "Compute Optimizer提出的是可比較候選。還要核對應用相容性、記憶體或I/O壓力、延遲與既有承諾條件，不能只抄較小型號。"
    },
    {
     "id": "n3",
     "label": "同批報表驗證",
     "detail": "結果、時間、餘裕與費用",
     "icon": "receipt",
     "explain": "在可回復環境讓候選執行相同報表，確認結果正確、完成時間及尖峰餘裕，再安排部署與成本追蹤。工具預估不是實測結果。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "產生最佳化建議",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "在受控環境比較",
     "tone": "normal"
    }
   ]
  }
 ],
 "organizations": [
  {
   "anchor": 0,
   "title": "把正式、測試與日誌分成不同房間",
   "purpose": "帳號邊界容易被誤當登入名稱。用組織內彼此分開的資源空間，讓隔離與集中付款能同時被看見。",
   "kind": "hierarchy",
   "caption": "集中看帳單，不等於各帳號已取得彼此資料的權限。",
   "nodes": [
    {
     "id": "n1",
     "label": "公司多帳號安排",
     "detail": "統一看費用，資源邊界仍分開",
     "icon": "cloud",
     "explain": "公司可以集中看各帳號費用，但帳號仍是資源、權限及許多配額的重要邊界。圖中的外框不是把各帳號資料合成可任意讀取的資料夾。"
    },
    {
     "id": "n2",
     "label": "正式帳號",
     "detail": "正式訂單與服務資源",
     "icon": "database",
     "explain": "正式環境放在自己的帳號，減少測試操作直接影響正式資料與資源的機會。仍需在該帳號安排應用、資料及人員權限。",
     "parent": "n1"
    },
    {
     "id": "n3",
     "label": "測試帳號",
     "detail": "實驗資源與自己的用量",
     "icon": "server",
     "explain": "測試程式啟動大量主機時，主要在測試帳號的用量與配額範圍處理，不應把正式環境資源直接當成同一份實驗空間。",
     "parent": "n1"
    },
    {
     "id": "n4",
     "label": "日誌帳號",
     "detail": "另外保存稽核證據",
     "icon": "file",
     "explain": "將稽核日誌放在另一帳號，可降低一般工作負載管理員直接改動證據的能力。保存位置分開後，仍需規劃適用授權與保留。",
     "parent": "n1"
    }
   ],
   "links": []
  }
 ],
 "scp-account-boundary": [
  {
   "anchor": 2,
   "title": "三種帳號身分，先找SCP作用邊界",
   "purpose": "管理帳號與委派管理員名稱相似，讀者很難憑文字記住例外。以三張帳號卡明確比較同一禁止動作。",
   "kind": "compare",
   "caption": "委派服務管理工作不會把成員帳號變成Organizations管理帳號。",
   "nodes": [
    {
     "id": "n1",
     "label": "受控成員帳號",
     "detail": "適用SCP可限制角色與root",
     "icon": "shield",
     "explain": "成員帳號即使身分政策有廣泛管理Allow，也不能靠它越過適用SCP拒絕。本課同時提醒服務連結角色等明列例外需另核對。"
    },
    {
     "id": "n2",
     "label": "組織管理帳號",
     "detail": "其中IAM身分不受SCP限制",
     "icon": "key",
     "explain": "SCP不限制管理帳號中的IAM使用者與角色。這不是不需安全保護，而是要另外安排最小權限、登入保護與審計，不能誤認SCP已代做。"
    },
    {
     "id": "n3",
     "label": "委派管理員帳號",
     "detail": "仍是成員，仍受適用SCP",
     "icon": "worker",
     "explain": "委派讓成員帳號統籌某服務，不改變它在Organizations中的成員地位。其普通角色呼叫被禁動作時，不能用已委派作為繞過理由。"
    }
   ],
   "links": []
  }
 ],
 "workforce-federation": [
  {
   "anchor": 2,
   "title": "公司先認人，AWS再分配工作範圍",
   "purpose": "驗證身分與授予帳號權限常被壓成一句登入。以員工拿到測試唯讀角色的路線，畫出兩段不同交接。",
   "kind": "flow",
   "caption": "公司登入成功後，仍需帳號與權限集分派；本例不會取得正式帳號管理權。",
   "nodes": [
    {
     "id": "n1",
     "label": "公司IdP",
     "detail": "確認這位員工的身分",
     "icon": "person",
     "explain": "外部身分來源先確認員工是誰，登入交接可使用已設定的SAML整合。這一步不會直接把公司管理員權限搬進所有AWS帳號。"
    },
    {
     "id": "n2",
     "label": "集中登入入口",
     "detail": "Identity Center核對權限分派",
     "icon": "key",
     "explain": "管理者把報表群組分派到測試帳號及唯讀權限集。登入來源與工作範圍分開配置，群組同步也不能只以一次登入成功當成已驗證。"
    },
    {
     "id": "n3",
     "label": "測試唯讀角色",
     "detail": "只操作被分派的範圍",
     "icon": "shield",
     "explain": "員工選擇測試帳號的對應角色後，在被授予範圍查看資源。同一人可登入多個帳號，也不代表那些帳號權限會自動合併。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "SAML身分交接",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "使用已分派的帳號權限",
     "tone": "normal"
    }
   ]
  }
 ],
 "backup-organization-policy": [
  {
   "anchor": 2,
   "title": "中央有政策，當地仍要做出備份",
   "purpose": "一份政策不會憑空變成復原點。把中央計畫、當地執行條件與安全帳號副本分開，對應三項可查驗成果。",
   "kind": "flow",
   "caption": "本地備份成功與跨帳號複製成功是不同工作，兩項都要驗證。",
   "nodes": [
    {
     "id": "n1",
     "label": "中央備份政策",
     "detail": "每日排程與30天保存要求",
     "icon": "workflow",
     "explain": "中央先啟用必要組織整合並套用備份政策，成員帳號得到有效計畫。這是在統一要求，不代表選取的資源已立刻產生可還原資料。"
    },
    {
     "id": "n2",
     "label": "成員帳號執行",
     "detail": "vault、角色與資源選取就緒",
     "icon": "gear",
     "explain": "成員帳號必須備有引用的vault、角色及適用資源條件。缺少其中一項，不能只靠中央政策文字就讓備份工作成功。"
    },
    {
     "id": "n3",
     "label": "本地復原點",
     "detail": "查工作結果並測試還原",
     "icon": "database",
     "explain": "排程工作成功後再核對復原點與還原能力。中央監控能幫忙彙整，但看到畫面有計畫不能取代逐項確認實際成果。"
    },
    {
     "id": "n4",
     "label": "安全帳號副本",
     "detail": "另核對copy、政策與加密",
     "icon": "lock",
     "explain": "若需要另外保存，還要有copy action、目的vault政策與受支援資源及金鑰條件。本地成功不會自動完成這條跨帳號交接。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "形成有效計畫",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "執行並驗證",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "符合複製條件後另行複製",
     "tone": "normal"
    }
   ]
  }
 ],
 "cognito-pools": [
  {
   "anchor": 1,
   "title": "登入token與AWS臨時憑證是兩把不同鑰匙",
   "purpose": "兩種pool都與身分有關，名稱無法形成用途畫面。用呼叫後端與直接上傳兩個入口，對比持有的憑證。",
   "kind": "compare",
   "caption": "只呼叫後端API，不代表必須再加identity pool；直接用AWS資源才另核對該路徑。",
   "nodes": [
    {
     "id": "n1",
     "label": "User pool",
     "detail": "客人登入 → 應用token",
     "icon": "person",
     "explain": "User pool處理應用客人登入並可核發token。API驗證它後仍需核對訂單歸屬，不能把登入有效視為可以讀所有客人的資料。"
    },
    {
     "id": "n2",
     "label": "Identity pool",
     "detail": "整合身分 → IAM臨時憑證",
     "icon": "key",
     "explain": "App若要在受限範圍直接呼叫AWS服務，可評估identity pool交換角色臨時憑證。這和單純把登入token交給後端API不同。"
    }
   ],
   "links": []
  }
 ],
 "iam-cross-account": [
  {
   "anchor": 2,
   "title": "先換身分，再以目標角色讀資料",
   "purpose": "跨帳號常被想像成把兩份權限加在一起。沿來源角色、STS憑證交接與目標資料三站，標出真正使用的身分。",
   "kind": "flow",
   "caption": "取得B角色憑證後使用B角色的資料權限，不會附帶合併A原有全部權限。",
   "nodes": [
    {
     "id": "n1",
     "label": "A應用角色",
     "detail": "來源允許對B角色AssumeRole",
     "icon": "person",
     "explain": "A的程式平常使用來源角色；需要報表時才向指定B角色提出交接。來源Allow是提出要求的條件，不是直接把B所有資料授給A。"
    },
    {
     "id": "n2",
     "label": "STS交付B憑證",
     "detail": "B信任A，回傳B角色臨時憑證",
     "icon": "key",
     "explain": "B角色信任政策也須允許本例來源；兩邊交接條件成立後，STS按條件提供B角色憑證。信任回答誰能取得角色，不是資料讀取Allow。"
    },
    {
     "id": "n3",
     "label": "讀B的reports/",
     "detail": "按B角色的資料授權判斷",
     "icon": "file",
     "explain": "程式用B角色臨時憑證讀指定報表，B角色自己還要有讀取權。A原本是管理員，也不會因此使取得的B角色變成全能管理員。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "來源授權＋目標信任",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "以目標憑證發送讀取要求",
     "tone": "normal"
    }
   ]
  }
 ],
 "kms-cross-account-control": [
  {
   "anchor": 1,
   "title": "讀一份加密報表，要過兩類授權",
   "purpose": "S3權限與解密權限常被當成同一扇門。並列物件與金鑰兩把鎖，顯示讀得到位置不等於能解開內容。",
   "kind": "compare",
   "caption": "本例由A的資源／金鑰政策及B的身分政策共同完成跨帳號安排，其他適用限制仍需核對。",
   "nodes": [
    {
     "id": "n1",
     "label": "S3物件存取",
     "detail": "B角色獲准讀指定報表",
     "icon": "file",
     "explain": "桶與適用身分政策先允許本例的報表讀取範圍。GetObject回答能否讀這個物件，但不能代替對保護該內容的KMS金鑰使用授權。"
    },
    {
     "id": "n2",
     "label": "KMS金鑰使用",
     "detail": "A金鑰政策與B身分政策配合",
     "icon": "key",
     "explain": "跨帳號解密要按本例金鑰政策與身分政策兩邊允許的方式安排。採customer managed key讓公司可控制此需求，不能任意改AWS managed key政策。"
    }
   ],
   "links": []
  }
 ],
 "kms-multi-region-boundary": [
  {
   "anchor": 1,
   "title": "兩區共用材料，卻各有自己的門禁",
   "purpose": "「相關金鑰」容易被想成全球同一個設定。把兩個區域金鑰並排，明示共用部分與各自獨立部分。",
   "kind": "compare",
   "caption": "同一組材料不等於同一份政策；B區的授權、ARN與狀態要分別確認。",
   "nodes": [
    {
     "id": "n1",
     "label": "區域A金鑰",
     "detail": "共用ID／材料；A的政策與狀態",
     "icon": "key",
     "explain": "A的相關金鑰與B共用金鑰ID和材料，但A區ARN、政策、alias及狀態仍屬A區資源。A能解密不能直接推論B的角色也已獲准。"
    },
    {
     "id": "n2",
     "label": "區域B金鑰",
     "detail": "共用ID／材料；B的政策與狀態",
     "icon": "key",
     "explain": "團隊先在B建立相關副本，再核對B自己的使用權限與Enabled狀態。共同材料解決密碼材料關係，不會自動同步每區的全部設定。"
    }
   ],
   "links": []
  }
 ],
 "iam-passrole-chain": [
  {
   "anchor": 2,
   "title": "部署時交角色，執行時才用角色",
   "purpose": "PassRole與AssumeRole都是角色操作，讀者難以想像誰在拿憑證。用部署者、服務、資料三站分出責任。",
   "kind": "flow",
   "caption": "PassRole允許配置指定角色；服務能承擔與角色能讀資料，還是另兩項條件。",
   "nodes": [
    {
     "id": "n1",
     "label": "部署者",
     "detail": "可建立Lambda並交付指定角色",
     "icon": "person",
     "explain": "開發者除了部署操作，還需獲准把receipt-reader交給Lambda。這是服務配置中的指定權，不表示開發者本人取得此角色的臨時憑證。"
    },
    {
     "id": "n2",
     "label": "Lambda執行",
     "detail": "角色信任Lambda服務",
     "icon": "function",
     "explain": "執行角色的信任政策需允許Lambda承擔。部署者有PassRole不會自動改好這份信任，服務被信任也不等於每位部署者都能任選角色。"
    },
    {
     "id": "n3",
     "label": "讀receipts/",
     "detail": "依執行角色的S3權限",
     "icon": "receipt",
     "explain": "函式真正執行後用角色的工作權限讀收據。信任服務只解決身分交付，角色仍需適用的GetObject授權，才完成這筆資料工作。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "PassRole：准許指定角色",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "服務承擔後執行資料操作",
     "tone": "normal"
    }
   ]
  }
 ],
 "ec2-role-credential-choice": [
  {
   "anchor": 1,
   "title": "同一主機，請求可選不同憑證",
   "purpose": "附加角色與程式選憑證容易混為主機同時擁有多角色。兩個SDK client並排，標出各自送出的身分。",
   "kind": "compare",
   "caption": "一個profile仍只有一個角色；AssumeRole回傳另一組憑證，不是把兩角色權限合併。",
   "nodes": [
    {
     "id": "n1",
     "label": "原SDK client",
     "detail": "用report-app的profile憑證",
     "icon": "server",
     "explain": "EC2原先關聯report-app的instance profile，預設憑證鏈取到該角色臨時憑證。保留這個client不表示profile裡又自動加入第二個角色。"
    },
    {
     "id": "n2",
     "label": "合作報表client",
     "detail": "改用STS回傳的partner-reader憑證",
     "icon": "key",
     "explain": "程式在來源授權與目標信任成立後，取得另一組臨時憑證交給對應client。該client發出的要求依目標角色與適用政策判斷，不合併來源所有權限。"
    }
   ],
   "links": []
  }
 ],
 "iam-delegation": [
  {
   "anchor": 0,
   "title": "真正可做的工作，在兩個範圍交集",
   "purpose": "「boundary是上限」缺少集合的想像。直接把可讀可刪、只可讀與最後結果並列，讓限制怎麼生效一眼可對照。",
   "kind": "compare",
   "caption": "這裡只比較本課身分政策授權：boundary本身不授權，兩邊都允許才可做。",
   "nodes": [
    {
     "id": "n1",
     "label": "角色身分政策",
     "detail": "允許：讀取、刪除",
     "icon": "key",
     "explain": "身分政策列出本例角色被允許的工作；但它不是唯一條件。看到允許刪除，還要核對本例套用的permissions boundary是否也容許該動作。"
    },
    {
     "id": "n2",
     "label": "Boundary上限",
     "detail": "最多允許：讀取",
     "icon": "shield",
     "explain": "本例邊界只容許讀取，所以把身分政策能給的範圍收窄。它本身不主動給工作權限，只有邊界而沒有實際授權，仍不能據此讀取。"
    },
    {
     "id": "n3",
     "label": "有效交集",
     "detail": "讀取可用；刪除超出上限",
     "icon": "file",
     "explain": "兩個範圍在本例只重疊於讀取，因此刪除不能靠身分政策的Allow越過邊界。圖示只處理這段已教的交集，不取代其他適用政策核對。"
    }
   ],
   "links": []
  }
 ],
 "access-analyzer-boundary": [
  {
   "anchor": 2,
   "title": "三個問題，要找三類證據",
   "purpose": "finding、活動紀錄與設定狀態都像報告。以合作商報表情境的三句問題，幫讀者把證據用途分開。",
   "kind": "compare",
   "caption": "外部存取finding指出政策可能授權，不會自行證明某人在某時下載了報表。",
   "nodes": [
    {
     "id": "n1",
     "label": "合作商可不可以讀？",
     "detail": "Access Analyzer：政策授權邊界",
     "icon": "shield",
     "explain": "外部存取分析檢查支援資源政策是否授權信任範圍外的主體。找到可能存取安排，並不等於已有人使用這項能力，也不代表分享一定未經批准。"
    },
    {
     "id": "n2",
     "label": "誰實際讀過？",
     "detail": "CloudTrail：已收集的適用事件",
     "icon": "file",
     "explain": "如果要找下載身分與時間，就要查已配置並收集的相應S3資料事件。不能從Access Analyzer的finding自行編造過去的實際活動。"
    },
    {
     "id": "n3",
     "label": "設定如何變過？",
     "detail": "Config：資源設定與規則狀態",
     "icon": "gear",
     "explain": "Config回答資源設定與適用規則的追蹤問題。修正政策、驗證存取與處理finding是不同工作，封存finding不會因此撤銷桶政策。"
    }
   ],
   "links": []
  }
 ],
 "security-services": [
  {
   "anchor": 1,
   "title": "先分清你在找哪一類問題",
   "purpose": "多個安全服務名字密集，只有文字容易全記成警示工具。用活動、套件、檔案內容三個具體觀察物並排。",
   "kind": "compare",
   "caption": "先說清楚觀察對象，再選工具；產生發現結果不等於已完成修復。",
   "nodes": [
    {
     "id": "n1",
     "label": "可疑活動",
     "detail": "GuardDuty：活動訊號與威脅線索",
     "icon": "network",
     "explain": "某個帳號正在進行不尋常操作，重點是活動及其可能威脅。這和主機某個套件版本存在已知漏洞不同，不能只因都產生警示就視為同一工具。"
    },
    {
     "id": "n2",
     "label": "已知弱點",
     "detail": "Inspector：支援工作負載的弱點",
     "icon": "server",
     "explain": "某台主機或映像的套件弱點，是檢查支援工作負載的漏洞問題。找到弱點之後仍需安排驗證、修補與後續測試，報告不是自動修復。"
    },
    {
     "id": "n3",
     "label": "敏感檔案內容",
     "detail": "Macie：S3敏感資料發現分類",
     "icon": "file",
     "explain": "Macie針對S3保存內容發現與分類敏感資料，觀察物不同於傳入HTTP請求或主機套件。分類結果提供需要處理的發現，不等於資料已修改或問題已自動修復。"
    }
   ],
   "links": []
  }
 ],
 "guardduty-source-finding": [
  {
   "anchor": 2,
   "title": "線索變成發現，再交給回應流程",
   "purpose": "啟用偵測常被想像成自動阻擋。讓不同輸入線索經分析變成finding，再接到人員核對，顯示工作的交接。",
   "kind": "flow",
   "caption": "基礎分析可用獨立來源串流；自行保存稽核日誌與修復活動仍要另安排。",
   "nodes": [
    {
     "id": "n1",
     "label": "基礎來源串流",
     "detail": "API、網路與DNS線索",
     "icon": "network",
     "explain": "GuardDuty可從基礎獨立串流分析支援的管理API、VPC流量及DNS等線索。這不要求先替它另建每份日誌，也不是保存所有封包內容。"
    },
    {
     "id": "n2",
     "label": "威脅分析",
     "detail": "檢查活動是否異常",
     "icon": "shield",
     "explain": "不同訊號提供不同線索，服務依其分析能力整理可疑活動。單一連線不等於已證明入侵，不能跳過情境核對而直接下結論。"
    },
    {
     "id": "n3",
     "label": "Finding",
     "detail": "資源、類型、時間與嚴重性",
     "icon": "receipt",
     "explain": "Finding把需要注意的活動整理成可處理資訊。它是一個待評估發現，而不是該主機已隔離或風險已消除的成功回報。"
    },
    {
     "id": "n4",
     "label": "受控回應",
     "detail": "核對、調查、限制影響與修復",
     "icon": "worker",
     "explain": "值班人員確認是否批准測試，按程序保留證據及處理原因。若要自動化，需事先配置並測試事件篩選與權限，避免誤傷正常服務。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "提供分析線索",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "整理可疑活動",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "交付判斷與處理",
     "tone": "normal"
    }
   ]
  }
 ],
 "securityhub-findings": [
  {
   "anchor": 2,
   "title": "集中清單，不等於集中自動修好",
   "purpose": "跨帳號彙整與修復經常被一句安全平台混在一起。用發現卡片匯入工作台再派給負責人的順序建立畫面。",
   "kind": "flow",
   "caption": "標準控制、偵測發現與實際修復分工不同；調整finding狀態不會直接改好資源。",
   "nodes": [
    {
     "id": "n1",
     "label": "已整合的發現",
     "detail": "控制檢查與偵測服務結果",
     "icon": "receipt",
     "explain": "各帳號、區域與產品需先配置整合範圍。沒加入某個帳號，不表示該帳號沒有問題；來源工具的分析工作也沒有被工作台全部取代。"
    },
    {
     "id": "n2",
     "label": "集中工作台",
     "detail": "Security Hub CSPM統整",
     "icon": "workflow",
     "explain": "工作台將支援的控制與安全發現整理到可比較視角。安全標準提供檢查項，通過也不能直接視為所有法規認證或應用沒有漏洞。"
    },
    {
     "id": "n3",
     "label": "排優先順序",
     "detail": "嚴重性、資源與負責人",
     "icon": "worker",
     "explain": "團隊把正式資料庫等重要資源的高風險問題優先交付處理。派工是管理工作的一段，不表示目前資源設定已經真的改變。"
    },
    {
     "id": "n4",
     "label": "修正後驗證",
     "detail": "核對資源與後續檢查",
     "icon": "shield",
     "explain": "具有適用權限的流程或人員執行修正，再確認資源狀態與檢查結果。只把工單標成處理中，不能宣告系統已修復。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "按配置接收與彙整",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "依影響安排處理",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "執行變更並確認結果",
     "tone": "normal"
    }
   ]
  }
 ],
 "waf-geo-rules": [
  {
   "anchor": 2,
   "title": "允許地區的請求，內容仍可能有害",
   "purpose": "地理條件通過容易被誤當整筆請求安全。沿同一筆允許國家但帶惡意輸入的要求，畫出位置與內容的兩層檢查。",
   "kind": "flow",
   "caption": "這是本例設計的檢查順序；過早終止Allow可能跳過後續內容規則。",
   "nodes": [
    {
     "id": "n1",
     "label": "來源IP",
     "detail": "先確認採用哪個位址",
     "icon": "network",
     "explain": "位置判定依使用的IP，不依頁面語言或使用者填寫國籍。若前面有可信代理，要先確認forwarded IP設計，不要把所有客人都看成代理所在地。"
    },
    {
     "id": "n2",
     "label": "地理標籤",
     "detail": "國家及支援的區域資訊",
     "icon": "globe",
     "explain": "Geo match可產生地理標籤；本例需要行政區條件時，再以後續label match使用相應區域標籤，不能把州代碼直接當國家代碼。"
    },
    {
     "id": "n3",
     "label": "內容檢查",
     "detail": "仍檢查SQL注入等規則",
     "icon": "shield",
     "explain": "通過位置條件的要求，仍可能帶有SQL注入或XSS。需要相應內容規則及合適規則群，不能由允許國家推論請求內容安全。"
    },
    {
     "id": "n4",
     "label": "合適規則動作",
     "detail": "測試順序與允許／阻擋結果",
     "icon": "gear",
     "explain": "本例以測試要求確認規則沒有過早終止，正常內容與惡意內容得到合乎設計的處理。規則順序與動作一起決定是否能繼續檢查。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "依IP產生地理資訊",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "位置符合後仍繼續",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "依完整規則安排處理",
     "tone": "normal"
    }
   ]
  }
 ],
 "shield-response": [
  {
   "anchor": 2,
   "title": "事件支援與費用保護，需要事前準備",
   "purpose": "Advanced的權益容易被想成出事就全額自動賠付。以事前配置到事件後申請的時間順序，顯示每段不同責任。",
   "kind": "timeline",
   "caption": "只有符合資格、資源與事件等條件的範圍才適用，不能把訂閱當成所有帳單免費。",
   "nodes": [
    {
     "id": "n1",
     "label": "事前配置",
     "detail": "核對訂閱、資源與支援條件",
     "icon": "shield",
     "explain": "先確認支援且受保護的資源、相關設定與聯絡程序。重要入口需事前準備，不應等攻擊發生後才猜Advanced會自動涵蓋所有項目。"
    },
    {
     "id": "n2",
     "label": "事件發生",
     "detail": "分辨攻擊層次與影響",
     "icon": "network",
     "explain": "公開入口遇到異常大量流量，先看DDoS影響與受保護資源。單一資料庫密碼外洩是另一種問題，不能只因同屬安全事件就混用服務。"
    },
    {
     "id": "n3",
     "label": "依程序求助",
     "detail": "核對SRT等事件支援資格",
     "icon": "worker",
     "explain": "SRT等事件協助有實際聯繫與支援資格安排。訂閱Advanced不代表所有形式的主動協助都無需設定，需依當期條件確認。"
    },
    {
     "id": "n4",
     "label": "核對相關費用",
     "detail": "保留證據，依條件申請",
     "icon": "receipt",
     "explain": "符合條件的DDoS擴展費用保護通常依政策申請額度抵用。正常業務增加或未受保護資源，不因這張訂閱就自動免除費用。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "事件出現時",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "按適用程序聯繫",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "整理事件與費用證據",
     "tone": "normal"
    }
   ]
  }
 ],
 "session-manager-path": [
  {
   "anchor": 2,
   "title": "不開公網SSH，仍有三項前提",
   "purpose": "「沒有22埠」常讓讀者想成完全不需網路。並列操作人員、受管主機與HTTPS通道，建立兩端授權及路徑的畫面。",
   "kind": "compare",
   "caption": "人員權限、主機角色與服務通道不能互相代替；本例無須為此開公網22埠。",
   "nodes": [
    {
     "id": "n1",
     "label": "人員端",
     "detail": "獲准開始指定主機工作階段",
     "icon": "person",
     "explain": "營運人員須有適當權限開始指定工作階段。人的登入與授權不會替EC2安裝Agent或打通服務路徑，這一端只管誰能進行維護。"
    },
    {
     "id": "n2",
     "label": "主機端",
     "detail": "SSM Agent運作＋主機角色",
     "icon": "server",
     "explain": "EC2上需要可用的SSM Agent與適當主機角色。只刪除公網SSH規則，沒有補好主機管理程式與身分，不能算完整維護通道。"
    },
    {
     "id": "n3",
     "label": "服務通道",
     "detail": "必要端點、DNS與HTTPS連線",
     "icon": "network",
     "explain": "Agent需要到必要Systems Manager服務的連線，可依環境採NAT或所需介面端點。沒有公網SSH入口，不表示主機可以沒有網路與HTTPS規則。"
    }
   ],
   "links": []
  }
 ],
 "hybrid": [
  {
   "anchor": 1,
   "title": "兩段Peering，不等於可借道第三站",
   "purpose": "轉遞性只靠一句否定很難記。以A-B、B-C兩段已成立關係，對照A想借B到C的不同要求。",
   "kind": "compare",
   "caption": "A↔B及B↔C各自連通，不會自動讓A經B轉遞至C。",
   "nodes": [
    {
     "id": "n1",
     "label": "已建立A↔B",
     "detail": "一段直接Peering關係",
     "icon": "network",
     "explain": "A與B已建立直接VPC peering，這是在核對這兩個網路間的路徑。這項連線本身沒有授予B作為其他VPC的通用轉遞中樞。"
    },
    {
     "id": "n2",
     "label": "已建立B↔C",
     "detail": "另一段直接Peering關係",
     "icon": "network",
     "explain": "B與C另有直接peering，只證明這第二對網路有相應連線。把兩段連線放在同一張紙上，不能增加服務未提供的轉遞能力。"
    },
    {
     "id": "n3",
     "label": "未自動成立A→C",
     "detail": "不能把B當成借道路由",
     "icon": "shield",
     "explain": "A若要經B到C，需求已變成轉遞；peering不提供這種路線。多VPC共同連機房可另評估TGW與路由分段，而不是只把兩段關係相加。"
    }
   ],
   "links": []
  }
 ],
 "direct-connect-ipsec": [
  {
   "anchor": 1,
   "title": "專線是道路，IPsec是路上的加密通道",
   "purpose": "專用線路與加密隧道缺少層次畫面。把本例倉庫端點、承載路徑與AWS VPN端點連起，讓兩個機制能同時存在。",
   "kind": "flow",
   "caption": "本例採支援的Private IP VPN over Direct Connect；不能由專線已連通直接推出IPsec已配置。",
   "nodes": [
    {
     "id": "n1",
     "label": "倉庫客戶閘道",
     "detail": "從核定端點送出業務封包",
     "icon": "network",
     "explain": "倉庫原本已可經Direct Connect抵達AWS，這只證明路徑可用。合約另要求IPsec，仍要確認本例閘道與隧道配置符合支援架構。"
    },
    {
     "id": "n2",
     "label": "DX上的IPsec通道",
     "detail": "專線承載加密流量",
     "icon": "lock",
     "explain": "IPsec通道可以疊加在支援的Direct Connect路徑上。圖中道路與加密同時存在，不把VPN直接等同必須走公用網際網路。"
    },
    {
     "id": "n3",
     "label": "AWS端VPN端點",
     "detail": "本例以Transit Gateway終止",
     "icon": "cloud",
     "explain": "本例使用相應Transit Gateway與transit VIF等支援安排，對端終止隧道再接內部路徑。仍需核對路由、設備及隧道是否實際承載流量。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "進入已配置隧道",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "經專線抵達隧道對端",
     "tone": "normal"
    }
   ]
  }
 ],
 "hybrid-dns-directory": [
  {
   "anchor": 0,
   "title": "DNS端點方向，以AWS為基準",
   "purpose": "inbound／outbound容易隨人站的位置改變意思。把機房找AWS與AWS找機房並排，固定觀察邊界。",
   "kind": "compare",
   "caption": "進AWS用inbound，從AWS送出用outbound；仍需去回路徑與必要安全規則。",
   "nodes": [
    {
     "id": "n1",
     "label": "機房 → AWS",
     "detail": "機房DNS轉送至inbound",
     "icon": "cloud",
     "explain": "機房工程師查AWS私有服務，查詢從外部進入AWS，所以使用適當的inbound endpoint。命名基準是AWS邊界，不是工程師正在輸入名稱。"
    },
    {
     "id": "n2",
     "label": "AWS → 機房",
     "detail": "AWS轉送規則經outbound",
     "icon": "network",
     "explain": "AWS應用查機房管理的db.corp.example，符合規則的查詢由outbound送往機房DNS。VPN或DX只是路徑，並不自行設定這項轉送。"
    }
   ],
   "links": []
  }
 ],
 "resource-sharing": [
  {
   "anchor": 1,
   "title": "共用子網路，責任仍分成兩邊",
   "purpose": "分享資源容易被想成管理權全合併。以同一共享子網路的網路擁有者與產品使用者對照，讓分工可見。",
   "kind": "compare",
   "caption": "中央管網路配置，參與帳號管自己建立的支援資源；實際可操作範圍依共享條件核對。",
   "nodes": [
    {
     "id": "n1",
     "label": "網路擁有者",
     "detail": "中央團隊管理VPC配置",
     "icon": "network",
     "explain": "中央網路團隊規劃CIDR、子網與對外路徑，維持共同的網路安排。分享子網不代表每個參與帳號都能任意改中央VPC的所有設定。"
    },
    {
     "id": "n2",
     "label": "參與產品帳號",
     "detail": "維護自己建立的應用資源",
     "icon": "server",
     "explain": "產品團隊可在支援條件下建立並維護自己的工作負載。遇到路由問題要找正確擁有者，不能由共享位置推論已拿到全部網路管理權。"
    }
   ],
   "links": []
  }
 ],
 "privatelink-overlap-service": [
  {
   "anchor": 2,
   "title": "請求連本地入口，不把重疊網段接成一張網",
   "purpose": "兩端都有10.0.0.0/16時，讀者難想像為何仍能用一項服務。沿消費端本地端點到供應服務的路徑建立畫面。",
   "kind": "flow",
   "caption": "A使用自己端點的私有IP取用B的查價服務；不是把A、B全部網段合併路由。",
   "nodes": [
    {
     "id": "n1",
     "label": "A訂餐程式",
     "detail": "A網段：10.0.0.0/16",
     "icon": "server",
     "explain": "A只需要呼叫供應商查價服務，不需要任意登入B所有主機。先把需求縮到指定服務，才能區分它與整張網路互連。"
    },
    {
     "id": "n2",
     "label": "A介面端點",
     "detail": "解析到A內的私有入口",
     "icon": "network",
     "explain": "A的程式連向自己子網中的端點私有IP。這是消費端建立的服務入口，沒有要求把A的重疊目的網段直接路由到B全部內網。"
    },
    {
     "id": "n3",
     "label": "B服務入口",
     "detail": "NLB等支援的endpoint service",
     "icon": "cloud",
     "explain": "供應方建立受支援的服務入口並允許指定消費方。這條服務連接把請求交到B的查價端，不會因此對A開放B的所有位址。"
    },
    {
     "id": "n4",
     "label": "B查價程式",
     "detail": "只完成約定服務並回覆",
     "icon": "gear",
     "explain": "B的應用處理本例查價並回覆價格。查價成功不能推論B也可沿這條服務連接主動呼叫A的任意主機，應用授權也仍需安排。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "連本地端點IP",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "經PrivateLink交付服務請求",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "交給查價應用",
     "tone": "normal"
    }
   ]
  }
 ],
 "s3-onprem-endpoint": [
  {
   "anchor": 2,
   "title": "同一個S3，來源不同就不能照搬端點路徑",
   "purpose": "gateway endpoint不能當轉送閘道較抽象。用VPC內與辦公室兩個起點，並列原路徑限制與替代方向。",
   "kind": "compare",
   "caption": "辦公室經VPN或DX進來，不能借用該VPC的S3 gateway endpoint。",
   "nodes": [
    {
     "id": "n1",
     "label": "VPC內EC2",
     "detail": "本地路由 → gateway endpoint",
     "icon": "server",
     "explain": "本例VPC資源可依相應路由與授權使用S3 gateway endpoint。這個正常結果與來源位於該VPC有關，不是只要看見端點就人人可借道。"
    },
    {
     "id": "n2",
     "label": "辦公室借道",
     "detail": "VPN／DX → gateway：不支援",
     "icon": "network",
     "explain": "辦公室即使已連上VPC，也不能沿這條連線延伸使用該gateway endpoint。新增S3 Allow或複製路由表，不能改掉端點類型的範圍限制。"
    },
    {
     "id": "n3",
     "label": "辦公室私有路徑",
     "detail": "評估interface endpoint",
     "icon": "bucket",
     "explain": "從內網取用可評估S3介面端點，逐段確認公司路由、端點SG、名稱解析與資料授權。它有自己的費用，不是原gateway路由的直接延伸。"
    }
   ],
   "links": []
  }
 ],
 "migration": [
  {
   "anchor": 0,
   "title": "先辨認要搬的是檔案、資料庫還是整台機器",
   "purpose": "三種搬移工作被同一個migration字眼包住，難以建立工具用途。把不同搬運物放在三張具體圖卡中。",
   "kind": "compare",
   "caption": "資料類型與要保留的執行方式不同，不能只換工具名稱就當成等價遷移。",
   "nodes": [
    {
     "id": "n1",
     "label": "檔案或物件",
     "detail": "DataSync：支援位置間傳輸",
     "icon": "file",
     "explain": "要搬共享檔案目錄，先確認來源、目的與傳輸需求，評估DataSync。檔案搬運不會自動理解資料庫交易或整台機器的作業系統狀態。"
    },
    {
     "id": "n2",
     "label": "持續更新資料庫",
     "detail": "DMS：資料與後續變更",
     "icon": "database",
     "explain": "正在更新的資料庫有既有資料與新變更，需要評估支援的DMS搬遷方式。只把檔案複製過去，不能據此宣告資料庫遷移責任都已完成。"
    },
    {
     "id": "n3",
     "label": "整台伺服器",
     "detail": "Rehost：保留工作負載形態",
     "icon": "server",
     "explain": "若需求是盡量保留既有作業系統與應用形態，要評估伺服器rehost方向。它和只搬檔案或資料庫內容不同，先辨識要保留什麼。"
    }
   ],
   "links": []
  }
 ],
 "dms-cdc-cutover": [
  {
   "anchor": 2,
   "title": "新訂單仍在產生，切換前要追到最後一筆",
   "purpose": "載入完成與同步追平很容易都想成百分比100%。以最後R950訂單的切換窗口，表示寫入、追趕與改連線的先後。",
   "kind": "timeline",
   "caption": "先控制來源寫入、等剩餘變更套用並驗證，再讓應用改連目標；保留回復安排。",
   "nodes": [
    {
     "id": "n1",
     "label": "既有資料＋變更",
     "detail": "全量載入期間也追蹤新訂單",
     "icon": "database",
     "explain": "全量與CDC配合處理舊訂單及期間新增變更。來源日誌格式、讀取權限與保留需先成立，不能因全量完成就認為新訂單已全部到目標。"
    },
    {
     "id": "n2",
     "label": "切換窗口停寫",
     "detail": "最後R950之後暫停舊入口",
     "icon": "clock",
     "explain": "在受控窗口停止或凍結來源寫入，才有可追上的明確最後範圍。此時不是把DMS當成零延遲保證，而是讓後續核對有穩定終點。"
    },
    {
     "id": "n3",
     "label": "追平並驗證",
     "detail": "確認R950已套用與應用相容",
     "icon": "receipt",
     "explain": "等待剩餘變更套用，檢查錯誤、延遲、資料與應用相容性。目標有資料不等於SQL、帳號與所有資料庫物件都已自動相容。"
    },
    {
     "id": "n4",
     "label": "應用改連目標",
     "detail": "新端驗證失敗依計畫回復",
     "icon": "server",
     "explain": "前面條件確認後才改應用連線，並測試新端工作是否正確。保留已規劃的回復流程，不在舊站清掉後才發現切換驗證失敗。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "控制來源後續變動",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "等待最後改變套用",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "確認結果後切換",
     "tone": "normal"
    }
   ]
  }
 ],
 "file-gateway-workflow": [
  {
   "anchor": 2,
   "title": "舊程式仍走共享路徑，Gateway接到S3",
   "purpose": "SMB檔案介面與S3物件保存不是同一種入口。沿舊程式、本地中介層與雲端保存，讓介面轉接有實際位置。",
   "kind": "flow",
   "caption": "Gateway有本地快取與上傳過程；尚未上傳完成的內容不能直接視為已在S3保存。",
   "nodes": [
    {
     "id": "n1",
     "label": "機房舊程式",
     "detail": "仍讀寫原有SMB共享介面",
     "icon": "server",
     "explain": "本例程式不立即改成S3 API，仍用網路共享路徑寫報表。這是保留既有檔案操作方式，不是把S3網址改成磁碟名稱就能完成。"
    },
    {
     "id": "n2",
     "label": "File Gateway",
     "detail": "檔案介面＋本地快取",
     "icon": "file",
     "explain": "Gateway作為中介層，提供支援的SMB或NFS介面並管理快取。程式能在本地路徑操作，與資料何時已上傳到雲端是不同結果。"
    },
    {
     "id": "n3",
     "label": "S3保存",
     "detail": "核對上傳進度與雲端內容",
     "icon": "bucket",
     "explain": "Gateway依服務方式將資料與中繼資料送到S3。團隊還要確認上傳完成、讀回正確及必要權限，不能把本地尚在等待的資料當作已受雲端完整保護。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "以SMB寫入共享",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "按上傳流程送往S3",
     "tone": "normal"
    }
   ]
  }
 ],
 "file-migration-cutover": [
  {
   "anchor": 2,
   "title": "第一次搬完，不是最後一次切換",
   "purpose": "檔案搬運仍有來源繼續改動的問題。用第一次傳輸到員工改連的時間軸，讓增量與最後驗證分別有位置。",
   "kind": "timeline",
   "caption": "最後同步及應用驗證完成，再切客戶端；第一次成功不能涵蓋之後新增的檔案。",
   "nodes": [
    {
     "id": "n1",
     "label": "第一次傳輸",
     "detail": "來源仍使用並可能新增檔案",
     "icon": "file",
     "explain": "第一批收據與報表傳完後，舊端仍可能產生新內容。先核對任務與內容，並記錄來源持續寫入範圍，不立即把全部客戶端改走。"
    },
    {
     "id": "n2",
     "label": "增量與停寫",
     "detail": "補變更，安排受控切換窗口",
     "icon": "clock",
     "explain": "按任務選項將需要的後續變更帶過去，再於最後同步前控制來源寫入。刪除傳播與覆寫也需明確設定，不把不完整內容誤認為完成檔案。"
    },
    {
     "id": "n3",
     "label": "最後驗證",
     "detail": "核對內容、權限與實際讀寫",
     "icon": "receipt",
     "explain": "確認最後任務結果及支援的權限、中繼資料，再讓應用測試新位置。傳輸成功不等於所有客戶端已相容或已有永久共享入口。"
    },
    {
     "id": "n4",
     "label": "員工改連",
     "detail": "驗證接手後按規範處理舊端",
     "icon": "server",
     "explain": "員工改到新位置並完成實際讀寫後，再依保存與回復計畫處理舊端。若最後驗證未通過，就保留舊端或按計畫回復，避免無路可退。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "來源變化需另外追上",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "確認最後一批一致",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "完成接手測試後",
     "tone": "normal"
    }
   ]
  }
 ],
 "transfer-family-sftp-entry": [
  {
   "anchor": 2,
   "title": "每日交檔是入口，不是又搬一次家",
   "purpose": "DataSync與Transfer Family都能把資料放入S3，文字容易混用。沿供應商每日報價單的路線，畫出協定入口與業務接受之間差別。",
   "kind": "flow",
   "caption": "歷史搬移與每天SFTP接入分工不同；傳輸成功也不等於報價已被業務核准。",
   "nodes": [
    {
     "id": "n1",
     "label": "供應商工具",
     "detail": "以SFTP上傳今日報價單",
     "icon": "person",
     "explain": "供應商保留既有SFTP客戶端，連公司指定名稱並驗證。這是每日持續交檔的工作，不是再次把整批歷史報價做一次遷移。"
    },
    {
     "id": "n2",
     "label": "SFTP受管端點",
     "detail": "Transfer Family接入與登入",
     "icon": "cloud",
     "explain": "端點配置支援的驗證方式、服務角色與儲存位置，把供應商要求接到適當後端。登入成功還不代表可讀寫所有供應商資料。"
    },
    {
     "id": "n3",
     "label": "限定後端位置",
     "detail": "A只可寫自己的incoming範圍",
     "icon": "bucket",
     "explain": "以適用權限限制供應商A能用的位置，並測試不能越界讀取B。後端可按支援情況使用S3或EFS，仍要核對加密與網路條件。"
    },
    {
     "id": "n4",
     "label": "後續業務處理",
     "detail": "校驗格式，再交採購人員",
     "icon": "receipt",
     "explain": "報價單成功到達後，還需依設計校驗與後續業務處理。傳輸完成只完成接收責任，不會自動代表公司已接受這份報價。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "連入與驗證",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "按角色及位置授權寫入",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "完成傳輸後另行處理",
     "tone": "normal"
    }
   ]
  }
 ],
 "integration-migration": [
  {
   "anchor": 2,
   "title": "保留哪種既有模型，才知道比較哪個服務",
   "purpose": "MQ、MSK及AppFlow都像整合工具，讀者缺少可辨識的輸入。以原程式實際依賴的協定或工作模型做圖卡。",
   "kind": "compare",
   "caption": "先保留必要相容能力，再比較管理責任；不能只改端點名稱就假設既有程式相容。",
   "nodes": [
    {
     "id": "n1",
     "label": "既有訊息代理",
     "detail": "MQ：核對ActiveMQ／RabbitMQ相容",
     "icon": "queue",
     "explain": "既有應用依賴支援訊息代理API或協定時，先比較Amazon MQ相容條件。SQS是另一種整合模型，不能只因熟悉就當作無改程式替換。"
    },
    {
     "id": "n2",
     "label": "既有Kafka分析",
     "detail": "MSK：topics、groups及重播",
     "icon": "workflow",
     "explain": "Kafka消費者可能依賴topic、分區、offset與保留模型。受管MSK是相容方向之一，但仍要設計版本、保留及應用責任，不是任意工作佇列都等價。"
    },
    {
     "id": "n3",
     "label": "SaaS資料帶入",
     "detail": "AppFlow：支援connector及欄位",
     "icon": "file",
     "explain": "每天從支援CRM把資料帶入S3，重點是connector、排程與欄位對應。這不是執行任意訊息代理，也不一定需要先維護整套Kafka程式。"
    }
   ],
   "links": []
  }
 ],
 "iac": [
  {
   "anchor": 2,
   "title": "範本先變成預覽，再決定是否執行",
   "purpose": "Infrastructure as code容易被想成自動部署即自動保護資料。把預覽與執行之間留出人的確認節點，顯示兩件事不同。",
   "kind": "flow",
   "caption": "Change set不是執行成功保證；替換與Retain等資料責任需要另外核對。",
   "nodes": [
    {
     "id": "n1",
     "label": "範本＋環境參數",
     "detail": "描述資源與彼此參照",
     "icon": "file",
     "explain": "CloudFormation範本描述資源，參數讓相同範本接受不同環境值。參照連接依賴，不必把測試資源名稱人工複製進每一段設定。"
    },
    {
     "id": "n2",
     "label": "Change set預覽",
     "detail": "看新增、修改、移除或替換",
     "icon": "receipt",
     "explain": "預覽比較目前stack與新範本，呈現預計變更。看到可執行不等於已完成，也不能保證配額、權限或執行時條件一定都會成功。"
    },
    {
     "id": "n3",
     "label": "核對資料安排",
     "detail": "替換、保留、還原與切換",
     "icon": "shield",
     "explain": "若資料庫被標示替換，先確認資料怎麼保留、恢復與切換。Retain可能使刪stack後資源繼續存在及計費，不能把自動化當成清理保證。"
    },
    {
     "id": "n4",
     "label": "執行並驗證",
     "detail": "核對實際資源與應用結果",
     "icon": "gear",
     "explain": "完成必要判斷後才決定執行，並驗證部署後輸出與工作行為。範本外手動修改也可能產生drift，仍需要持續變更管理。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "產生變更比較",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "發現替換時先停下核對",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "條件確認後決定是否執行",
     "tone": "normal"
    }
   ]
  }
 ],
 "s3-advanced": [
  {
   "anchor": 1,
   "title": "今天的新規則，不會自動搬好五年舊照片",
   "purpose": "live replication與歷史回填容易被一句複寫已啟用混在一起。以新照片與歷史照片兩堆物件分開顯示工作。",
   "kind": "compare",
   "caption": "先分後續版本與既有歷史物件，各自確認複寫範圍、結果及失敗資訊。",
   "nodes": [
    {
     "id": "n1",
     "label": "規則後的新版本",
     "detail": "依符合條件的live replication處理",
     "icon": "bucket",
     "explain": "SRR或CRR依規則非同步傳送符合條件版本，還需版本控制、角色與目的地等條件。新版本測試成功，只證明這條後續流程的一部分。"
    },
    {
     "id": "n2",
     "label": "既有五年照片",
     "detail": "另評估Batch Replication與驗證",
     "icon": "file",
     "explain": "早在規則之前保存的舊物件，不能因今天規則啟用就算已全部回填。另列歷史範圍與適用回填工作，並核對目的地內容與失敗報告。"
    }
   ],
   "links": []
  }
 ],
 "s3-replication-setup": [
  {
   "anchor": 2,
   "title": "版本、服務授權與目的地，要同時接上",
   "purpose": "複寫角色容易被看成一個神奇搬運開關。用來源版本、帶角色的複寫工作與目的版本三站，標出授權與版本責任。",
   "kind": "flow",
   "caption": "兩邊版本控制與適用讀寫授權都要成立；複寫是非同步，抵達後仍需驗證內容。",
   "nodes": [
    {
     "id": "n1",
     "label": "來源A的新版本",
     "detail": "來源桶已啟用版本控制",
     "icon": "bucket",
     "explain": "規則建立後上傳的內容成為來源版本，來源與目的都需要版本控制。只對來源開版本，不代表另一端的保存條件已補齊。"
    },
    {
     "id": "n2",
     "label": "S3複寫工作",
     "detail": "使用可承擔且獲准的角色",
     "icon": "key",
     "explain": "S3依配置角色讀來源並寫目的。角色是服務使用的授權安排，不是另一個資料保存站；跨帳號與KMS情況還有適用的額外條件。"
    },
    {
     "id": "n3",
     "label": "目的B版本",
     "detail": "檢查複寫狀態與實際內容",
     "icon": "bucket",
     "explain": "目的地應保存相應版本，並核對新版本抵達及內容。非同步不代表立刻完成，規則前的歷史物件也不能因這次測試成功就算已回填。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "角色獲准讀取來源",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "角色獲准寫入目的",
     "tone": "normal"
    }
   ]
  }
 ],
 "s3-replication-delete-boundaries": [
  {
   "anchor": 2,
   "title": "三種來源刪法，目的結果不一樣",
   "purpose": "刪除標記、指定版本刪除與Lifecycle都被叫刪除。三張操作卡以來源動作對照目的端效果，避免一條箭頭概括。",
   "kind": "compare",
   "caption": "本課新版Filter規則下，刪除標記有設定條件；指定版本與Lifecycle刪除不替目的資料做同樣清理。",
   "nodes": [
    {
     "id": "n1",
     "label": "一般DELETE",
     "detail": "新增標記；新版規則預設不複寫",
     "icon": "receipt",
     "explain": "未指定versionId通常建立刪除標記。使用Filter的新規則預設不複寫它；適用非tag規則可另啟用，不能直接推論來源撤下就等於目的撤下。"
    },
    {
     "id": "n2",
     "label": "指定versionId",
     "detail": "來源版本刪除不傳成目的刪除",
     "icon": "file",
     "explain": "來源永久刪除某版本，不會把相同版本刪除動作傳給目的。複寫成功的副本仍有自己的保存與權限範圍，需分別檢查版本清單。"
    },
    {
     "id": "n3",
     "label": "來源Lifecycle",
     "detail": "到期動作及標記不隨複寫傳播",
     "icon": "clock",
     "explain": "來源生命週期到期不會代替目的保存政策，包含其產生的刪除標記也不隨複寫傳播。目的若要清理，需另外設定適用生命週期規則。"
    }
   ],
   "links": []
  }
 ],
 "s3-lock-modes": [
  {
   "anchor": 2,
   "title": "同樣鎖住v1，誰能在期限前解開？",
   "purpose": "兩種保留模式的差別在可繞過程度，名稱本身不易想像。以同一個保留中的v1版本，對照受控繞過與不能提前刪除。",
   "kind": "compare",
   "caption": "保護的是指定版本與期限；建立同名v2不等於改寫或刪掉受保護v1。",
   "nodes": [
    {
     "id": "n1",
     "label": "Governance",
     "detail": "具適用權限並明確要求可按條件繞過",
     "icon": "key",
     "explain": "一般刪改受到保護，但具BypassGovernanceRetention等所需授權並明確提出要求者，可按條件繞過。不是只稱管理員就自動忽略所有要求。"
    },
    {
     "id": "n2",
     "label": "Compliance",
     "detail": "有效保留期內，連root也不能提前刪",
     "icon": "lock",
     "explain": "本例要求日期前連root也不能刪v1，對應Compliance。有效期內不能提前刪受保護版本、縮短期限或改成較寬模式，設定前需慎重驗證。"
    }
   ],
   "links": []
  }
 ],
 "edge-deployment": [
  {
   "anchor": 1,
   "title": "靠近使用者，有三種不同實際位置",
   "purpose": "低延遲服務名稱容易混成同一種邊緣。以客戶場地、都會位置與電信網路三個位置圖卡，固定部署的地理想像。",
   "kind": "compare",
   "caption": "三者支援範圍與parent Region相依性不同，不能只看到低延遲就互換。",
   "nodes": [
    {
     "id": "n1",
     "label": "Outposts",
     "detail": "AWS支援設備放到客戶場地",
     "icon": "server",
     "explain": "Outposts將支援能力延伸到工廠或客戶場地，客戶仍安排電力、網路與應用。它不是把整個Region所有服務完整搬入自己的機房。"
    },
    {
     "id": "n2",
     "label": "Local Zones",
     "detail": "靠近特定都會或產業中心",
     "icon": "globe",
     "explain": "Local Zones是在支援位置提供部分運算等資源，並非客戶機房內自行安裝的Outposts。仍需核對可用服務、來源路徑與parent Region依賴。"
    },
    {
     "id": "n3",
     "label": "Wavelength",
     "detail": "支援電信業者的網路邊緣",
     "icon": "network",
     "explain": "Wavelength面向支援的通訊服務提供者網路邊緣情境。它不會因名為邊緣就變成獨立Region，實際電信路徑及支援能力仍要確認。"
    }
   ],
   "links": []
  }
 ],
 "governance-tools": [
  {
   "anchor": 1,
   "title": "供應商報告與自己的配置證據，要放兩格",
   "purpose": "「AWS合規」容易讓讀者想成應用也自動合規。用報告文件與實際桶政策兩份證據，顯示它們回答不同問題。",
   "kind": "compare",
   "caption": "Artifact提供供應商相關證據，不能取代客戶工作負載自己的設定與操作證據。",
   "nodes": [
    {
     "id": "n1",
     "label": "AWS的供應商證據",
     "detail": "例如Artifact中的SOC報告",
     "icon": "receipt",
     "explain": "稽核員要AWS相關SOC報告時，可從Artifact取得適當文件。這份報告有其涵蓋範圍，不會直接證明客戶程式、資料保存與人員授權都合規。"
    },
    {
     "id": "n2",
     "label": "你的應用證據",
     "detail": "例如S3政策及配置檢查紀錄",
     "icon": "shield",
     "explain": "若稽核員問自己的桶是否公開，仍需提供實際資源政策與檢查等證據。重交供應商報告沒有回答這項工作負載本身的設定問題。"
    }
   ],
   "links": []
  }
 ],
 "ai-documents": [
  {
   "anchor": 2,
   "title": "掃描發票變成欄位後，還要判斷可信度",
   "purpose": "文件辨識輸出容易被當成已確認的金額。以影像、結構化欄位與低信心人工覆核的轉換，建立具體輸入輸出畫面。",
   "kind": "flow",
   "caption": "本例為低信心辨識；先核對來源，不因服務已回傳結果就直接付款。",
   "nodes": [
    {
     "id": "n1",
     "label": "掃描發票",
     "detail": "影像中的欄位與表格",
     "icon": "file",
     "explain": "輸入是一張掃描文件，不只是可複製文字。需求若包括欄位位置與表格結構，單純得到一串字或影像物件標籤仍不足以完成。"
    },
    {
     "id": "n2",
     "label": "Textract抽取",
     "detail": "輸出可處理的文字與支援結構",
     "icon": "gear",
     "explain": "Textract的適用能力將文件文字與表格、表單等支援結構帶出來。服務輸出仍需依文件版面、語言與支援範圍核對，不保證每次完全正確。"
    },
    {
     "id": "n3",
     "label": "發現低信心",
     "detail": "金額或版面需要例外處理",
     "icon": "chart",
     "explain": "辨識結果可能有信心分數或其他結果資訊。低信心與特殊版面應進入事先安排的例外流程，不能把有數字就當成款項已核對。"
    },
    {
     "id": "n4",
     "label": "人工覆核",
     "detail": "比對來源頁再交業務使用",
     "icon": "worker",
     "explain": "本例保留來源頁與辨識版本，讓人員核對金額及追查錯誤。若輸入含個資，人工操作與保存也仍要符合已設計的權限與保留規則。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "送入適用辨識功能",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "檢查結果與可信度",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "送交核對，不直接付款",
     "tone": "normal"
    }
   ]
  }
 ],
 "ai-speech-models": [
  {
   "anchor": 0,
   "title": "聲音與文字之間，有兩個相反方向",
   "purpose": "Transcribe與Polly同樣處理聲音，名稱難產生輸入輸出的方向感。用錄音與文章兩張圖卡直接顯示轉換方向。",
   "kind": "compare",
   "caption": "轉錄是聲音變文字，朗讀是文字變聲音；兩者都不等於翻譯或理解全部意圖。",
   "nodes": [
    {
     "id": "n1",
     "label": "Transcribe",
     "detail": "客服錄音 → 可搜尋文字",
     "icon": "phone",
     "explain": "輸入客服錄音，取得支援的轉錄文字以便搜尋關鍵字。這是語音轉文字，不會因輸出是文字就自動完成語言翻譯或客戶意圖判斷。"
    },
    {
     "id": "n2",
     "label": "Polly",
     "detail": "文章文字 → 合成朗讀聲音",
     "icon": "file",
     "explain": "輸入文章文字，取得合成語音供使用者聆聽。它與Transcribe方向相反，仍需核對支援語言、音訊格式與其他使用條件。"
    }
   ],
   "links": []
  }
 ],
 "reference-architecture": [
  {
   "anchor": 2,
   "title": "同一網站，三種工作各有保存與處理位置",
   "purpose": "整合課容易再變成服務名稱清單。把公開內容、動態交易與後處理分成三條用途，讓先前知識回到同一網站。",
   "kind": "fanout",
   "caption": "這是工作的分工圖：共用圖片、正確保存交易、延後附屬工作；不是每筆請求都必須走三條。",
   "nodes": [
    {
     "id": "n1",
     "label": "訂餐網站的工作",
     "detail": "先分清使用者要完成什麼",
     "icon": "phone",
     "explain": "同一網站同時提供菜單內容、登入下單及附屬工作。先依用途分工，才能判斷哪些內容可共用、哪裡要保存權威交易與哪些工作可稍後做。"
    },
    {
     "id": "n2",
     "label": "公開菜單圖片",
     "detail": "S3保存，CloudFront分發",
     "icon": "bucket",
     "explain": "許多客人可共用同一張公開圖片，適合按需求保存並快取。這種重用不等於每位使用者的購物車或訂單回應也能共用同一份。"
    },
    {
     "id": "n3",
     "label": "動態訂單交易",
     "detail": "應用處理，權威資料庫保存",
     "icon": "database",
     "explain": "登入、下單與付款結果要經適當應用處理並留下權威資料。主機可重建不表示交易資料能丟棄，重要狀態也不能只放一台主機記憶體。"
    },
    {
     "id": "n4",
     "label": "寄信與開票等",
     "detail": "佇列／事件，重試仍需冪等",
     "icon": "queue",
     "explain": "可延後工作與下單回應分開，但重試可能讓同一工作執行多次。消費者仍依orderId等業務識別核對，不能把入列成功視為外部交易只做一次。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "公開可共用內容",
     "tone": "normal"
    },
    {
     "from": "n1",
     "to": "n3",
     "label": "登入與交易",
     "tone": "normal"
    },
    {
     "from": "n1",
     "to": "n4",
     "label": "可以稍後做的工作",
     "tone": "normal"
    }
   ]
  }
 ],
 "order-transaction-outbox": [
  {
   "anchor": 2,
   "title": "先留下待辦承諾，再把訊息送出去",
   "purpose": "雙寫空窗與同一交易較難想像。用R52訂單與E52事件同時落地的第一站，接到獨立發送與廚房去重。",
   "kind": "flow",
   "caption": "資料庫原子保存的是訂單與待發紀錄；後面仍可能重送E52，廚房要依業務事件冪等。",
   "nodes": [
    {
     "id": "n1",
     "label": "同一資料庫交易",
     "detail": "一起保存R52訂單＋E52待發事件",
     "icon": "database",
     "explain": "訂單與待發事件在同一資料庫交易一起提交或回復。這裡保存的是還要通知的承諾，不是把SQS也放進同一筆資料庫原子交易。"
    },
    {
     "id": "n2",
     "label": "發送程式",
     "detail": "讀已提交E52，嘗試交給SQS",
     "icon": "worker",
     "explain": "發送程式讀到已提交待發事件後，再向SQS送出。若SQS暫時不可用，E52仍保留待辦責任，不能因第一次發送失敗就失去廚房通知。"
    },
    {
     "id": "n3",
     "label": "SQS接受E52",
     "detail": "成功送出後還要更新發送狀態",
     "icon": "queue",
     "explain": "訊息已送出但發送狀態尚未更新時，程式仍可能中斷。恢復後可能再次送同一E52，所以接受訊息不等於從此沒有重複交付。"
    },
    {
     "id": "n4",
     "label": "廚房核對E52",
     "detail": "已做過就不再建立相同備餐工作",
     "icon": "chef",
     "explain": "廚房以事件ID或訂單操作ID核對是否已處理，防止重送造成重複副作用。Outbox補上交接責任，沒有替所有外部系統建立一次性原子交易。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "提交後才能發送",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "交付待處理工作",
     "tone": "normal"
    },
    {
     "from": "n3",
     "to": "n4",
     "label": "依事件識別消費並核對",
     "tone": "normal"
    }
   ]
  }
 ],
 "architecture-principles": [
  {
   "anchor": 2,
   "title": "交給供應商更多工作，仍有客戶自己的責任",
   "purpose": "受管理服務常被誤想成全部外包。以供應商基礎設施與客戶資料應用兩張責任卡，保留服務抽象層改變的空間。",
   "kind": "compare",
   "caption": "比較服務時逐項核對責任；使用RDS不會替你決定訂單欄位或誰能讀資料。",
   "nodes": [
    {
     "id": "n1",
     "label": "供應商負責部分",
     "detail": "AWS提供的基礎設施與服務管理",
     "icon": "cloud",
     "explain": "AWS負責其提供的雲端基礎設施，不同服務還會接手不同管理工作。從EC2到受管理資料庫，交出去的項目會變，但不能籠統當成全部都交給供應商。"
    },
    {
     "id": "n2",
     "label": "客戶仍負責部分",
     "detail": "資料、業務授權與應用驗證",
     "icon": "person",
     "explain": "客戶仍安排自己資料能被誰使用、訂單欄位及應用行為。EC2還有主機系統維護等責任；使用RDS減少某些管理，也沒有代做自己的業務決策。"
    }
   ],
   "links": []
  }
 ],
 "exam-map": [
  {
   "anchor": 0,
   "title": "先找不能違反的條件，再比較優點",
   "purpose": "情境題常把工作、硬限制與最佳化目標混在同句。用三道不同決策步驟，幫讀者把篩選與排序分開。",
   "kind": "flow",
   "caption": "便宜或少維運只能在符合必要條件的方案中比較，不能拿來抵銷不合需求。",
   "nodes": [
    {
     "id": "n1",
     "label": "整理題目",
     "detail": "要完成什麼？哪些條件不可違反？",
     "icon": "receipt",
     "explain": "先把每天報表等工作與不能遺失資料等硬限制分開。若需求立即讀取封存內容，能否等待還原就不是可忽略的小偏好。"
    },
    {
     "id": "n2",
     "label": "先排不可行方案",
     "detail": "違反硬限制者先剔除",
     "icon": "shield",
     "explain": "必須先等待還原的方式，不能只因保存單價低就滿足立即開啟的需求。這一步是在判斷能不能用，尚未開始替所有選項排便宜順序。"
    },
    {
     "id": "n3",
     "label": "再比較可行方案",
     "detail": "按最低成本或最少管理工作選擇",
     "icon": "chart",
     "explain": "只有滿足必要條件的候選，才進入總成本及管理負擔比較。這能避免選到看似便宜或受管，實際卻無法完成題目工作的方案。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "分清必要限制",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "留下合格候選再排序",
     "tone": "normal"
    }
   ]
  }
 ],
 "review": [
  {
   "anchor": 2,
   "title": "錯題筆記要留下理由，不是留下字母",
   "purpose": "「下次選B」無法形成可轉移理解。把一題答錯後的處理畫成限制、機制與陌生情境三站，讓複習動作具體可執行。",
   "kind": "flow",
   "caption": "同題分數提高可能來自記憶；能解釋條件與機制後，還要用陌生情境重新驗證。",
   "nodes": [
    {
     "id": "n1",
     "label": "找漏掉的條件",
     "detail": "概念、題幹限制或多選數量",
     "icon": "receipt",
     "explain": "先分辨這次是概念不知道、忽略必要限制，還是多選少選一項。只把答案字母寫進筆記，無法說明下次遇到相同機制該怎麼判斷。"
    },
    {
     "id": "n2",
     "label": "重講選型理由",
     "detail": "正解滿足什麼，錯選違反什麼",
     "icon": "person",
     "explain": "遮住解析，用自己的話說出正確方案靠什麼機制達成要求，以及原選項在哪個條件失敗。這比記住服務名稱與某字眼的配對更能檢查理解。"
    },
    {
     "id": "n3",
     "label": "換陌生情境",
     "detail": "重新找條件、推導與驗證",
     "icon": "workflow",
     "explain": "重做相同題目可能有記憶效應，還需用陌生官方練習情境驗證是否能重新推導。本站正確率也不是AWS完整尺度分，不能把720直接當成72%。"
    }
   ],
   "links": [
    {
     "from": "n1",
     "to": "n2",
     "label": "辨識錯誤原因",
     "tone": "normal"
    },
    {
     "from": "n2",
     "to": "n3",
     "label": "把理由帶到新題",
     "tone": "normal"
    }
   ]
  }
 ]
};
