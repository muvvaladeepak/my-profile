import './App.css';

function Skills(){
    return(
<div className='col-md-6 offset-md-1'>
    <div className="skill1"><h2>Skills :</h2></div>
    <div className='col-md-6 offset-md-2'>
    <div className="row justify-content-around">
    <div className="col-4">
    <ul>
            <li>java(Springboot)</li>
            <li>Javascript</li>
            <li>HTML5</li>
            <li>CSS3</li>
        </ul> 
    </div>
    <div className="col-4">
    <ul>
             <li>SQL</li>
             <li>AWS(ec2,s3,IAM)</li>
             <li>GitHub</li>
             <li>Bootstrap </li>
        </ul> 
    </div>
  </div>
        
    </div>
    
</div>

    );
} 
export default Skills;