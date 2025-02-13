---
title: 'Temp'
regDate: '2025.02.07 15:32'
description: '테스트 게시글 파일'
thumbnailImage: 'asd'
mainTag: 'Next'
tags: ['tag1','tag2','tag3','tag4','tag5']
---


# :school: 우아한테크코스 7기 프리코스 4주차 미션 - 편의점

### 4주차 미션 진행시 학습 목표
* 관련 함수를 묶어 클래스를 만들고, 객체들이 협력하여 하나의 큰 기능을 수행하도록 한다.
* 클래스와 함수에 대한 단위 테스트를 통해 의도한 대로 정확하게 작동하는 영역을 확보한다.
* 3주 차 공통 피드백을 최대한 반영한다.
* 비공개 저장소 과제 진행 가이드를 참고하여 새로운 방식으로 과제 제출물을 제출한다.
<details>
<summary>3주차 공통 피드백 자세히 보기</summary>

#### 1. 함수(메서드) 라인에 대한 기준도 적용한다.
프로그래밍 요구사항에는 함수의 길이를 15라인으로 제한하는 규칙이 포함되어 있다. 이 규칙은 main() 함수도 동일하게 적용되며, 공백 라인도 한 라인으로 간주한다. 만약 함수가 15라인을 초과한다면, 역할을 더 명확하게 나누고, 코드의 가독성과 유지보수성을 높일 수 있는 신호로 인식하고 함수 분리 또는 클래스 분리를 고려해야 한다.

#### 2. 예외 상황에 대한 고민한다.
정상적인 상황을 구현하는 것보다 예외 상황을 모두 고려하여 프로그래밍하는 것이 훨씬 어렵다. 하지만, 이러한 예외 상황을 처리하는 습관을 들이는 것이 중요하다. 코드를 작성할 때는 예상되는 예외를 미리 고려하여, 프로그램이 비정상적으로 종료되거나 잘못된 결과를 내지 않도록 한다.
예를 들어, 로또 미션에서 고려할 수 있는 예외 상황은 다음과 같다.
* 로또 구입 금액에 1000 이하의 숫자를 입력
* 당첨 번호에 중복된 숫자를 입력
* 당첨 번호에 1~45 범위를 벗어나는 숫자를 입력
* 당첨 번호와 중복된 보너스 번호를 입력

#### 3. 비즈니스 로직과 UI 로직의 분리한다.
비즈니스 로직과 UI 로직을 한 클래스에서 처리하는 것은 단일 책임 원칙(SRP)에 위배된다. 비즈니스 로직은 데이터 처리 및 도메인 규칙을 담당하고, UI 로직은 화면에 데이터를 표시하거나 입력을 받는 역할로 분리한다. 아래는 비즈니스 로직과 UI 로직이 혼재되어 있다.
```javascript
class Lotto {

   #numbers

   // 로또 숫자가 포함되어 있는지 확인하는 비즈니스 로직
   contains(numbers) {
       ...
   }

   // UI 로직
   print() {
       ...
   }      
}
```
비즈니스 로직은 그대로 유지하고, UI 관련 코드는 별도 View 클래스로 분리하는 것이 좋다. 현재 객체의 상태를 보기 위한 로그 메시지 성격이 강하다면, toString() 메서드를 통해 상태를 표현한다. 만약 UI에서 사용할 데이터가 필요하다면 getter 메서드를 통해 View 계층으로 데이터를 전달한다.

#### 4. 객체의 상태 접근을 제한한다.
필드는 private class 필드로 구현한다. 객체의 상태를 외부에서 직접 접근하는 방식을 최소화 하는 이유에 대해서는 스스로 찾아본다.
```javascript
class WinningLotto {
   #lotto
   #bonusNumber

   constructor(lotto, bonusNumber) {
       this.#lotto = lotto
       this.#bonusNumber = bonusNumber
   }
}
```

