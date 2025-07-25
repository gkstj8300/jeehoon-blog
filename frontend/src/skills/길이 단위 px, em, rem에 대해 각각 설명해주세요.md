---
title: "길이 단위 px, em, rem에 대해 각각 설명해주세요"
regDate: "2025-07-07 02:16"
description: '길이 단위 px, em, rem에 대해 각각 설명해주세요'
thumbnailImage: 'https://d2ut7x8yqv441q.cloudfront.net/posts/ui_component.webp'
mainTag: 'React'
tags: ['css']
---

## 길이 단위 px, em, rem에 대해 각각 설명해주세요
px은 화면의 물리적인 픽셀 단위를 기준으로 한 고정 단위입니다. 이 값은 절대적인 크기를 나타내며, 요소의 크기가 고정되어 디바이스의 해상도나 사용자 설정에 영향을 받지 않습니다. 예를 들어, font-size: 16px으로 설정하면 항상 16픽셀 크기로 표시됩니다. 픽셀 단위는 간단하고 정확한 제어를 제공하지만, 사용자의 접근성 설정(예: 브라우저에서 텍스트 크기 확대)에 따라 조정되지 않아 유연성이 떨어질 수 있습니다.

em은 해당 요소에 현재 적용된(즉, 부모 요소 또는 현재 요소의) font-size를 기준으로 하는 상대 단위입니다. 기본적으로, 브라우저의 초기 폰트 크기가 16px이므로, 상속받은 기본값이 없을 경우 1em은 16px로 계산됩니다. 그러나 상위 요소에 따라 상대적으로 크기가 결정되므로, 계층 구조가 깊어질수록 값이 누적되어 예기치 않은 크기로 설정될 수 있습니다. 예를 들어, 부모 요소가 font-size: 20px이고 자식 요소가 font-size: 1.5em으로 설정되면, 자식의 실제 폰트 크기는 30px이 됩니다.

rem은 root em을 의미하며, 최상위 HTML 요소의 font-size를 기준으로 계산됩니다. 이는 em과 달리 요소 계층에 따라 크기가 누적되지 않으며, 전역적인 기준을 따릅니다. 예를 들어, HTML의 font-size가 16px로 설정되어 있다면, 1rem은 항상 16px로 계산됩니다. 따라서 rem은 전역적으로 일관된 상대적인 크기를 설정할 때 유용하며, 접근성 측면에서도 사용자 설정에 잘 대응한다는 장점이 있습니다.

### em과 rem이 모두 상대 단위라면, rem을 사용하지 않고 em을 사용해야 하는 경우는 언제인가요? 🤔
rem을 항상 사용하지 않고 em을 사용하는 경우는 특정 상황에서 해당 컨텍스트에 따라 상대적인 크기를 지정해야 하는 경우입니다. em은 부모 요소 또는 현재 요소의 font-size를 기준으로 크기가 결정되므로, 구성 요소 간의 비례적인 크기를 쉽게 조정할 수 있습니다. 예를 들어, 버튼 안의 텍스트와 패딩을 비율로 정의하고 싶을 때, 각각의 속성에 em을 사용하면 텍스트 크기를 조정될 때 패딩이 자연스럽게 비례적으로 조정되도록 할 수 있습니다.

반면, rem은 루트 요소를 기준으로 고정된 상대 크기를 제공하기 때문에 전역적인 일관성에는 적합하지만, 특정 컨텍스트에 맞춘 비례 조정이 필요한 경우에는 부적합할 수 있습니다.