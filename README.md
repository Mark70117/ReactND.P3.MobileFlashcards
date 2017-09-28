# ReactND.P3.MobileFlashcards

This the _Mobile Flashcard_ project for Udacity's React Fundamentals course.

Mark Anderson // July 2017 cohort
### Platform tested on

tested on an iPhone

https://udacity-react.slack.com/archives/C75KNK4M7/p1506456944000050

```I've made a change to the rubric for the project, due to the difficulty of finding reasonable emulation for iOS devices on non-Apple machines. Your code needs to work on either Android _or_ iOS. Please specify which platform you've tested in your README and the notes to your reviewer.```

## Installation of App (standard)

At the command line enter:
```
export CMD=''

$CMD git clone https://github.com/Mark70117/ReactND.P3.MobileFlashcards.git
$CMD cd ReactND.P3.MobileFlashcards
$CMD yarn install
$CMD cd ..
```


## Running App
This app requires the _expo_ app be installted on the mobile device

https://itunes.apple.com/app/apple-store/id982107779?ct=www&mt=8

https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www

Enter the App direcotry
```
$CMD cd ReactND.P3.MobileFlashcards
```

At the command line enter:
```
$CMD yard start
```

Lauch _expo_ app.  Give permission app permission to use camera.  Select 'Scan QR code' from app menu and point at QR code.

Enjoy


## Instructions

### Primary Screen

The Primary Screen uses tab navigation.  The default view is a list of previously created decks.  One can scroll and click.
Clicking on a deck launchs the Individual Deck Screen.

Alternatively, one can click on the 'Add Deck' tab to switch to a view that allows one to create new decks by filling in the 
new deck name and clicking the submit button.

### Individual Deck Screen

The Individual Deck Screen lists the name of the deck and the number of cards.  I has two buttons, 'Add Card' and 'Start Quiz'


#### Quiz Screen

The Quiz Screen has three section.  At the top is a reminder of how many card remain in the quiz.  The middle section allows one to
flip between the Question and Answer on the card.  The bottom section allows one to specify if they knew the answer before looking.

#### Add Card

The Add Card screen is a form that allow you to enter a new question and answer to be included in the deck.  Enter the question and
the answer and then hit the 'SUBMIT' button.