#### 5. 객체는 객체답게 사용한다.
Lotto 클래스는 numbers를 상태 값으로 가지는 객체이다. 하지만 아래 객체는 로직 구현 없이 numbers에 대한 getter 메서드만을 제공하고 있다. 
```javascript
class Lotto {
   #numbers

   constructor(numbers) {
       this.#numbers = numbers
   }

   getNumbers() {
       return this.#numbers
   }
}

class LottoGame {
   play() {
       const lotto = new Lotto(...)

       // 숫자가 포함되어 있는지 확인한다.
       lotto.getNumbers().contains(number)

       // 당첨 번호와 몇 개가 일치하는지 확인한다.
       lotto.getNumbers().stream()...
   }
}
```
Lotto에서 데이터를 꺼내지(get) 말고 메시지를 던지도록 구조를 바꿔 데이터를 가지는 객체가 일하도록 한다. 이처럼 Lotto 객체에서 데이터를 꺼내(get) 사용하기보다는, 데이터가 가지고 있는 객체가 스스로 처리할 수 있도록 구조를 변경해야 한다. 아래와 같이 데이터를 외부에서 가져와(get) 처리하지 말고, 객체가 자신의 데이터를 스스로 처리하도록 메시지를 던지게 한다. 
```javascript
class Lotto {
   #numbers

   constructor(numbers) {
       this.#numbers = numbers
   }

   contains(number) {
       // 숫자가 포함되어 있는지 확인한다.
       return ...
   }

   matchCount(other) {
       // 당첨 번호와 몇 개가 일치하는지 확인한다.
       return ...
   }
}

class LottoGame {
   play() {
       const lotto = new Lotto(...)

       lotto.contains(number)
       lotto.matchCount(...)
   }
}
```

#### 6. 필드(인스턴스 변수)의 수를 줄이기 위해 노력한다.
필드의 수가 많아지면 객체의 복잡도가 증가하고, 관리가 어려워지며, 버그가 발생할 가능성도 높아진다. 따라서 필드에 중복이 있거나 불필요한 필드가 없는지 확인하고, 이를 최소화한다.
```javascript
class LottoResult {
   #result = new Map()
   #profitRate
   #totalPrize
}
```
위 객체의 profitRate와 totalPrize는 등수 별 당첨 내역(result)만 있어도 모두 구할 수 있는 값이다. 따라서 위 객체는 다음과 같이 하나의 필드만으로 구현할 수 있다.
```javascript
class LottoResult {
   #result = new Map()

   calculateProfitRate() { ... }

   calculateTotalPrize() { ... }
}
```

#### 7. 성공하는 케이스 뿐만 아니라 예외 케이스도 테스트한다.
테스트를 작성할 때 성공하는 케이스만 집중하는 경우가 많지만, 예외 상황에 대한 테스트도 중요하다. 특히 프로그램에서 결함이 자주 발생하는 경계값이나 잘못된 입력에 대한 테스트를 꼼꼼히 작성하여 예기치 않은 오류를 방지해야 한다. 
```javascript
test("보너스 번호가 당첨 번호와 중복되는 경우에 대한 예외 처리", () => {
   mockQuestions( ["1000", "1,2,3,4,5,6", "6"]);
   expect(() => {
       const app = new App();
       app.play();
   }).toThrow("[ERROR]");
});
```

#### 8. 테스트 코드도 코드다.
테스트 코드 역시 코드의 일환이므로, 리팩터링을 통해 지속적으로 개선해 나가는 것이 중요하다. 특히, 반복적으로 수행하는 부분이 있다면 중복을 제거하여 유지보수성을 높이고 가독성을 향상시켜야 한다. 단순히 파라미터 값만 바뀌는 경우라면, 파라미터화된 테스트를 통해 중복을 줄일 수 있다.
```javascript
test.each([["999"], ["0"], ["-123"]])("천원 미만의 금액에 대한 예외 처리", (input) => {
   expect(() => {
     const app = new App(input);
     app.play();
   }).toThrow();
 }
);
```

#### 9. 테스트를 위한 코드는 구현 코드에서 분리되어야 한다.
테스트를 위해 구현 코드를 변경하는 것은 좋지 않은 습관이다. 테스트 코드를 작성하다 보면 테스트를 더 쉽게 하기 위해 접근 제어자를 변경하거나, 테스트에서만 사용되는 메서드를 구현 코드에 추가하는 경우가 있다. 그러나 이렇게 하면 구현 코드가 테스트에 종속되며, 캡슐화가 깨지고 코드의 일관성이 저해된다. 아래 두 케이스는 특히 유의하자.
* 테스트를 위해 # prefix를 바꾸는 경우
* 테스트 코드에서만 사용되는 메서드

#### 10. 단위 테스트하기 어려운 코드를 단위 테스트하기
아래 코드는 Random 때문에 Lotto에 대한 단위 테스트를 하기 힘들다. 단위 테스트가 가능하도록 리팩터링한다면 어떻게 하는 것이 좋을까?
```javascript
const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
   #numbers

   constructor() {
       this.#numbers = Randoms.pickUniqueNumbersInRange(1, 45, 6)
   }
}
---
class LottoMachine {
   execute() {
       const lotto = new Lotto()
   }
}
```
올바른 로또 번호가 생성되는 것을 테스트하기 어렵다. 테스트하기 어려운 것을 클래스 내부가 아닌 외부로 분리하는 시도를 해 본다.
```javascript
const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
   #numbers

   constructor(numbers) {
       this.#numbers = numbers
   }
}

class LottoMachine {
   execute() {
       const numbers = Randoms.pickUniqueNumbersInRange(1, 45, 6)
       const lotto = new Lotto(numbers)
   }
}
```
위 코드는 A 상황을 B로 바꾼 것이다. 
```
A.
Application(테스트하기 어려움)
     ⬇️
LottoMachine(테스트하기 어려움)
     ⬇️
Lotto(테스트하기 어려움) ➡️ Randoms(테스트하기 어려움)
```
```
B.
Application(테스트하기 어려움) 
     ⬇️
LottoMachine(테스트하기 어려움) ➡️ Randoms(테스트하기 어려움) 
     ⬇️
Lotto(테스트하기 쉬움)
```
단위 테스트하기 어려운 코드를 단위 테스트하기 쉽게 만드는 방법은 위 설명처럼 테스트하기 어려운 의존성을 외부에서 주입하거나 분리하여 테스트 가능한 상태로 만드는 것이다. 남은 LottoMachine은 어떻게 테스트하기 쉽게 바꿀 수 있을지 고민해 본다.

</details>

## :clipboard: 구현할 기능 목록

### 1. 파일 불러오기 및 사용자 입력
- [X] products.md의 상품 목록 파일 불러오기
- [X] promotions.md의 행사 목록 파일 불러오기
- [X] 구매할 상품과 수량 입력 (상품명, 수량은 하이픈(-)으로, 개별 상품은 대괄호([])로 묶어 쉼표(,)로 구분한다.)
- [X] 프로모션 적용 여부 [Y,N]
- [X] 프로모션 적용이 가능한 상품에 대해 고객이 해당 수량보다 적게 가져온 경우, 그 수량만큼 추가 여부 [Y,N]
- [X] 증정 받을 수 있는 상품 추가 여부 [Y,N]
- [X] 프로모션 재고가 부족하여 일부 수량을 프로모션 혜택 없이 결제해야 하는 경우, 일부 수량에 대해 정가로 결제할지 여부 [Y,N]
- [X] 멤버십 할인 적용 여부 [Y,N]
- [X] 추가 구매 여부 [Y,N]

#### '구매할 상품과 수량' 입력에 대한 예외처리
- [X] '구매할 상품과 수량' 형식이 올바르지 않을 경우 [ERROR]
- [X] '구매할 상품과 수량'이 존재하지 않는 상품일 경우 [ERROR]
- [X] '구매할 상품과 수량'이 공백일 경우 [ERROR]
- [X] '구매할 상품과 수량'이 재고 수량을 초과한 경우 [ERROR]
- [X] '구매할 상품과 수량'이 기타 잘못된 입력의 경우 [ERROR]

#### '입력값 [Y, N]' 입력에 대한 예외처리
- [X] Y혹은 N이 아닌 다른 값일 경우 [ERROR]
- [X] 공백일 경우 [ERROR]
- [X] 소문자를 입력했을 경우 [ERROR]
- [X] 'YN', 'YY' 등 잘못된 조합을 입력했을 경우 [ERROR]
- [X] 특수문자를 입력했을 경우 [ERROR]

