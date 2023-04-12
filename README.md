<div align='center'>
<h2> 👩‍⚕️ 병의원 채용프로세스 관리 서비스, 메디매치 👨‍⚕️</h2>
<img src='public/images/표지.jpg'>

</div>

## 프론트엔드 팀원

| <img src="https://avatars.githubusercontent.com/u/108416023?v=4" width="120"> | <img src="https://avatars.githubusercontent.com/u/106291546?v=4" width="120"> | <img src="https://avatars.githubusercontent.com/u/46959186?v=4" width="120"> |
| :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
|                       [강해경](https://github.com/hae9)                       |                      [임예지](https://github.com/1myeji)                      |                     [전소윤](https://github.com/ddoyun)                      |

<div align="center">

<h2> ✨ 빠르게 골라보는 나의 사진, 뭐 올릴지 고민 될 땐? 픽미! ✨ </h2>

![표지](https://user-images.githubusercontent.com/79238676/212324464-149e0bf3-a9da-4442-899e-ee97f84c530b.png)

![인트로1](https://user-images.githubusercontent.com/79238676/212324638-7b18e6aa-1e5b-49ab-8b0f-6208bb7f06f7.png)

![솔루션 (1)](https://user-images.githubusercontent.com/79238676/212324862-6a784db5-f949-4cc1-a71e-9318789d0d52.png)

</div>

<h2> 💡 Pic.me 서비스의 핵심 기능 </h2>

<h3> 📥 Maker </h3>
<h4> 1️⃣ 투표 생성</h4>

<div ><strong> 사진 선택 및 제목 입력 </strong> 단 두가지의 입력만으로 간단한 투표 생성을 진행합니다.  <br/>

![핵심기능 플로우1 - 메이커의 투표생성](https://user-images.githubusercontent.com/69576360/212249375-2d43ca37-8754-42eb-8283-40070e9593a0.png)

<h4> 2️⃣ 링크 생성 및 공유</h4>

<div ><strong> 투표 링크 생성 및 인스타그램 공유하기 </strong> 를 통해 링크게시를 유도합니다.  <br/>

![핵심기능 플로우2 - 메이커의 투표공유](https://user-images.githubusercontent.com/69576360/212249498-3218ab4f-f500-4574-b71f-a32d90e54229.png)

<h4> 3️⃣ 투표 모아보기 </h4>

<div ><strong> 진행했던 투표 목록을 모아보는 </strong> 라이브러리 기능을 통해 투표 현황 및 결과를 조회합니다. <br/>

![핵심기능 플로우4 - 메이커의 결과확인](https://user-images.githubusercontent.com/69576360/212249626-f9316305-0a45-4344-a6b1-b0495f5586dc.png)

<h3> 📥 Player </h3>
<h4> 1️⃣ 투표 참여</h4>

  <div > 인스타그램 스토리를 통해 <strong> 링크 입장, 익명 투표 </strong> 를 진행합니다</div>
  <div> 투표 참여자는 익명으로 투표 👉 (참여자는 로그인 X)</div>
  
<h4> 2️⃣ 이유 선택</h4>

<div ><strong> 사진 선택 후 이유 선택 진행 최종적으로 투표하기 </strong> 를 통해 최종 투표를 완료합니다. <br/>
  <div> 간단한 이유 선택 👉 (이유의 아이콘 화) 투표하기 클릭 </div>
<h4> 3️⃣ 스티커 픽미  </h4>

<div >선택한 사진 위에  <strong> 나의 시선이 머무른 곳에 스티커를 부착 </strong> 하여 직관적으로 결과를 나타냅니다. <br/>
  <div> 스티커 부착 뒤에는 현재까지 붙여진 스티커를 모두 나타내 현재 투표 상황을 보여줍니다. </div>
  
![핵심기능 플로우3 - 플레이어의 투표참여](https://user-images.githubusercontent.com/69576360/212249758-05eb5711-05b5-4991-859c-e3b06843ec7e.png)

## ⚒️ 기술 스택

```
    "typescript": "4.7.4"
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.10",
    "axios": "^1.2.2",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-simple-import-sort": "^8.0.0",
    "msw": "^0.49.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.6.1",
    "react-scripts": "5.0.1",
    "recoil": "^0.7.6",
    "recoil-persist": "^4.2.0",
    "styled-components": "^5.3.6",
    "swr": "^2.0.0",
    "typescript": "^4.9.4",
```

---

## ✅ 커밋 컨벤션

| 제목        | 내용                                                                             |
| ----------- | -------------------------------------------------------------------------------- |
| init        | 작업 세팅 커밋 (패키지 설치 등)                                                  |
| feat        | 새로운 기능을 추가할 경우                                                        |
| style       | 기능에 영향을 주지 않는 커밋, 코드 순서, css등의 포맷에 관한 커밋                |
| fix         | 버그를 고친 경우                                                                 |
| refactor    | 프로덕션 코드 리팩토링                                                           |
| docs        | 문서를 수정한 경우, 파일 삭제, 파일명 수정 등 ex) README.md                      |
| chore       | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우, 주석 추가, 자잘한 문서 수정 |
| code review | 코드 리뷰 반영                                                                   |

---

## 📁 폴더 구조

```
├── 📁 components
│  ├── 📁 common
│	 │   ├── Error.tsx
│	 │   ├── index.ts
│	 │   ├── Loading.tsx
│	 │   └── Router.tsx
│  ├── 📁 Auth
│  │  ├── Login.tsx
│  │  ├── Signup.tsx
│  │  └── index.ts
│  ├── 📁 Home
│  ├── 📁 Landing
│  ├── 📁 Layout
│  │  └── 📁 player
│	 │       ├── VotingLayout.tsx
│  │       └── index.ts
│  │  └── 📁 maker
│	 │       ├── VotingLayout.tsx
│  │       └── index.ts
│  ├── 📁 Library
│  ├── 📁 Voting
│  │  └── 📁 player
│	 │       ├── StickerVoting.tsx
│  │       └── index.ts
├── 📁 constant
│    └── StickerIconList.js
├── 📁 fonts
│  └── font.d.ts
├── 📁 lib
│  ├── 📁 api
│  │   └── vogting.ts
│  ├── 📁 hooks
│  │   └── vogting.ts
│  └── axios.ts
├── 📁 util
│  ├── 📁 hooks
│  ├── check.ts
│  └── escape.ts
├── 📁 pages
│  ├── 📁 player
│  │   ├── ImgChoice.tsx
│  │   ├── index.ts
│  │   └── Voting.tsx
│  ├── Error404.tsx
│  ├── Home.tsx
│  ├── Library.tsx
│  ├── Login.tsx
│  ├── MakerLanding.tsx
│  ├── PlayerLanding.tsx
│  ├── Signup.tsx
│  └── Voting.tsx
├── 📁 recoil
│ └── 📁 maker
│     ├── atom.ts
│     └── selector.ts
│ └── 📁 player
│     ├── atom.ts
│     └── selector.ts
├── 📁 styles
│  ├── globalFont.css
│  ├── styld.d.ts
│  ├── globalStyle.ts
│  └── themem.ts
├── 📁 types
│  ├── auth.ts
│  └── voting.ts
├── .env
├── .eslintrc.json
├── .gitgnore
├── .pnp.cjs
├── .pnp.loader.mjs
├── .yarnrc.yml
├── package.json
├── README.md
├── tsconfjg.json
├── webpack.config.js
└── yarn.lock
```
