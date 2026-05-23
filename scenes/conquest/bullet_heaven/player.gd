extends Polygon2D


# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	var num_sides = 10
	var radius = 10
	var points = PackedVector2Array()
	for i in range(num_sides):
		var angle = (i * TAU) / num_sides
		var point = Vector2(cos(angle), sin(angle)) * radius
		points.append(point)
		
	self.polygon = points;


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass
