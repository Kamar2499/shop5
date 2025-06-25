-- 1. Информация о таблице cart_items
SELECT column_name, data_type, is_nullable, column_default, character_maximum_length
FROM information_schema.columns 
WHERE table_name = 'cart_items' AND table_schema = 'public'
ORDER BY ordinal_position;

-- 2. Информация о таблице product_images  
SELECT column_name, data_type, is_nullable, column_default, character_maximum_length
FROM information_schema.columns 
WHERE table_name = 'product_images' AND table_schema = 'public'
ORDER BY ordinal_position;

-- 3. Информация о таблице products
SELECT column_name, data_type, is_nullable, column_default, character_maximum_length
FROM information_schema.columns 
WHERE table_name = 'products' AND table_schema = 'public'
ORDER BY ordinal_position;

-- 4. Информация о таблице seller_applications
SELECT column_name, data_type, is_nullable, column_default, character_maximum_length
FROM information_schema.columns 
WHERE table_name = 'seller_applications' AND table_schema = 'public'
ORDER BY ordinal_position;

-- 5. Информация о таблице users
SELECT column_name, data_type, is_nullable, column_default, character_maximum_length
FROM information_schema.columns 
WHERE table_name = 'users' AND table_schema = 'public'
ORDER BY ordinal_position;