### 2. 사용자 출력
- [X] 환영 인사를 출력한다.
- [X] 프로모션 적용이 가능한 상품에 대해 고객이 해당 수량만큼 가져오지 않았을 경우, 혜택에 대한 안내 메시지를 출력한다.
- [X] 프로모션 재고가 부족하여 일부 수량을 프로모션 혜택 없이 결제해야 하는 경우, 일부 수량에 대해 정가로 결제할지 여부에 대한 안내 메시지를 출력한다.
- [X] 멤버십 할인 적용 여부를 확인하기 위해 안내 문구를 출력한다.
- [X] 구매 상품 내역, 증정 상품 내역, 금액 정보를 출력한다.
- [X] 추가 구매 여부를 확인하기 위해 안내 문구를 출력한다.

## :memo: 기능 구현 순서

### 1. 환영 인사와 보유 상품 목록을 출력한다.
* 상품 목록의 경우 public/products.md 파일을 이용하여 출력한다.
```
안녕하세요. W편의점입니다.
현재 보유하고 있는 상품입니다.
- 콜라 1,000원 10개 탄산2+1
- 콜라 1,000원 10개
- 사이다 1,000원 8개 탄산2+1
- 사이다 1,000원 7개
- 오렌지주스 1,800원 9개 MD추천상품
- 오렌지주스 1,800원 재고 없음
- 탄산수 1,200원 5개 탄산2+1
- 탄산수 1,200원 재고 없음
.....
```
### 2. 사용자에게 구매할 상품명과 수량을 입력받는다.
* 상품명, 수량은 하이픈(-)으로, 개별 상품은 대괄호([])로 묶어 쉼표(,)로 구분한다.
```
구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])
```
<img width="400" alt="input_purchase_1" src="https://github.com/user-attachments/assets/2a696c2d-d68d-47b8-91c2-e0dd9effa35f">
<img width="400" alt="input_purchase_2" src="https://github.com/user-attachments/assets/ac12a964-54c0-4bae-8a72-9e2fc39c568b">

#### 예외처리
```
- 형식이 올바르지 않을 경우 '[ERROR] 올바르지 않은 형식으로 입력했습니다. 다시 입력해 주세요.'
- 존재하지 않는 상품일 경우 '[ERROR] 존재하지 않는 상품입니다. 다시 입력해 주세요.'
- 공백일 경우 '[ERROR] 입력값이 공백입니다. 다시 입력해 주세요.'
- 재고 수량을 초과한 경우 '[ERROR] 재고 수량을 초과하여 구매할 수 없습니다. 다시 입력해 주세요.'
- 기타 잘못된 입력의 경우 '[ERROR] 잘못된 입력입니다. 다시 입력해 주세요.'
```

### 3. 프로모션 적용 여부를 파악하며 'Y or 'N'을 입력받는다.
* 프로모션 목록의 경우 public/promotions.md 파일을 이용한다.

#### 3-1) 프로모션 적용이 가능한 상품에 대해 고객이 해당 수량보다 적게 가져온 경우
```
현재 사이다은(는) 1개를 무료로 더 받을 수 있습니다. 추가하시겠습니까? (Y/N)
```
<img width="450" alt="input_promotion_1" src="https://github.com/user-attachments/assets/42e92fb8-4712-4a05-84a9-6dff5589adcd">

* Y: 증정 받을 수 있는 상품을 추가한다.
* N: 증정 받을 수 있는 상품을 추가하지 않는다.

#### 3-2) 프로모션 재고가 부족하여 일부 수량을 프로모션 혜택 없이 결제해야 하는 경우
```
구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])
[사이다-9]

현재 사이다 3개는 프로모션 할인이 적용되지 않습니다. 그래도 구매하시겠습니까? (Y/N)
```
<img width="300" alt="input_promotion_2" src="https://github.com/user-attachments/assets/9636a0b7-e3f8-485c-b536-404020946ee5">

* Y: 일부 수량에 대해 정가로 결제한다.
* N: 정가로 결제해야하는 수량만큼 제외한 후 결제를 진행한다.

### 4. 멤버쉽 할인 적용 여부를 파악하며 'Y or 'N'을 입력받는다.
```
멤버십 할인을 받으시겠습니까? (Y/N)
```
<img width="400" alt="input_membership_1" src="https://github.com/user-attachments/assets/c87de22a-2fb7-436f-be73-3585726375a2">


* Y: 멤버십 할인을 적용한다.
* N: 멤버십 할인을 적용하지 않는다.

