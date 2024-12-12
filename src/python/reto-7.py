def fix_packages(packages: str) -> str:
    while '(' in packages:
        # Encontrar el paréntesis más interno
        inicio = packages.rindex('(')
        fin = packages.find(')', inicio)
        
        # Extraer y voltear el contenido
        contenido = packages[inicio + 1:fin][::-1]
        
        # Reemplazar la sección con paréntesis por el contenido volteado
        packages = packages[:inicio] + contenido + packages[fin + 1:]
    
    return packages


print(fix_packages('a(cb)de'))         # "abcde"
print()
print(fix_packages('a(bc(def)g)h'))    # "agdefcbh"
print()
print(fix_packages('abc(def(gh)i)jk')) # "abcighfedjk"
print()
print(fix_packages('a(b(c))e'))        # "acbe"