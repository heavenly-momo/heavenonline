# The in-house version of this script, and general rune system on heavenonline.xyz use obfuscated filenames. So if you came hoping for an easy lead, you'll need to look elsewhere. :)
# Also, this script is only in the site files here. I have the tools kept in their own place for my use. The version using the obfuscated filenames isn't hosted on heavenonline.xyz, or anywhere. Just in case you had ideas.
# If you want to use this for a site of your own, you should probably also obfuscate the filenames instead of just naming them after the letters as they're named here, haha.

color = input(
    '\nWhat color would you like?\nEnter one of the following:\n\n|white | lightgray | darkgray |\n|red | green | blue |\n|fuchsia | cyan | orange |\n\n'
)

colors = [
    'white',
    'lightgray',
    'darkgray',
    'red',
    'green',
    'blue',
    'fuchsia',
    'cyan',
    'orange'
]

if color not in colors:
    print("\nIt looks like you've made a mistake. Defaulting to white.\n")
    color = 'white'

part1 = '<img src="/runes/'
part2 = '.png">'

period = part1+'period'+part2

runes = {
    'a': part1+'a'+part2,
    'b': part1+'b'+part2,
    'c': part1+'c'+part2,
    'd': part1+'d'+part2,
    'e': part1+'e'+part2,
    'f': part1+'f'+part2,
    'g': part1+'g'+part2,
    'h': part1+'h'+part2,
    'i': part1+'i'+part2,
    'j': part1+'j'+part2,
    'k': part1+'k'+part2,
    'l': part1+'l'+part2,
    'm': part1+'m'+part2,
    'n': part1+'n'+part2,
    'o': part1+'o'+part2,
    'p': part1+'p'+part2,
    'q': part1+'q'+part2,
    'r': part1+'r'+part2,
    's': part1+'s'+part2,
    't': part1+'t'+part2,
    'u': part1+'u'+part2,
    'v': part1+'v'+part2,
    'w': part1+'w'+part2,
    'x': part1+'x'+part2,
    'y': part1+'y'+part2,
    'z': part1+'z'+part2,
    'A': part1+'Ax'+part2,
    'B': part1+'Bx'+part2,
    'C': part1+'Cx'+part2,
    'D': part1+'Dx'+part2,
    'E': part1+'Ex'+part2,
    'F': part1+'Fx'+part2,
    'G': part1+'Gx'+part2,
    'H': part1+'Hx'+part2,
    'I': part1+'Ix'+part2,
    'J': part1+'Jx'+part2,
    'K': part1+'Kx'+part2,
    'L': part1+'Lx'+part2,
    'M': part1+'Mx'+part2,
    'N': part1+'Nx'+part2,
    'O': part1+'Ox'+part2,
    'P': part1+'Px'+part2,
    'Q': part1+'Qx'+part2,
    'R': part1+'Rx'+part2,
    'S': part1+'Sx'+part2,
    'T': part1+'Tx'+part2,
    'U': part1+'Ux'+part2,
    'V': part1+'Vx'+part2,
    'W': part1+'Wx'+part2,
    'X': part1+'Xx'+part2,
    'Y': part1+'Yx'+part2,
    'Z': part1+'Zx'+part2,
    '1': part1+'1'+part2,
    '2': part1+'2'+part2,
    '3': part1+'3'+part2,
    '4': part1+'4'+part2,
    '5': part1+'5'+part2,
    '6': part1+'6'+part2,
    '7': part1+'7'+part2,
    '8': part1+'8'+part2,
    '9': part1+'9'+part2,
    '0': part1+'0'+part2,
    '!': part1+'e_mark'+part2,
    '?': part1+'q_mark'+part2,
    ',': part1+'comma'+part2,
    "'": part1+'apostrophe'+part2,
    '"': part1+'quote'+part2,
    '-': part1+'hyphen'+part2,
    '.': period,
    ' ': '<span class="runespace"></span>'
}

plaintext = input("\nEnter your plaintext.\n\n")
runetextunchecked = '<!--\n    runes.py output\n-->\n<div class="runes '+color+'">\n    '+("".join(map(runes.get,plaintext)))+'\n</div>'
    
# Check for ellipses.

runetext = runetextunchecked.replace(period+period+period, part1+'ellipses'+part2)

print('\n'+runetext)
input("\nPaste this where you may.\n")