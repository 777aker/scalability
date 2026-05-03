extends Panel

@export var window_size: Vector2
@onready var title_bar_node = $TitleBar
@onready var window_title_node = $TitleBar/TitleBarControl/TitleContainer/WindowTitle
@export var window_title: String

var mouse_inside: bool = false
var mouse_title: bool = false
var dragging: bool = false

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	custom_minimum_size = window_size
	window_title_node.text = window_title


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
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
