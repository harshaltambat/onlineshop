Option Explicit
Dim Zira, David

'Zira's Voice
Set Zira = CreateObject("SAPI.spVoice")
Set Zira.Voice = Zira.GetVoices.Item(1)
Zira.Rate = 2
Zira.Volume = 90

'David's Voice
Set David = CreateObject("SAPI.spVoice")
Set David.Voice = David.GetVoices.Item(0)
David.Rate = 1
David.Volume = 100

Zira.Speak "Good Morning Sir!"
David.Speak "Morning"
Zira.Speak"How are you sir?"