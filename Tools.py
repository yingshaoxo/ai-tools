#!/usr/bin/env /usr/bin/python3
 
#!/usr/bin/env /usr/bin/python3
from auto_everything.base import Python, Terminal, IO
py = Python()
t = Terminal()
io_ = IO()

from auto_everything.gui import GUI
gui = GUI()

class Tools():
    def push(self, comment):
        t.run('git add .')
        t.run('git commit -m "{}"'.format(comment))
        t.run('git push origin')

    def pull(self):
        t.run("""
git fetch --all
git reset --hard origin/master
""")

    def reset(self):
        t.run("""
git reset --hard HEAD^
""")

    def build(self):
        t.run('yarn build')
        content = io_.read("./build/index.html")
        content = content.replace("<title>React App</title>", """
                <title>AI tools</title>
                <meta name="description" content="A place for sharing free AI tools." />
                <meta name="keywords" content="AI tools, online" />
                """.replace("\n", "")
                )
        io_.write("./build/index.html", content)

    def publish(self, words):
        self.build()
        self.push(words)
        t.run(f"""
cp ./build/* ../ai-tools-html-codes/ -fr
rm ./build -fr

cd ../ai-tools-html-codes
python3 Tools.py push "{words}"
""")

    def dev(self):
        gui.autogui.hotkey('ctrl', 'shift', 'e')
        gui.autogui.typewrite("yarn start")
        gui.autogui.press('enter')
        gui.delay(5)

        gui.autogui.hotkey('winleft', 'right')
        gui.autogui.hotkey('alt', 'tab')

        gui.autogui.hotkey('ctrl', 'shift', 'o')
        gui.autogui.hotkey('ctrl', 'tab')
        gui.delay(1)

        gui.autogui.hotkey('winleft', 'left')
        gui.autogui.hotkey('ctrl', 'shift', 'z')
        
        gui.autogui.typewrite("cd src")
        gui.autogui.press('enter')

        gui.autogui.typewrite("clear")
        gui.autogui.press('enter')

        gui.autogui.typewrite("ls")
        gui.autogui.press('enter')

py.make_it_runnable()
py.fire(Tools)


