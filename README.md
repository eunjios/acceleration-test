## GPU 가속 테스트

> GPU 가속을 사용했을 때 렌더링 성능을 확인하기 위한 실험

### GPU 가속

#### 기본 개념

- 렌더링 과정 : Render tree → Layout → **Update Layer Tree** → Paint → Composite
- 여기서 레이어를 여러 개 생성하고, 각각 처리한 다음에 Composite 단계에서 이 레이어들을 하나로 합성
- 레이어는 Paint Layer 와 Graphics Layer 로 나뉘는데, 이 중 Graphics Layer 를 GPU 가 처리함 → **GPU 가속**

#### 어떻게 GPU 가속이 사용되나?

- **3D transform** 속성 (translate3d, rotate3d, ...) 존재할 때
- transition, animation 속성이 존재할 때
- will-change 설정했을 때 (무분별한 사용 X)

#### 장점/단점

- 장점 : 렌더링 성능 향상
- 단점 : 메모리 사용량 증가 및 배터리 사용량 증가

### 실험 내용

|             |       일반       |       GPU        |
| :---------: | :--------------: | :--------------: |
|  transform  |  left, top 변경  | translate3d 변경 |
|  색상 변경  | background-color |      filter      |
| will-change |        -         |        O         |
