## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false |
|user_id|references|null: false, 



### Association
- has_many :messages
- has_many   :groups_users
- has_many   :users
- has_many   :users, through: :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

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
- has_many :messages
- has_many :groups
- has_many   :groups, through: :groups_users


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|taxt|text|
|image|string|
|user_id|references|null: false,foreign_key: true|
|group_id|references|null: false, foreign_key: true|
|timestamps||null: false

### Association
- belongs_to :group
- belongs_to :user
