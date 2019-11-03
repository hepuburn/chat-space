## groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|groupname|string|null: false, foreign_key: true|



### Association
- belongs_to :message
- belongs_to :user
- has_many   :groups_users
- has_many   :tags, through: :photos_tags

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false unique: true
|emaill|string|null: false unique: true
|timestamps||null: false

### Association
- has_many :groups
- has_many :messages


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|taxt|text|null: false 
|image|string|
|timestamps||null: false

### Association
- belongs_to :group
- belongs_to :user
