# 🤖 AI/ML Модели — Benefit AI Portal

## Обзор

AI/ML подсистема реализована на TypeScript и полностью готова к интеграции с реальным AI API. Все модули построены по принципу масштабируемости и расширяемости, содержат подробные комментарии, типы и заглушки для быстрой интеграции.

## Архитектура моделей

- **Collaborative Filtering** — [models/collaborativeFiltering.ts](../models/collaborativeFiltering.ts)
- **Content-Based Filtering** — [models/contentBased.ts](../models/contentBased.ts)
- **Hybrid Recommender** — [models/hybridRecommender.ts](../models/hybridRecommender.ts)
- **Random Forest (заглушка)** — [models/randomForest.ts](../models/randomForest.ts)
- **Gradient Boosting (заглушка)** — [models/gradientBoosting.ts](../models/gradientBoosting.ts)
- **Neural Network (заглушка)** — [models/neuralNetwork.ts](../models/neuralNetwork.ts)

## Принципы реализации

- Все модели реализованы как заглушки с типами и псевдокодом на TypeScript
- Поддержка мок-данных для тестирования ([../mocks/](../mocks/))
- Готовность к интеграции с реальным AI API (см. [api/aiApi.ts](../api/aiApi.ts))
- Подробные комментарии и TODO для быстрой доработки

## Пример структуры модели (TypeScript)
```ts
// collaborativeFiltering.ts
/**
 * Collaborative Filtering Model (Stub)
 * TODO: Реализовать интеграцию с реальным AI API
 */
export function getCollaborativeRecommendations(userId: string): Recommendation[] {
  // TODO: Вызов внешнего AI API
  return [];
}
```

## Документация и примеры
- [ARCHITECTURE.md](./ARCHITECTURE.md) — архитектура AI/ML слоя
- [ALGORITHMS.md](./ALGORITHMS.md) — описание алгоритмов
- [API.md](./API.md) — описание API-интерфейсов
- [METRICS.md](./METRICS.md) — метрики качества
- [SECURITY.md](./SECURITY.md) — безопасность и приватность
- [CSV.md](./CSV.md) — обработка CSV

## Примечание
> Вся AI/ML-архитектура реализована на TypeScript, что обеспечивает целостность, прозрачность и простоту интеграции с любыми современными AI API и сервисами. Модули легко расширяются и адаптируются под задачи бизнеса. 