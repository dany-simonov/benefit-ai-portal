# 🏗️ Архитектура Benefit AI Portal

## Обзор системы

Benefit AI Portal построен на современной микросервисной архитектуре с использованием React, TypeScript и AI-технологий для персонализации рекомендаций.

## Архитектурная диаграмма

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   AI Engine     │
│   (React/TS)    │◄──►│   (Node.js)     │◄──►│   (Python)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   PostgreSQL    │    │   Redis Cache   │    │   ML Models     │
│   (Primary DB)  │    │   (Session)     │    │   (TensorFlow)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Компоненты системы

### 1. Frontend Layer
- **React 18** с TypeScript для типобезопасности
- **Vite** для быстрой сборки и HMR
- **Tailwind CSS** для стилизации
- **Radix UI** для доступных компонентов
- **React Router** для навигации
- **React Query** для управления состоянием

### 2. Backend Layer
- **Node.js** с Express.js
- **TypeScript** для типобезопасности
- **JWT** для аутентификации
- **bcrypt** для хеширования паролей
- **CORS** для безопасности

### 3. Database Layer
- **PostgreSQL 15** как основная БД
- **Redis** для кэширования сессий
- **Prisma ORM** для работы с БД

### 4. AI/ML Layer
- **Python 3.11** для ML моделей
- **TensorFlow/Keras** для нейронных сетей
- **Scikit-learn** для классических алгоритмов
- **Pandas/Numpy** для обработки данных

## Диаграмма базы данных (ERD)

```mermaid
erDiagram
    USERS {
        uuid id PK
        string email UK
        string name
        string department
        int points_balance
        timestamp created_at
        timestamp updated_at
    }
    
    BENEFIT_CATEGORIES {
        uuid id PK
        string name
        string icon
        int total_limit
        int used_points
        boolean is_active
    }
    
    USER_ALLOCATIONS {
        uuid id PK
        uuid user_id FK
        uuid category_id FK
        int allocated_points
        int used_points
        timestamp created_at
    }
    
    PURCHASE_HISTORY {
        uuid id PK
        uuid user_id FK
        uuid category_id FK
        string benefit_name
        int amount
        int points
        timestamp purchase_date
        int frequency
        int satisfaction
    }
    
    RECOMMENDATIONS {
        uuid id PK
        uuid user_id FK
        string type
        string title
        string description
        int confidence
        string priority
        json data
        timestamp created_at
    }
    
    USER_FEEDBACK {
        uuid id PK
        uuid user_id FK
        uuid recommendation_id FK
        string feedback_type
        timestamp created_at
    }
    
    USERS ||--o{ USER_ALLOCATIONS : "has"
    USERS ||--o{ PURCHASE_HISTORY : "makes"
    USERS ||--o{ RECOMMENDATIONS : "receives"
    USERS ||--o{ USER_FEEDBACK : "provides"
    BENEFIT_CATEGORIES ||--o{ USER_ALLOCATIONS : "allocated_to"
    BENEFIT_CATEGORIES ||--o{ PURCHASE_HISTORY : "contains"
    RECOMMENDATIONS ||--o{ USER_FEEDBACK : "receives"
```

## Диаграмма последовательности (UML)

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant B as Backend
    participant DB as PostgreSQL
    participant AI as AI Engine
    participant R as Redis

    U->>F: Вход в систему
    F->>B: POST /auth/login
    B->>DB: Проверка пользователя
    DB-->>B: User data
    B->>R: Сохранение сессии
    B-->>F: JWT token
    F-->>U: Успешный вход

    U->>F: Запрос рекомендаций
    F->>B: GET /recommendations
    B->>DB: Получение истории покупок
    DB-->>B: Purchase history
    B->>AI: Анализ данных
    AI-->>B: Рекомендации
    B->>DB: Сохранение рекомендаций
    B-->>F: Recommendations data
    F-->>U: Отображение рекомендаций

    U->>F: Обратная связь
    F->>B: POST /feedback
    B->>DB: Сохранение feedback
    B->>AI: Обновление модели
    B-->>F: Success response
    F-->>U: Подтверждение
```

## Технологический стек

### Frontend
- **React 18.2** - Основной фреймворк
- **TypeScript 5.0** - Типизация
- **Vite 5.0** - Сборщик
- **Tailwind CSS 3.3** - Стили
- **Radix UI** - Компоненты
- **React Router 6.8** - Маршрутизация
- **React Query 5.0** - Управление состоянием

### Backend
- **Node.js 20.0** - Runtime
- **Express.js 4.18** - Web framework
- **TypeScript 5.0** - Типизация
- **Prisma 5.0** - ORM
- **JWT** - Аутентификация
- **bcrypt** - Хеширование

### Database
- **PostgreSQL 15** - Основная БД
- **Redis 7.0** - Кэш
- **pgAdmin** - Администрирование

### AI/ML
- **Python 3.11** - ML runtime
- **TensorFlow 2.13** - Нейронные сети
- **Scikit-learn 1.3** - Классические алгоритмы
- **Pandas 2.0** - Обработка данных
- **NumPy 1.24** - Математические операции

### DevOps
- **Docker** - Контейнеризация
- **GitHub Actions** - CI/CD
- **Vercel** - Deployment
- **Sentry** - Мониторинг ошибок

## Принципы архитектуры

### 1. Микросервисная архитектура
- Разделение ответственности между сервисами
- Независимое развертывание
- Масштабируемость компонентов

### 2. Event-Driven Architecture
- Асинхронная обработка событий
- Слабая связанность компонентов
- Высокая производительность

### 3. API-First подход
- RESTful API для всех операций
- OpenAPI спецификации
- Версионирование API

### 4. Безопасность
- JWT токены для аутентификации
- HTTPS для всех соединений
- Валидация входных данных
- Защита от SQL-инъекций

### 5. Производительность
- Кэширование с Redis
- Оптимизация запросов к БД
- Lazy loading компонентов
- CDN для статических ресурсов

## Масштабирование

### Горизонтальное масштабирование
- Load balancer для распределения нагрузки
- Репликация PostgreSQL
- Кластеризация Redis
- Микросервисы в Docker контейнерах

### Вертикальное масштабирование
- Увеличение ресурсов серверов
- Оптимизация запросов к БД
- Кэширование на всех уровнях
- Сжатие данных

## Мониторинг и логирование

### Метрики
- Prometheus для сбора метрик
- Grafana для визуализации
- Health checks для всех сервисов
- Performance monitoring

### Логирование
- Structured logging с JSON
- Centralized log aggregation
- Error tracking с Sentry
- Audit trails для безопасности 