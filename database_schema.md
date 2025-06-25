# Схема базы данных Shop5

## 1. Таблица `users`
Основная таблица пользователей системы.

| Столбец | Тип данных | Nullable | По умолчанию | Макс. длина | Описание |
|---------|------------|----------|--------------|-------------|----------|
| id | integer | NO | nextval('users_id_seq') | - | Первичный ключ |
| email | text | NO | - | - | Email пользователя |
| password | text | NO | - | - | Хешированный пароль |
| name | text | YES | - | - | Имя пользователя |
| role | varchar | NO | 'BUYER' | 255 | Роль пользователя |
| image | varchar | YES | - | 255 | Аватар пользователя |
| email_verified | timestamp with time zone | YES | - | - | Время верификации email |
| phone | varchar | YES | - | 255 | Телефон |
| address | text | YES | - | - | Адрес |
| city | varchar | YES | - | 255 | Город |
| country | varchar | YES | - | 255 | Страна |
| postal_code | varchar | YES | - | 255 | Почтовый индекс |
| is_active | boolean | NO | true | - | Активность пользователя |
| last_login | timestamp with time zone | YES | - | - | Последний вход |
| created_at | timestamp with time zone | NO | now() | - | Дата создания |
| updated_at | timestamp with time zone | NO | now() | - | Дата обновления |

## 2. Таблица `products`
Таблица товаров в магазине.

| Столбец | Тип данных | Nullable | По умолчанию | Макс. длина | Описание |
|---------|------------|----------|--------------|-------------|----------|
| id | integer | NO | nextval('products_id_seq') | - | Первичный ключ |
| name | text | NO | - | - | Название товара |
| description | text | YES | - | - | Описание товара |
| price | numeric | NO | - | - | Цена товара |
| seller_id | integer | YES | - | - | ID продавца (FK to users) |
| created_at | timestamp with time zone | YES | now() | - | Дата создания |
| updated_at | timestamp with time zone | YES | now() | - | Дата обновления |

## 3. Таблица `product_images`
Изображения товаров.

| Столбец | Тип данных | Nullable | По умолчанию | Макс. длина | Описание |
|---------|------------|----------|--------------|-------------|----------|
| id | integer | NO | nextval('product_images_id_seq') | - | Первичный ключ |
| product_id | integer | YES | - | - | ID товара (FK to products) |
| url | text | NO | - | - | URL изображения |

## 4. Таблица `cart_items`
Элементы корзины покупок.

| Столбец | Тип данных | Nullable | По умолчанию | Макс. длина | Описание |
|---------|------------|----------|--------------|-------------|----------|
| id | integer | NO | nextval('cart_items_id_seq') | - | Первичный ключ |
| user_id | integer | YES | - | - | ID пользователя (FK to users) |
| product_id | integer | YES | - | - | ID товара (FK to products) |
| quantity | integer | NO | - | - | Количество товара |
| size | text | YES | - | - | Размер товара |
| color | text | YES | - | - | Цвет товара |
| price_at_addition | numeric | NO | - | - | Цена на момент добавления |
| created_at | timestamp with time zone | NO | now() | - | Дата создания |
| updated_at | timestamp with time zone | NO | now() | - | Дата обновления |

## 5. Таблица `seller_applications`
Заявки на становление продавцом.

| Столбец | Тип данных | Nullable | По умолчанию | Макс. длина | Описание |
|---------|------------|----------|--------------|-------------|----------|
| id | integer | NO | nextval('seller_applications_id_seq') | - | Первичный ключ |
| user_id | integer | NO | - | - | ID пользователя (FK to users) |
| company_name | varchar | NO | - | 255 | Название компании |
| company_description | text | NO | - | - | Описание компании |
| business_type | varchar | YES | - | 100 | Тип бизнеса |
| tax_id | varchar | YES | - | 100 | Налоговый ID |
| website | varchar | YES | - | 255 | Веб-сайт |
| phone | varchar | YES | - | 50 | Телефон |
| address | text | YES | - | - | Адрес |
| status | varchar | NO | 'PENDING' | 50 | Статус заявки |
| rejection_reason | text | YES | - | - | Причина отклонения |
| review_notes | text | YES | - | - | Заметки рецензента |
| reviewed_by | integer | YES | - | - | ID рецензента (FK to users) |
| reviewed_at | timestamp with time zone | YES | - | - | Дата рецензирования |
| created_at | timestamp with time zone | NO | now() | - | Дата создания |
| updated_at | timestamp with time zone | NO | now() | - | Дата обновления |

## Связи между таблицами

1. **users → products**: Один продавец может иметь много товаров (seller_id)
2. **products → product_images**: Один товар может иметь много изображений
3. **users → cart_items**: Один пользователь может иметь много элементов корзины
4. **products → cart_items**: Один товар может быть в корзине у многих пользователей
5. **users → seller_applications**: Один пользователь может подать заявку на становление продавцом
6. **users → seller_applications (reviewed_by)**: Один админ может рецензировать много заявок

## Роли пользователей
- **BUYER**: Покупатель (по умолчанию)
- **SELLER**: Продавец
- **ADMIN**: Администратор (предположительно)

## Статусы заявок продавцов
- **PENDING**: Ожидает рассмотрения (по умолчанию)
- **APPROVED**: Одобрено
- **REJECTED**: Отклонено
