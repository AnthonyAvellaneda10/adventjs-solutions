def detect_bombs(grid: list[list[bool]]) -> list[list[int]]:
    # Obtener dimensiones de la cuadrícula
    rows = len(grid)
    cols = len(grid[0])
    
    # Crear matriz resultado con ceros
    result = [[0] * cols for _ in range(rows)]
    
    # Direcciones para verificar celdas adyacentes (incluyendo diagonales)
    directions = [(-1,-1), (-1,0), (-1,1), (0,-1), (0,1), (1,-1), (1,0), (1,1)]
    
    # Iterar por cada celda
    for i in range(rows):
        for j in range(cols):
            # Si hay una bomba, incrementar contador en celdas adyacentes
            if grid[i][j]:
                for di, dj in directions:
                    ni, nj = i + di, j + dj
                    # Verificar que las coordenadas estén dentro de los límites
                    if 0 <= ni < rows and 0 <= nj < cols:
                        result[ni][nj] += 1
    
    return result


print(detect_bombs([
  [True, False, False],
  [False, True, False],
  [False, False, False]
]))
# [
#   [1, 2, 1],
#   [2, 1, 1],
#   [1, 1, 1]
# ]

print(detect_bombs([
  [True, False],
  [False, False]
]))
# [
#   [0, 1],
#   [1, 1]
# ]

print(detect_bombs([
  [True, True],
  [False, False],
  [True, True]
]))

# [
#   [1, 1],
#   [4, 4],
#   [1, 1]
# ]