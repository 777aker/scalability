extends Node2D

@onready var PARENT_WINDOW = $".."
var offset: Vector2 = Vector2(0, 0)
const OFFSETSPEED: float = 0.001

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(_delta: float) -> void:
	if not PARENT_WINDOW.selected_window:
		return
	var direction: Vector2 = Vector2(0, 0)
	if Input.is_action_pressed("down"):
		direction += Vector2(0, 1)
	if Input.is_action_pressed("left"):
		direction += Vector2(-1, 0)
	if Input.is_action_pressed("right"):
		direction += Vector2(1, 0)
	if Input.is_action_pressed("up"):
		direction += Vector2(0, -1)
	offset += direction * OFFSETSPEED
	$"../GrassBackground".material.set_shader_parameter("offset", offset)
	
