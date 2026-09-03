# KAPAPI v2 공개 한국어 카피 (검수 후 확정)

Status: **SUPERSEDED — historical copy-review output**

> **SUPERSEDED — 2026-09-03.** “확정” records the result of the past copy review below, not current approval. This snapshot is preserved as review evidence. Current authority is `docs/DECISIONS.md` D-033.1–.12, D-034 and D-035: standard work terminology; client approval of deliverable, price, completion time, revision and recovery boundaries; internal KAPAPI procurement and selection; result acceptance/revision. Use the current prototype and Korean UX specifications for implementation.

검수 도구: `korean-skills:grammar-checker`, `korean-skills:humanizer`, `korean-skills:style-guide`

## 검수에서 수정한 항목

| 초안 | 확정 | 이유 |
| --- | --- | --- |
| `정시 납품 97퍼센트` | `정시 납품 97%` | UI 수치 표기는 기호가 표준. 한글 표기는 문장 안에서만. |
| `제시 금액은 예산 상한의 84퍼센트` | `제시 금액은 예산 상한의 84%` | 위와 같음. |
| `마감 6시간 안에 5시간 납품 확약` | `마감 6시간 이내, 5시간 완료 제안` | `확약`은 법률투. 근거 행은 명사형으로 짧게. |
| `자격과 마감, 예산 조건을 통과한 제안만 비교했습니다.` | 유지 | 열거는 쉼표. 가운뎃점 오남용 아님. |
| `도면·CAD`, `문서·자료` | 유지 | 가운뎃점은 공통성분 묶음에만 사용. 독립 나열에는 쉼표. |
| `적어주세요`, `해본` | 유지 | 보조용언 붙여쓰기는 한글맞춤법 제47항 허용. UI에서 더 자연스럽다. |

번역투 점검: `~에 대해`, `~를 통해`, `~되어진다`, 대명사·복수형 과다 없음.
문체 통일: 공개 화면은 `-습니다`체, 행동 유도만 `-세요`체로 고정.

---

## 내비게이션
```
작업 찾기
이용 방법
로그인
의뢰 등록
```

## 히어로
```
맡길 업무만 등록하세요
전문가 배정부터 결과 전달까지 카파피가 진행합니다.
```

입력창 안내문구: `어떤 작업이 필요하신가요?`
버튼: `파일 첨부` / `의뢰 등록`
예시 칩(제목 없음): `도면 정리` `상세페이지 이미지` `문서 서식 통일` `실측 데이터 정리`

## 진행 상태
```
의뢰가 등록되었습니다        QUEST CREATED
제안 3건이 도착했습니다       3 BIDS RECEIVED
조건을 확인하고 있습니다      ELIGIBILITY CHECK
전문가가 배정되었습니다       PLAYER ASSIGNED
작업을 시작했습니다          WORK STARTED
결과 파일이 도착했습니다      RESULT READY
```

## 배정 근거
```
왜 이 전문가인가요?
마감 6시간 이내, 5시간 완료 제안
같은 유형 작업 88건
정시 납품 97%
수정 요청 6%
제시 금액은 예산 상한의 84%

자격과 마감, 예산 조건을 통과한 제안만 비교했습니다.
가장 싸거나 가장 빠른 제안이 자동으로 선택되지는 않습니다.
```

## 신뢰
```
배정의 근거는 별점이 아닙니다
같은 일을 해본 적이 있는지를 먼저 봅니다.
```

## 마감이 급한 작업
```
오늘 안에 끝나야 하는 작업
마감이 짧으면 그 마감을 지킬 수 있는 제안만 비교 대상이 됩니다.
```

## 결과
```
작업이 완료되었습니다        QUEST COMPLETE
결과 확인
수정 요청
마감보다 18분 일찍 도착했습니다
수정 요청은 처음에 합의한 범위를 기준으로 합니다.
```

## 작업 찾기 (공급 측 진입)
```
같은 계정으로 작업을 받을 수도 있습니다
어떤 의뢰에서는 맡기는 쪽이 되고, 다른 의뢰에서는 수행하는 쪽이 됩니다.
의뢰인 계정과 작업자 계정을 따로 만들지 않습니다.
```

## 제안 등록
```
얼마에, 언제까지 완료할 수 있나요?
금액
완료 시간
제안 보내기
완료 시간은 배정된 시점부터 납품까지 걸리는 시간입니다.
```

## 빈 상태 · 오류
```
아직 등록된 의뢰가 없습니다
맡길 업무를 한 줄만 적어주세요
금액을 10,000원 이상 입력해 주세요
완료 시간을 시간 단위로 입력해 주세요
조건에 맞는 의뢰가 없습니다
```

## 푸터
```
이 사이트는 카파피 프로토타입입니다. 표시된 의뢰와 제안, 작업자 정보는 제품 설명을 위한 예시입니다.
현재 대금 보관과 완료 보장 기능은 제공하지 않습니다. 결과의 최종 확인은 의뢰한 사람이 합니다.
```

---

## 금지 문구 (v1 유출 방지)
```
할 일을 던져주세요.
일 던져놔. 결과만 받아.
맡겼습니다. 이제 하시던 일 하세요.
이런 일들이 올라옵니다
QUEST NETWORK / QUEST NETWORK · ONLINE
RESET
Good. Done. / GOOD DONE
```
