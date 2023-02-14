# Redux vs Zustand vs Jotai

Terry : 모두 활용해본 결과, Zustand가 아주 좋네요. :) (Jotai보다 사용성이 좋습니다.)
- Redux : 
    - (장점) Flux 패턴 공부에 좋습니다.
    - (장점) 정해진 양식이 명확하기 때문에 
    - (단점) thunk, saga 등등 의존성이 높습니다. boilerplate 코드도 대량임.
    - (단점) 개인적으로 너무 헤비하다고 생각합니다.
- Jotai
    - (장점) 심플합니다. atom 방식이라 더 그런듯합니다.
    - (장점) useState 식의 value, setValue를 주로 사용하는 경우라면 더 사용성이 좋습니다. 
    - (장점) 기본적으론 provider가 필요없습니다.
    - (장점) 다른 써드파티와 통합이 잘됩니다.
    - (단점) 다량의 store를 사용하기 불편합니다.
    - (단점) 커스텀 store를 사용하려면 provider가 결국 필요합니다.(defaultStore사용하는 경우는 필요없음)
    - (단점) 특정 도메인 혹은 store에 커스텀 메서드가 많이 필요한 경우 불편해짐.
    - (단점) defaultStore 선언 시점에 따라 subscribe 메서드의 오류가 발생합니다.

- Zustand
    - (장점) 심플합니다. store를 create하는 방식이 상당히 단순합니다.
    - (장점) provider가 전혀 필요없습니다. 대량의 store 선언도 가능합니다.
    - (장점) Flux패턴이지만 내부적으로 처리하기 때문에 이해하는데 복잡하지 않습니다.
    - (단점) 아직까진 없는듯...?합니다.

# 반응형 구현
### PC
<img width="1585" alt="image" src="https://user-images.githubusercontent.com/37768791/218679514-373864bd-e97d-417d-b26b-6e6ce2e2c589.png">

### Mobile
<img width="556" alt="image" src="https://user-images.githubusercontent.com/37768791/218679779-e19e036d-9f71-49af-9ac4-b2d32696afc4.png">