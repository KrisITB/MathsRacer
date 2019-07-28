var score : int;
var counter = 0;

public var difficultyLevel = 1;
var timeLimit = 60;
var timeLeft : float;
var gameOver = false;


public var winningScreen : GUITexture;
public var texture1 : Texture2D;
public var texture2 : Texture2D;
public var yourCurrentTexture : Texture2D;

public var scoreDisplay : GUIText;
public var timeDisplay : GUIText;


function Start () {
	if (difficultyLevel  == 1){
		timeLimit = 120;
	}else if(difficultyLevel  == 2){
		timeLimit = 240;
	}else{
		timeLimit = 480;
	}
}

function Update () {
	
	winningScreen.texture = yourCurrentTexture;
	timeLeft = parseFloat(timeLimit-Time.time);
	if(timeLeft>0){
		timeDisplay.text = timeLeft.ToString("#.0");
	}else{
		gameOver = true;
	}
	
	if(gameOver){
		if(score>8000){
			Debug.Log("you win!");
			yourCurrentTexture = texture1;
		}else if(score<9000){
			Debug.Log("you lose");
			yourCurrentTexture = texture2;
		}
	}
}

function OnControllerColliderHit(hit : ControllerColliderHit){
	if(hit.gameObject.tag =="10")
	{
		Destroy(hit.gameObject);
		yield WaitForSeconds(.1);	
		score += 1000;
		counter +=1;
		Debug.Log(counter);
		scoreDisplay.text = "Score " + score.ToString();
		if (counter >= 10)
		{
			Debug.Log("you win");
			gameOver = true;
			yourCurrentTexture = texture1;
		}
	}
}