### 5. 구매 상품 내역, 증정 상품 내역, 금액 정보를 출력한다.
```
==============W 편의점================
상품명		수량	금액
콜라		3 	3,000
에너지바 		5 	10,000
=============증	정===============
콜라		1
====================================
총구매액		8	13,000
행사할인			-1,000
멤버십할인			-3,000
내실돈			 9,000
```

### 6. 추가 구매 여부를 확인하기 위해 안내 문구를 출력한다.
```
감사합니다. 구매하고 싶은 다른 상품이 있나요? (Y/N)
```
<img width="300" alt="input_result_1" src="https://github.com/user-attachments/assets/9b6ae20b-7bbc-4bb3-a32a-0e9d5c543344">

#### 3번, 4번, 6번 'Y or 'N' 입력값에 대한 예외처리
```
- Y혹은 N이 아닌 다른 값일 경우 '[ERROR] 입력값은 Y혹은 N을 입력하여야 합니다.'
- 공백일 경우 '[ERROR] 입력값이 공백입니다. 다시 입력해 주세요.'
- 소문자를 입력했을 경우 '[ERROR] 입력값은 대문자여야 합니다.'
- 'YN', 'YY' 등 잘못된 조합을 입력했을 경우 '[ERROR] 입력값은 Y혹은 N을 입력하여야 합니다.'
- 특수문자를 입력했을 경우 '[ERROR] 입력값은 Y혹은 N을 입력하여야 합니다.'
```

## :file_folder: 패키지 구조 및 파일명
```
- src
  - 📂 contants
  - - 📂 delimiters
  - - - 📜 delimiters.js
  - - 📂 flag
  - - - 📜 flag.js
  - - 📂 messages
  - - - 📜 convenienceStoreMessages.js
  - - - 📜 errorMessages.js
  - - 📂 promotion
  - - - 📜 promotion.js
  - 📂 controllers
  - - 📜 ConvenienceStoreContoller.js
  - 📂 errors
  - - 📜 AppError.js
  - 📂 models
  - - 📜 InventoryManagement.js
  - - 📜 Promotions.js  
  - - 📜 Receipt.js  
  - 📂 services
  - - 📜 getLoadProducts.js
  - - 📜 getLoadPromotions.js
  - 📂 utils
  - - 📜 asyncFunction.js
  - - 📜 collection.js
  - - 📜 date.js
  - - 📜 loadFile.js
  - - 📜 replacePurchaseProducts.js
  - 📂 validation
  - - 📜 InventoryValidation.js
  - - 📜 WhetherValidation.js  
  - 📂 views
  - - 📜 InputView.js
  - - 📜 OutputView.js
  - App.js
  - index.js
```

### ConvenienceStoreContoller.js [편의점 미션의 메인이 되는 클래스]
* convenienceStoreRun
- 편의점 미션의 전체적인 프로세스를 담당하는 함수입니다.
* printStartMessage
- 사용자에게 환영 인사를 출력합니다.
* getProducts
- products.md 파일에 있는 상품 목록을 받아 this.#products에 할당합니다. 추가로 재시작을 할 경우에는 실행되지 않습니다.
* printProductsList
- 사용자에게 상품명, 가격, 프로모션 이름, 재고를 출력합니다.
* getPurchaseProducts
- 사용자에게 구매할 상품명, 갯수를 입력받아 예외처리를 진행하고 this.#purchaseProducts 할당합니다.
* getPromotionProducts
- promotions.md 파일에 있는 프로모션 목록을 받아 구매한 상품 목록과 비교하여 프로모션이 적용되는 상품 목록을 this.#promotionProducts에 할당합니다.
* getWhetherResult
- this.#promotionProducts 데이터를 이용하여 프로모션 적용 여부를 사용자로부터 입력받아 값을 update 합니다.
* getIsMembership
- 사용자에게 멤버쉽 할인 여부를 입력받아 예외처리 후 this.#isMembership에 할당합니다.
* getReceipt
- 구매 상품 내역, 증정 상품 내역, 금액 정보를 계산합니다.
* printReceipt
- 계산된 정보(영수증)를 사용자에게 출력합니다.
* printAdditionalPurchase
- 사용자에게 추가 구매 여부를 입력받아 예외처리 후 프로그램 재시작 및 종료합니다.

