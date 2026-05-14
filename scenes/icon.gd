extends Button

@export var open_window: PackedScene

func _on_pressed() -> void:
	var newwindow = open_window.instantiate()
	newwindow.position = Vector2(self.position) - newwindow.get_global_rect().position
	$"../../Windows".add_child(newwindow)
