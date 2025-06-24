import './footer.css'

export default function Footer() {

  return (
    <footer>
      <div className='footer1'>
        <div className='footer1div'>
          <p className='ToYourInbox'>Deliciousness to your inbox</p>
          <p className='smallTextInbox'>The food are very great and can be delivered right into you inbox and <br /> you can enjoy the yummy and magnificent food.</p>
          <div className='enterEmail'>
            <p className='EnterEmailtext'>Enter Your Email...</p>
            <button className='blackButton'>Subscribe</button>
          </div>
        </div>
        <img src="salad-salad-fresh-food-healthylife-vegetables-vegetarian.png" alt="sigma" className='salad1' />
        <img src="Salad2.png" alt="sigma" className='salad2' />
      </div>
      <div className='footer2'>
        <div className='footer2Part1'>
          <div className='footer2Part1part1'>
            <p className='foodieland2'>Foodieland</p>
            <p className='Contacting'>You can contact us on Instagram, Facebook and Twiiter. You may also see our posts</p>
          </div>
          <div className='footer2Part1part2'>
            <p>Recipes</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>About us</p>
          </div>
        </div>
        <hr />
        <div className='footer2Part2'>
          <p className='©'>© 2020 Flowbase. Powered by Webflow</p>
          <div className='images_display_flex'>
            <img src="001-facebook.svg" alt="asaaa" />
            <img src="003-twitter.svg" alt="asaaa" />
            <img src="004-instagram.svg" alt="asaaa" />
          </div>
        </div>
      </div>
    </footer>
  )
}
