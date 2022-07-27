import React from 'react';

export default function Footer() {
	return(
 <footer class="bg-dark text-center text-white">
    <div class="container p-4">
            
    <section class="mb-4">
  
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
      <i class="fab fa-facebook-f"></i></a>

     
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
      <i class="fab fa-twitter"></i></a>

    
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
      <i class="fab fa-google"></i></a>

    
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
      <i class="fab fa-instagram"></i></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
      <i class="fab fa-linkedin-in"></i></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
      <i class="fab fa-github"></i></a>
    </section>
   

    <section class="mb-4">
      <p>
        Better Help is always ready to provide you with the best facilities at the wave of your hand.
        With doctor visits and regular checkups made simple, it would mean a lot to us if you subscribe 
        to our weekly newsletter!
      </p>
    </section>

    <section class="">
      <form action="">
        <div class="row d-flex justify-content-center">
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div class="col-md-5 col-12">
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example21" class="form-control" />
              <label class="form-label" for="form5Example21">Email address</label>
            </div>
          </div>

          <div class="col-auto">
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>

    
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

  </div>
</footer>
	);
}