### InventoryManagement.js [편의점 재고 클래스]
* getPurchaseProducts
- 구매 상품 목록에 가격 정보를 추가하여 반환합니다.
* updateProducts
- 구매처리를 완료한 후 재고를 업데이트합니다.
* inventoryValidate
- 입력한 구매상품의 예외처리를 진행합니다.
* addPricesToPurchases
- 구매한 상품 객체에 가격을 맵핑하여 추가합니다.
* findProductByName
- 구매한 상품의 이름을 통해 상품 데이터를 조회합니다.
* processPurchase
- 일반상품, 프로모션 상품을 구분하여 갯수를 조회합니다.
* updateProductQuantity
- 구매를 통해 이루어진 상품의 재고를 업데이트합니다.
* findMatchingProducts
- 상품목록 중 프로모션이 있는 상품만 필터링합니다.

### Promotions.js [프로모션 클래스]
* getIsPromotionProducts
- 구매 상품 중 프로모션 적용이 필요한 상품들을 필터링합니다.
* getFilterPromotionProducts
- 프로모션이 적용된 최종 상품 목록을 생성합니다.
* updatePurchaseProductsByPromotion
- 프로모션 적용 결과에 따라 구매 상품 목록을 업데이트합니다.
* calculateFilteredProduct
- 프로모션이 적용된 상품의 갯수를 조회하여 객체로 반환합니다.
* applyPromotionUpdate
- 프로모션 타입을 조회하여 이에 해당하는 값을 반환합니다.
Type:1 = discount, Type:2 = plus
* processPromotionProduct
- 상품의 프로모션 적용 가능 여부를 검증하고 결과를 계산합니다.
* determinePromotionResult
- 프로모션 적용 조건을 확인하고 결과를 결정합니다.
* calculateExcessQuantity
- 초과 구매 수량을 계산합니다.

### Receipt.js [영수증 클래스]
* getReceiptAmount
- 영수증에 들어갈 총액, 할인액, 정상가 상품 금액, 멤버십 할인액, 최종 금액을 계산하여 객체로 반환합니다.
* getTotalQuantity
- 구매한 모든 상품의 수량을 계산하여 반환합니다.
* calculateAmounts
- 정상가 상품과 프로모션 상품의 총 금액을 계산하여 반환합니다.
* getDiscountAmount
- 프로모션으로 인한 총 할인 금액을 계산하여 반환합니다.
* getMembershipDiscount
- 정상가 상품에 대해서만 멤버십 할인 금액을 계산하여 반환합니다.

### getLoadProducts.js [상품 목록 불러오기 함수]
- products.md 파일을 불러온 후 값을 형식에 따라 수정한 후 반환합니다.

### getLoadPromotions.js [프로모션 목록 불러오기 함수]
- promotions.md 파일을 불러온 후 값을 형식에 따라 수정한 후 반환합니다.

### InventoryValidation.js [재고 관련 예외처리 클래스]

### WhetherValidation.js ['Y or N' 입력값 예외처리 클래스]

## :test_tube: 테스트 결과
<div style="display: flex; flex-direction: row;">
    <img src="https://github.com/user-attachments/assets/e09c81c2-04f1-42c6-8142-7da193df2f5f" style="width: 400px;">
    <img src="https://github.com/user-attachments/assets/d80fc0ce-f3bd-47c5-8ebf-cb2ea948f6a3" style="width: 400px;">
    <img src="https://github.com/user-attachments/assets/68024ebd-38d7-4b60-b34a-513919162896" style="width: 800px;">
</div>

## :computer: 커밋 메세지 컨벤션
```
- Allowed <type>
- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)
```

## :high_brightness: 기능 및 프로그래밍 요구 사항

### 기능 요구 사항
구매자의 할인 혜택과 재고 상황을 고려하여 최종 결제 금액을 계산하고 안내하는 결제 시스템을 구현한다.
* 사용자가 입력한 상품의 가격과 수량을 기반으로 최종 결제 금액을 계산한다.
    * 총구매액은 상품별 가격과 수량을 곱하여 계산하며, 프로모션 및 멤버십 할인 정책을 반영하여 최종 결제 금액을 산출한다.
