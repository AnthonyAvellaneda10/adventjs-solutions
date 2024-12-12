def calculate_price(ornaments: str):
    # Mapeo de valores de los adornos
    values = {'*': 1, 'o': 5, '^': 10, '#': 50, '@': 100}
    
    # Validación de caracteres inválidos y cálculo del precio en una sola pasada
    total = 0
    prev_value = 0  # Valor del adorno previo para comparación
    
    for char in ornaments:
        current_value = values.get(char)
        if current_value is None:  # Si el carácter no está en el mapeo
            return 'undefined'
        # Sumar o restar según la regla
        total += current_value - 2 * prev_value if current_value > prev_value else current_value
        prev_value = current_value  # Actualizar el valor previo
    
    return total

print(calculate_price('***'))   # 3
print(calculate_price('*o'))    # 4
print(calculate_price('o*'))    # 6
print(calculate_price('*o*'))   # 5
print(calculate_price('**o*'))  # 6
print(calculate_price('o***'))  # 8
print(calculate_price('*o@'))   # 94
print(calculate_price('*#'))    # 49
print(calculate_price('@@@'))   # 300
print(calculate_price('#@'))    # 50
print(calculate_price('#@Z'))   # 'undefined'
