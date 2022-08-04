<template lang="">
  <div class="w-full">
    <section class="section main-banner">
      <div class="h-screen">
        <div class="caption">
          <img src="../../assets/logo.png" class="mx-auto logo" />
          <h2><em>Your</em> algotrading bot</h2>

        <div>
          <div class="flex justify-center">
            <div class="main-button mr-3">
              <div class="scroll-to-section">
                <a href="#section2" download>DOWNLOAD FOR WINDOWS</a>
              </div>
            </div>
            <div class="main-button mr-3">
              <div class="scroll-to-section">
                <a href="#section2">DOWNLOAD FOR MAC OS</a>
              </div>
            </div>
            <div class="main-button">
              <div class="scroll-to-section">
                <a href="#section2">DOWNLOAD FOR LINUX</a>
              </div>
            </div>
          </div>
        </div>


        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "HomePage",
};
</script>
<style lang="css">
.landing {
  background-color: var(--main-background);
}

.section-heading {
  text-align: center;
  margin-bottom: 70px;
}

#section2 h6 {
  color: var(--color);
  margin-bottom: 2rem;
}

/* Buttons */

.main-button a {
  background-color: var(--cta-color);
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
  padding: 12px 20px;
  display: inline-block;
  outline: none;
}

/* Slider */

.main-banner {
  position: relative;
  max-height: 100%;
  overflow: hidden;
  margin-bottom: -7px;
}

.main-banner .caption {
  text-align: center;
  position: absolute;
  width: 80%;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
}

.main-banner .caption h6 {
  margin-top: 0px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color);
  letter-spacing: 1px;
}

.main-banner .caption h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--color);
  letter-spacing: 1px;
}

.main-banner .caption h2 em {
  font-style: normal;
  color: var(--secondary-color);
  font-weight: 900;
}

@media screen and (max-width: 1180px) {
  .main-banner .caption h6 {
    font-weight: 500;
  }

  .main-banner .caption h2 {
    font-size: 58px;
  }
}

@media screen and (max-width: 767px) {
  .main-banner .caption h6 {
    font-weight: 500;
  }

  .main-banner .caption h2 {
    font-size: 36px;
  }
}
</style>
