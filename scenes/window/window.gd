extends Panel

@export var window_size: Vector2
@export var starting_position: Vector2
@onready var title_bar_node = $TitleBar
@onready var window_title_node = $TitleBar/TitleBarControl/TitleContainer/WindowTitle
@export var window_title: String

var mouse_inside: bool = false
var mouse_title: bool = false
var dragging: bool = false
var selected_window: bool = false

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	custom_minimum_size = window_size
	window_title_node.text = window_title
	if starting_position:
		print("has position")
		position = starting_position


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	if mouse_inside and Input.is_action_pressed("mouseleft"):
		selected_window = true
	elif Input.is_action_pressed("mouseleft"):
		selected_window = false
	
	if (mouse_title or dragging) and Input.is_action_pressed("mouseleft"):
		dragging = true
		position = get_global_mouse_position() - Vector2(get_global_rect().size.x / 2.0, title_bar_node.get_global_rect().size.y / 2.0)
	elif not Input.is_action_pressed("mouseleft"):
		dragging = false


func _on_mouse_entered() -> void:
	mouse_inside = true


func _on_mouse_exited() -> void:
	mouse_inside = false


func _on_title_bar_control_mouse_entered() -> void:
	mouse_title = true


func _on_title_bar_control_mouse_exited() -> void:
	mouse_title = false


func _on_close_pressed() -> void:
	queue_free()
