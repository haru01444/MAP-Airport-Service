import sys, re, glob

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find <style>{...}</style> or <style>{\...</style>
    pattern = r'<style>\{[\\`]?\s*(.*?)\s*[\\`]?\}</style>'
    
    def repl(m):
        css = m.group(1)
        # escape double quotes and backslashes in CSS
        css = css.replace('\\', '\\\\').replace('"', '\\"')
        # split by lines
        lines = css.split('\n')
        # build an array of strings
        arr_str = ',\n'.join(f'          "{line}"' for line in lines)
        
        return f'<style dangerouslySetInnerHTML={{{{ __html: [\n{arr_str}\n        ].join(\'\\n\') }}}} />'

    new_content = re.sub(pattern, repl, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Fixed {filepath}')

for f in glob.glob('*.tsx'):
    process_file(f)
