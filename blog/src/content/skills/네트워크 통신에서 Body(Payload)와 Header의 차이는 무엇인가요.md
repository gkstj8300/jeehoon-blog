---
title: '네트워크 통신에서 Body(Payload)와 Header의 차이는 무엇인가요'
regDate: '2025-05-08 18:22'
description: '네트워크 통신에서 Body(Payload)와 Header의 차이는 무엇인가요'
thumbnailImage: ''
mainTag: '네트워크'
tags: ['네트워크']
---

## 네트워크 통신에서 Body(Payload)와 Header의 차이는 무엇인가요
Body와 Header의 가장 큰 차이는 정보(데이터)의 역할입니다.

Header는 데이터의 메타 정보를 담습니다. 즉, 데이터 자체가 아니라 데이터에 대한 컨텍스트 정보를 포함합니다. 이로써 수신자가 데이터를 어떻게 처리해야 할지 지침을 제공하는 역할을 합니다. 예를 들어, HTTP 요청이나 응답에서 Header에는 Content-Type, Authorization, Cache-Control과 같은 정보가 포함됩니다. 이는 정보의 유형, 인증 정보, 캐시 설정 등 컨텍스트 정보를 전달합니다.

반면 Body는 전송하려는 실제 데이터를 의미합니다. HTTP 요청에서 서버로 전달하는 JSON 데이터나 폼 데이터가 이에 해당됩니다. 일반적으로 헤더에 비해 복잡하고 용량이 큰 데이터를 포함합니다.

즉, Header는 네트워크 통신에서 안내 역할을, Body는 본질적인 데이터를 전달하는 역할을 맡고 있습니다. 이 둘의 조화가 효율적인 통신을 가능하게 합니다.

## Header 크기에 제한이 있나요? 🤔
HTTP 표준을 정의하는 문서인 HTTP RFC에 따르면, Header의 명시적인 크기 제한은 정해져 있지 않습니다. 다만, Apache, Nginx와 같은 웹서버 단에서 Header의 크기를 제한하고 있는 경우가 많습니다. 일반적으로, 8KB-16KB로 설정되어 있습니다. 이러한 제한값을 초과할 경우, 일반적으로 응답코드 413(Content Too Large)를 응답합니다.