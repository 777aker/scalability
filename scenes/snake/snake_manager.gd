extends Node2D

var body: Array[Node2D] = []
const body_segment = preload("res://scenes/snake/snake_segment.tscn")
var head_pos: Vector2 = Vector2(205, 200) # 255 so doesn't collide with edges of screen
var direction: Vector2 = Vector2(0, -1);
var current_length: int = 1
const GRID_SIZE = 20
const apple = preload("res://scenes/apple.tscn")
@onready var PARENT_WINDOW = $".."

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	spawn_segment()
	spawn_apple()


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	if not PARENT_WINDOW.selected_window:
		return
	if Input.is_action_pressed("down"):
		direction = Vector2(0, 1)
	if Input.is_action_pressed("left"):
		direction = Vector2(-1, 0)
	if Input.is_action_pressed("right"):
		direction = Vector2(1, 0)
	if Input.is_action_pressed("up"):
		direction = Vector2(0, -1)


func spawn_segment() -> void:
	var new_segment = body_segment.instantiate()
	body.push_back(new_segment)
	head_pos += direction * GRID_SIZE
	if head_pos.x <= 20 or head_pos.y <= 40 or head_pos.x > 400 or head_pos.y > 420:
		game_over()
		return
	new_segment.position = head_pos
	new_segment.area_entered.connect(area_entered_segment)
	add_child(new_segment)
	if body.size() > current_length:
		var deleteme = body.pop_front()
		deleteme.queue_free()


func spawn_apple() -> void:
	var apple_pos_x = randi_range(1, 19) * GRID_SIZE + 5 # has a little offset from edge of screen
	var apple_pos_y = randi_range(3, 19) * GRID_SIZE # has a little offset from title bar
	var new_apple = apple.instantiate()
	new_apple.position = Vector2(apple_pos_x, apple_pos_y)
	add_child(new_apple)


func _on_segment_spawner_timeout() -> void:
	spawn_segment()


func game_over() -> void:
	for segment in body:
		segment.queue_free()
	body.clear()
	current_length = 1
	head_pos = Vector2(205, 200)
	direction = Vector2(0, -1);
	for child in get_children():
		if child.is_in_group("apple"):
			child.queue_free()
	spawn_segment()
	spawn_apple()


func area_entered_segment(area: Area2D) -> void:
	if area.get_groups().has("snakebody"):
		game_over()
	if area.get_groups().has("apple"):
		current_length += 1
		area.get_parent().queue_free()
		spawn_apple()
