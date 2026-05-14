extends Panel

@export var window_size: Vector2
@onready var title_bar_node = $TitleBar
@onready var window_title_node = $TitleBar/TitleBarControl/TitleContainer/WindowTitle
@export var window_title: String
const SELECTED_STYLE = preload("res://styles/window_hightlighted.tres")
const DEFAULT_STYLE = preload("res://styles/window_default.tres")

var mouse_inside: bool = false
var mouse_title: bool = false
var dragging: bool = false
var selected_window: bool = false

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	custom_minimum_size = window_size
	window_title_node.text = window_title


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(_delta: float) -> void:
	if Input.is_action_pressed("mouseleft"):
		if mouse_inside:
			selected_window = true
			self.add_theme_stylebox_override("panel", SELECTED_STYLE)
			get_parent().move_child(self, -1)
		elif mouse_title or dragging:
			dragging = true
			selected_window = true
			self.add_theme_stylebox_override("panel", SELECTED_STYLE)
			get_parent().move_child(self, -1)
			position = get_global_mouse_position() - Vector2(get_global_rect().size.x / 2.0, title_bar_node.get_global_rect().size.y / 2.0)
		else:
			selected_window = false
			self.add_theme_stylebox_override("panel", DEFAULT_STYLE)
	else:
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
