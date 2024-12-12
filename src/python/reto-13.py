def isRobotBack(moves):
    x=y=0
    doub=inv=cond=False
    done=set()
    invDir={'L':'R','R':'L','U':'D','D':'U'}
    inc={'L':(-1,0),'R':(1,0),'U':(0,1),'D':(0,-1)}
    for c in moves:
        if c in inc:
            dir=invDir[c] if inv else c
            inv=False
            if not cond or dir not in done:
                done.add(dir)
                dx,dy=inc[dir]
                m=2 if doub else 1
                x+=dx*m; y+=dy*m
            doub=cond=False
        elif c=='*':
            doub=True
        elif c=='!':
            inv=True
        elif c=='?':
            cond=True
    return True if x==0 and y==0 else [x,y]

print(isRobotBack('R'))     # [1, 0]
print(isRobotBack('RL'))    # true
print(isRobotBack('RLUD'))  # true
print(isRobotBack('*RU'))   # [2, 1]
print(isRobotBack('R*U'))   # [1, 2]
print(isRobotBack('LLL!R')) # [-4, 0]
print(isRobotBack('R?R'))   # [1, 0]
print(isRobotBack('U?D'))   # true
print(isRobotBack('R!L'))   # [2,0]
print(isRobotBack('U!D'))   # [0,2]
print(isRobotBack('R?L'))   # true
print(isRobotBack('U?U'))   # [0,1]
print(isRobotBack('*U?U'))  # [0,2]
print(isRobotBack('R!U?U')) # [1,0]
print(isRobotBack('U?D?U')) # true 