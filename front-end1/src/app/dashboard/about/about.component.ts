import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `





        <div class="tp-wrapper">
            <div class="tp-box" (click)="toggleFlip()" [@flipState]="flip">
                <div class="tp-box__side tp-box__front">
                    <img src="https://drive.google.com/uc?id=1fhZnz3V14vUcpUy2-wyfD6Rs0db74PEN" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side tp-box__back">
                    <font size="2">Ehab Mahmoud</font>
                    <br/>
                    <font size="2">Engineer in Progress</font>
                </div>

            </div>
        </div>

        <div class="tp-wrapper1">
            <div class="tp-box1" (click)="toggleFlip1()" [@flipState]="flip1">
                <div class="tp-box__side1 tp-box__front1">
                    <img src="https://drive.google.com/uc?id=1CUggWsskxTPvzyluCFBxMYJO7S4S01lo" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side1 tp-box__back1">
                    <font size="2">Ahmed Yasser Mahmoud</font>
                    <br/>
                    <font size="2">engineer by day</font>
                    <br/>
                    <font size="2">crossfitter by night</font>

                </div>

            </div>
        </div>

        <div class="tp-wrapper2">
            <div class="tp-box2" (click)="toggleFlip2()" [@flipState]="flip2">
                <div class="tp-box__side2 tp-box__front2">
                    <img src="https://drive.google.com/uc?id=1r034XcvsubOOwEWT7XaIG_keHEv5ZUH7" class="rotateimg180" style="margin:auto; width:200px;height: 200px;display:block"> />
                </div>
                <div class="tp-box__side2 tp-box__back2">
                    <font size="2">Ahmad Ehab</font>
                    <br/>
                    <font size="2">Computer Engineer</font>
                </div>

            </div>
        </div>

        <div class="tp-wrapper3">
            <div class="tp-box3" (click)="toggleFlip3()" [@flipState]="flip3">
                <div class="tp-box__side3 tp-box__front3">
                    <img src="https://drive.google.com/uc?id=1TeWoZUU-1g6gab4AsVvJgdLP5BzPexD3" style="margin:auto; width:200px;height: 200px;display:block"> />
                </div>
                <div class="tp-box__side3 tp-box__back3">
                    <font size="2">Hanien Ahmed</font>
                    <br/>
                    <font size="2">ID : 37-1522</font>
                    <br/>
                    <font size="2"> Major : MET</font>
                </div>

            </div>
        </div>


        <div class="tp-wrapper4">
            <div class="tp-box4" (click)="toggleFlip4()" [@flipState]="flip4">
                <div class="tp-box__side4 tp-box__front4">
                    <img src="https://drive.google.com/uc?id=1wfyan7hPKesRud5AaBFHObiBIAiASkw6" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side4 tp-box__back4">
                    <font size="2">Mai Samir El-Kholy</font>
                    <br/>
                    <font size="2">Coffee addict</font>
                    <br/>
                    <font size="2">Among the 3% Sleepless Elite</font>

                </div>

            </div>
        </div>


        <div class="tp-wrapper5">
            <div class="tp-box5" (click)="toggleFlip5()" [@flipState]="flip5">
                <div class="tp-box__side5 tp-box__front5">
                    <img src="https://drive.google.com/uc?id=1vF4_9xxB85gljrCONtgOZPaS1ysQ4MK-" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side5 tp-box__back5">
                    <font size="2">Nadine Tarek</font>
                    <br/>
                    <font size="2">Likes to google stuff</font>
                    <br/>
                    <font size="2">Meh.</font>

                </div>

            </div>
        </div>

        <div class="tp-wrapper6">
            <div class="tp-box6" (click)="toggleFlip6()" [@flipState]="flip6">
                <div class="tp-box__side6 tp-box__front6">
                    <img src="https://drive.google.com/uc?id=1DV7N1KNL3DlcGeMM10KYWyNtrDnl3pm2" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side6 tp-box__back6">
                    <font size="2">Shrouk Alaa Marouf</font>
                    <br/>
                    <font size="2">Loves Food</font>

                </div>

            </div>
        </div>

        <div class="tp-wrapper7">
            <div class="tp-box7" (click)="toggleFlip7()" [@flipState]="flip7">
                <div class="tp-box__side7 tp-box__front7">
                    <img src="https://drive.google.com/uc?id=1jiBLX5DSLoz_zPtw5c-Oy0IY-hskGQ4s" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side7 tp-box__back7">
                    <font size="2">Yara Ayman Mahmoud</font>
                    <br/>
                    <font size="2">Loves Dogs</font>
                    <br/>
                    <font size="2">Studies computer science</font>

                </div>

            </div>
        </div>

        <div class="tp-wrapper8">
            <div class="tp-box8" (click)="toggleFlip8()" [@flipState]="flip8">
                <div class="tp-box__side8 tp-box__front8">
                    <img src="https://drive.google.com/uc?id=1VwPndoKlNjyTjzXNOut7mnBdQjd06CbS" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side8 tp-box__back8">
                    <font size="2">Ahmed Ellouzy *_*</font>
                    <br/>
                    <font size="2">Love Travelling <3</font>
                    <br/>


                </div>

            </div>
        </div>

        <div class="tp-wrapper9">
            <div class="tp-box9" (click)="toggleFlip9()" [@flipState]="flip9">
                <div class="tp-box__side9 tp-box__front9">
                    <img src="https://drive.google.com/uc?id=1CObvmV9QFBlPy6cjQsDcyl2cmQ6oMudo" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side9 tp-box__back9">
                    <font size="2">Omar El-Sobky</font>
                    <br/>
                    <font size="2">Software Engineer</font>
                    <br/>
                    <font size="2">loves travelling and football </font>

                </div>

            </div>
        </div>

        <div class="tp-wrapper10">
            <div class="tp-box10" (click)="toggleFlip10()" [@flipState]="flip10">
                <div class="tp-box__side10 tp-box__front10">
                    <img src="https://drive.google.com/uc?id=13c9uTM4pBCuZehPdh3pSPJuBDi5NsFJC" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side10 tp-box__back10">
                    <font size="2">Ahmed amr mohamed abdlehameed</font>
                    <br/>
                    <font size="2">jr Ios developer</font>

                </div>

            </div>
        </div>


        <div class="tp-wrapper11">
            <div class="tp-box11" (click)="toggleFlip11()" [@flipState]="flip11">
                <div class="tp-box__side11 tp-box__front11">
                    <img src="https://drive.google.com/uc?id=1Xg1sfu1tw45o-CgnHb05KxWTjewLViVo" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side11 tp-box__back11">
                    <font size="2">Perihan Mohamed</font>
                    <br/>
                    <font size="2">I want to quit Engineering</font>
                </div>

            </div>
        </div>

        <div class="tp-wrapper12">
            <div class="tp-box12" (click)="toggleFlip12()" [@flipState]="flip12">
                <div class="tp-box__side12 tp-box__front12">
                    <img src="https://drive.google.com/uc?id=16_4YndRhpGZ1uG_gGb8GTzmE6_PIqBA4" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side12 tp-box__back12">
                    <font size="2">Reem Essam</font>
                    <br/>
                    <font size="2">love travelling</font>
                </div>

            </div>
        </div>

        <div class="tp-wrapper13">
            <div class="tp-box13" (click)="toggleFlip13()" [@flipState]="flip13">
                <div class="tp-box__side13 tp-box__front13">
                    <img src="https://drive.google.com/uc?id=1P6rEgj7pgH2NnYRqgz8js5fkFBz6js4y" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side13 tp-box__back13">
                    <font size="2">Seif Monsef</font>
                    <br/>
                    <font size="2">Junior Web Developer</font>
                </div>

            </div>
        </div>

        <div class="tp-wrapper14">
            <div class="tp-box14" (click)="toggleFlip14()" [@flipState]="flip14">
                <div class="tp-box__side14 tp-box__front14">
                    <img src="https://drive.google.com/uc?id=1-tMJmFXzXJSR-dHe6vJ3paMW07beSO8C" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side14 tp-box__back14">
                    <font size="2"> Merna Adel 37-4320</font>
                    <br/>
                    <font size="2">Love Swimming</font>
                </div>

            </div>
        </div>

        <div class="tp-wrapper15">
            <div class="tp-box15" (click)="toggleFlip15()" [@flipState]="flip15">
                <div class="tp-box__side15 tp-box__front15">
                    <img src="https://drive.google.com/uc?id=14FtQQAFFUvSxtcY1zutH8nbdSLx9dCj5" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side15 tp-box__back15">
                    <font size="2">Hassnean Ibrahim</font>
                    <br/>
                    <font size="2">computer engineer</font>
                </div>

            </div>
        </div>

        <div class="tp-wrapper16">
            <div class="tp-box16" (click)="toggleFlip16()" [@flipState]="flip16">
                <div class="tp-box__side16 tp-box__front16">
                    <img src="https://drive.google.com/uc?id=18vGTUDjJ3bLGHwRXsfOEMGHcqslZCX5v" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side16 tp-box__back16">
                    <font size="2">Engy Ahmed Fawaz</font>
                    <br/>
                    <font size="2">Shopaholic</font>
                </div>

            </div>
        </div>

        <div class="tp-wrapper17">
            <div class="tp-box17" (click)="toggleFlip17()" [@flipState]="flip17">
                <div class="tp-box__side17 tp-box__front17">
                    <img src="https://drive.google.com/uc?id=1NGBCej5YgCGSWahFhS4XDTYJRPF9iUeY" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side17 tp-box__back17">
                    <font size="2">Ali Ahmed Mohamed</font>
                    <br/>
                    <font size="2">Junior Software Engineer with a good music taste.</font>
                </div>

            </div>
        </div>

        <div class="tp-wrapper18">
            <div class="tp-box18" (click)="toggleFlip17()" [@flipState]="flip18">
                <div class="tp-box__side18 tp-box__front18">
                    <img src="https://drive.google.com/uc?id=1Tv47T6PWp78ElXnU0pcA50n-9-HMhrB0" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side18 tp-box__back18">
                    <font size="2">Hadeer Mohamed</font>
                    <br/>
                    <font size="2">CS engineering</font>
                    <br/>
                    <font size="2">Love reading and listening to music</font>
                </div>

            </div>
        </div>

        <div class="tp-wrapper19">
            <div class="tp-box19" (click)="toggleFlip19()" [@flipState]="flip19">
                <div class="tp-box__side19 tp-box__front19">
                    <img src="https://drive.google.com/uc?id=16RZZod1BhIDIK8J8feM_s7t4SUW5uago" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side19 tp-box__back19">
                    <font size="2">Dina Hisham Elkafrawy</font>
                    <br/>
                    <font size="2">I seek to become a better version of myself in all aspects of my life.</font>
                    <br/>
                </div>

            </div>
        </div>

        <div class="tp-wrapper20">
            <div class="tp-box20" (click)="toggleFlip20()" [@flipState]="flip20">
                <div class="tp-box__side20 tp-box__front20">
                    <img src="https://drive.google.com/uc?id=1O40Gern48ObZkT-bZ6jOllzT_3VBppPc" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side20 tp-box__back20">
                    <font size="2">Ziad Haredy</font>
                    <br/>
                    <font size="2">Junior Developer.</font>
                    <br/>
                </div>

            </div>
        </div>

        <div class="tp-wrapper21">
            <div class="tp-box21" (click)="toggleFlip21()" [@flipState]="flip21">
                <div class="tp-box__side21 tp-box__front21">
                    <img src="https://drive.google.com/uc?id=1DfJyQRWiKqI3piMCIJdoMaN4cNxFduYX" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side21 tp-box__back21">
                    <font size="2">Yousef Tarek</font>
                    <br/>
                    <font size="2">No Sense of Humor.</font>
                    <br/>
                </div>

            </div>
        </div>

        <div class="tp-wrapper22">
            <div class="tp-box22" (click)="toggleFlip22()" [@flipState]="flip22">
                <div class="tp-box__side22 tp-box__front22">
                    <img src="https://drive.google.com/uc?id=1sYbNmtP0AwayiIZHSBNJXWss_OxcGGj-" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side22 tp-box__back22">
                    <font size="2">Abdelrahman Osama</font>
                    <br/>
                    <font size="2">Love cats.</font>
                    <br/>
                </div>

            </div>
        </div>

        <div class="tp-wrapper23">
            <div class="tp-box23" (click)="toggleFlip23()" [@flipState]="flip23">
                <div class="tp-box__side23 tp-box__front23">
                    <img src="https://drive.google.com/uc?id=16R2r-NDA2rQFxPwvNtVdpFAsjSTSb64j" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side23 tp-box__back23">
                    <font size="2">Abdelrahman Rami</font>
                    <br/>
                    <font size="2">Junior Developer.</font>
                    <br/>
                </div>

            </div>
        </div>

        <div class="tp-wrapper24">
            <div class="tp-box24" (click)="toggleFlip24()" [@flipState]="flip24">
                <div class="tp-box__side24 tp-box__front24">
                    <img src="https://drive.google.com/uc?id=1nfgGcaMqNH4AMkmRgnsRBRQvWBgZa7s1" style="margin:auto; width:1300px;height: 300px;display:block" />
                </div>
                <div class="tp-box__side24 tp-box__back24">
                    <font size="4">    Team T17 Haga Laziza welcomes you to our project. The team consists of
                        24 students in MET CS major taking Software Engineering course in 6th
                        semester. The course is mainly about self-learning new techniques.
                        So we started the road by getting introduced to GitHub. This is to help us
                        integrate our work and work together efficiently through assigned tasks.
                        After that we had a hard time learning MEAN stack to implemenet to you this project.
                        Which is a full stack environment. Moreover, we were introduced to SLACK
                        to help us communicate together not only with team members but with
                        our TAs and our doctor as well to help us and for announcements too.
                        We hope you like the website and find it useful.
                        Have nice time shopping ;)</font>

                </div>

            </div>
        </div>



    `,
    styles: [
        `
    .tp-wrapper {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }

    .tp-box {
      position: relative;
      width: 200px;
      height: 200px;
      margin: 3rem auto;
      transform-style: preserve-3d;
      transition: transform 1s;
    }
    .tp-box__side {
      width: 100%;
      height: 100%;
      position: absolute;
      backface-visibility: hidden;
      color: #fff;
      text-align: center;
      line-height: 40px;
      font-size: 2px;
      font-weight: 700;
      cursor: pointer;
      user-select: none;
    }
    .tp-box__front {
      background: #f30d36;
    }
    .tp-box__back {
      background: #23262d;
      transform: rotateY(179.9deg);
    }


    .tp-wrapper1 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
        }

    .tp-box1 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side1 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front1 {
        background: #f30d36;
    }
    .tp-box__back1 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper2 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }

    .tp-box2 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side2 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front2 {
        background: #f30d36;
    }
    .tp-box__back2 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper3 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }

    .tp-box3 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side3 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front3 {
        background: #f30d36;
    }
    .tp-box__back3 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper4 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }

    .tp-box4 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side4 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front4 {
        background: #f30d36;
    }
    .tp-box__back4 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }


    .tp-wrapper5 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }

    .tp-box5 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side5 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front5 {
        background: #f30d36;
    }
    .tp-box__back5 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }


    .tp-wrapper6 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }

    .tp-box6 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side6 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front6 {
        background: #f30d36;
    }
    .tp-box__back6 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }


    .tp-wrapper7 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }

    .tp-box7 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side7 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front7 {
        background: #f30d36;
    }
    .tp-box__back7 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper8 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }

    .tp-box8 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side8 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front8 {
        background: #f30d36;
    }
    .tp-box__back8 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper9 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }

    .tp-box9 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side9 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front9 {
        background: #f30d36;
    }
    .tp-box__back9 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper10 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }

    .tp-box10 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side10 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front10 {
        background: #f30d36;
    }
    .tp-box__back10 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper11 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }

    .tp-box11 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side11 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front11 {
        background: #f30d36;
    }
    .tp-box__back11 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper12 {

        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }

    .tp-box12 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side12 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front12 {
        background: #f30d36;
    }
    .tp-box__back12 {
        background: #23262d;
        transform: rotateY(179.9deg);
        
    }
    
    
    
    
    .tp-wrapper13 {

        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }

    .tp-box13 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side13 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front13 {
        background: #f30d36;
    }
    .tp-box__back13 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    
    
    
    .tp-wrapper14 {

        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }

    .tp-box14 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side14 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front14 {
        background: #f30d36;
    }
    .tp-box__back14 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    
    
    .tp-wrapper15 {

        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }

    .tp-box15 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side15 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front15 {
        background: #f30d36;
    }
    .tp-box__back15 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper16 {

        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }

    .tp-box16 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side16 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front16 {
        background: #f30d36;
    }
    .tp-box__back16 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper17 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }

    .tp-box17 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side17 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front17 {
        background: #f30d36;
    }
    .tp-box__back17 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper18 {

        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }

    .tp-box18 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side18 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front18 {
        background: #f30d36;
    }
    .tp-box__back18 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper19 {

        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }

    .tp-box19 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side19 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front19 {
        background: #f30d36;
    }
    .tp-box__back19 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper20 {

        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }

    .tp-box20 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side20 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front20 {
        background: #f30d36;
    }
    .tp-box__back20 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper21 {

        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }

    .tp-box21 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side21 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front21 {
        background: #f30d36;
    }
    .tp-box__back21 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper22 {

        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }

    .tp-box22 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side22 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front22 {
        background: #f30d36;
    }
    .tp-box__back22 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }

    .tp-wrapper23 {

        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }

    .tp-box23 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side23 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front23 {
        background: #f30d36;
    }
    .tp-box__back23 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }


    .tp-wrapper24 {
        position: relative;
        right: -10px;
        top: -3000px;
    }

    .tp-box24 {
        position: relative;
        width: 1200px;
        height: 300px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side24 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front24 {
    }
    .tp-box__back24 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    
    
    
    .rotateimg180 {
        -webkit-transform:rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    `
    ],
    animations: [
        trigger('flipState', [
            state('active', style({
                transform: 'rotateY(179.9deg)'
            })),
            state('inactive', style({
                transform: 'rotateY(0)'
            })),
            transition('active => inactive', animate('500ms ease-out')),
            transition('inactive => active', animate('500ms ease-in'))
        ])
    ]
})
export class AboutComponent {

