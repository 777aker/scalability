extends Polygon2D

var missile = preload("res://scenes/conquest/missile_planet/missile.tscn")

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	var points = PackedVector2Array()
	var granularity = 100.0
	var radius = 200.0
	for i in range(granularity):
		var angle = i / granularity * 2.0 * PI
		points.append(Vector2(cos(angle), sin(angle)) * radius)
	polygon = points

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	if not $"..".selected_window:
		return
	if Input.is_action_just_pressed("mouseleft"):
		var newmissile = missile.instantiate()
		newmissile.position = get_global_mouse_position() - $"..".position
		$"..".add_child(newmissile)
