import './App.css';
import logo from './deepak.jpg';

function App() {
  return (
    <div className="App">
      <div className='app1'>
        <img src={logo} className="logo" alt=''/>
      </div>
      <div className='app2'>
        <h1>DEEPAK MUVVALA</h1>
        <h4><b>Email :</b>muvvaladeepak72@gmail.com <b>Phone :</b>+91 6303674755</h4>
        <h4><b>GitHub :</b>https://github.com/muvvaladeepak</h4>
        <hr />
      </div>
      <div class="app3">
           <p class="sum"><h2>Summary :</h2></p>
           <p className='sum1'><br />
               Start by stating your level of proficiency with each technology (e.g. "Proficient in HTML and CSS, and experienced with React").
               Highlight any projects you have worked on using these technologies, and describe your role and responsibilities in each project.
               Mention any specific skills or tools you have used within each technology, such as CSS frameworks or React libraries.
               Include any relevant certifications or courses you have completed to demonstrate your expertise.
               Use strong action verbs to describe your accomplishments and contributions, such as "developed," "implemented," or "optimized."
               Quantify your achievements whenever possible, such as "increased website traffic by 20% through SEO optimization" or "reduced page load time by 50% through code optimization."
               Remember to tailor your resume to the specific job you are applying for and to highlight the skills and experiences that are most relevant to that position. Good luck with your job search!
           </p>
         </div>
    </div>
  );
}
export default App;