    flip: string = 'inactive';
    flip1: string = 'inactive';
    flip2: string = 'inactive';
    flip3: string = 'inactive';
    flip4: string = 'inactive';
    flip5: string = 'inactive';
    flip6: string = 'inactive';
    flip7: string = 'inactive';
    flip8: string = 'inactive';
    flip9: string = 'inactive';
    flip10: string = 'inactive';
    flip11: string = 'inactive';
    flip12: string = 'inactive';
    flip13: string = 'inactive';
    flip14: string = 'inactive';
    flip15: string = 'inactive';
    flip16: string = 'inactive';
    flip17: string = 'inactive';
    flip18: string = 'inactive';
    flip19: string = 'inactive';
    flip20: string = 'inactive';
    flip21: string = 'inactive';
    flip22: string = 'inactive';
    flip23: string = 'inactive';
    flip24: string = 'inactive';


    constructor() {}

    toggleFlip() {
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip1() {
        this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip2() {
        this.flip2 = (this.flip2 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip3() {
        this.flip3 = (this.flip3 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip4() {
        this.flip4 = (this.flip4 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip5() {
        this.flip5 = (this.flip5 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip6() {
        this.flip6 = (this.flip6 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip7() {
        this.flip7 = (this.flip7 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip8() {
        this.flip8 = (this.flip8 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip9() {
        this.flip9 = (this.flip9 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip10() {
        this.flip10 = (this.flip10 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip11() {
        this.flip11 = (this.flip11 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip12() {
        this.flip12 = (this.flip12 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip13() {
        this.flip13 = (this.flip13 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip14() {
        this.flip14 = (this.flip14 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip15() {
        this.flip15 = (this.flip15 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip16() {
        this.flip16 = (this.flip16 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip17() {
        this.flip17 = (this.flip17 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip18() {
        this.flip18 = (this.flip18 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip19() {
        this.flip19 = (this.flip19 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip20() {
        this.flip20 = (this.flip20 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip21() {
        this.flip21 = (this.flip21 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip22() {
        this.flip22 = (this.flip22 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip23() {
        this.flip23 = (this.flip23 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip24() {
        this.flip24 = (this.flip24 == 'inactive') ? 'active' : 'inactive';
    }




}