* 구매 내역과 산출한 금액 정보를 영수증으로 출력한다.
* 영수증 출력 후 추가 구매를 진행할지 또는 종료할지를 선택할 수 있다.
* 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

#### 재고 관리
* 각 상품의 재고 수량을 고려하여 결제 가능 여부를 확인한다.
* 고객이 상품을 구매할 때마다, 결제된 수량만큼 해당 상품의 재고에서 차감하여 수량을 관리한다.
* 재고를 차감함으로써 시스템은 최신 재고 상태를 유지하며, 다음 고객이 구매할 때 정확한 재고 정보를 제공한다.

#### 프로모션 할인
* 오늘 날짜가 프로모션 기간 내에 포함된 경우에만 할인을 적용한다.
* 프로모션은 N개 구매 시 1개 무료 증정(Buy N Get 1 Free)의 형태로 진행된다.
* 1+1 또는 2+1 프로모션이 각각 지정된 상품에 적용되며, 동일 상품에 여러 프로모션이 적용되지 않는다.
* 프로모션 혜택은 프로모션 재고 내에서만 적용할 수 있다.
* 프로모션 기간 중이라면 프로모션 재고를 우선적으로 차감하며, * 프로모션 재고가 부족할 경우에는 일반 재고를 사용한다.
* 프로모션 적용이 가능한 상품에 대해 고객이 해당 수량보다 적게 가져온 경우, 필요한 수량을 추가로 가져오면 혜택을 받을 수 있음을 안내한다.
* 프로모션 재고가 부족하여 일부 수량을 프로모션 혜택 없이 결제해야 하는 경우, 일부 수량에 대해 정가로 결제하게 됨을 안내한다.

#### 멤버십 할인
* 멤버십 회원은 프로모션 미적용 금액의 30%를 할인받는다.
프로모션 적용 후 남은 금액에 대해 멤버십 할인을 적용한다.
* 멤버십 할인의 최대 한도는 8,000원이다.

#### 영수증 출력
* 영수증은 고객의 구매 내역과 할인을 요약하여 출력한다.
* 영수증 항목은 아래와 같다.
    * 구매 상품 내역: 구매한 상품명, 수량, 가격
    * 증정 상품 내역: 프로모션에 따라 무료로 제공된 증정 상품의 목록
    * 금액 정보
      * 총구매액: 구매한 상품의 총 수량과 총 금액
      * 행사할인: 프로모션에 의해 할인된 금액
      * 멤버십할인: 멤버십에 의해 추가로 할인된 금액
      * 내실돈: 최종 결제 금액
* 영수증의 구성 요소를 보기 좋게 정렬하여 고객이 쉽게 금액과 수량을 확인할 수 있게 한다.

### 프로그래밍 요구 사항 1
* Node.js 20.17.0 버전에서 실행 가능해야 한다.
* 프로그램 실행의 시작점은 App.js의 run()이다.
* package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
프로그램 종료 시 process.exit()를 호출하지 않는다.
* 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
* 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
* 기본적으로 JavaScript Style Guide를 원칙으로 한다.

### 프로그래밍 요구 사항 2
* indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
* 3항 연산자를 쓰지 않는다.
* 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
* Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.

### 프로그래밍 요구 사항 3
* 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
* 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
* else를 지양한다.
때로는 if/else, when문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
* 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI(System.out, System.in, Scanner) 로직은 제외한다.
단위 테스트 작성이 익숙하지 않다면 LottoTest를 참고하여 학습한 후 테스트를 작성한다.

### 프로그래밍 요구 사항 4
* 함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다.
    * 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
* 입출력을 담당하는 클래스를 별도로 구현한다.
    * 아래 InputView, OutputView 클래스를 참고하여 입출력 클래스를 구현한다.
    * 클래스 이름, 메소드 반환 유형, 시그니처 등은 자유롭게 수정할 수 있다.
    ```javascript
    const InputView = {
        async readItem() {
            const input = await MissionUtils.Console.readLineAsync("구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])");
            // ...
        }
        // ...
    }
    ```
    ```javascript
    const OutputView = {
        printProducts() {
            MissionUtils.Console.print("- 콜라 1,000원 10개 탄산2+1");
            // ...
        }
        // ...
    }
    ```    