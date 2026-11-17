/* ==========================================================================
   ELI PARK — FOOTER (shared by every page)
   ========================================================================== */

function loadFooter() {
  const container = document.getElementById("main-footer-container");
  if (!container) return;

  const year = new Date().getFullYear();

  container.innerHTML = `
    <footer class="footer_container">
      <div class="footer-inner">
        <div class="footer-address-and-socialmedia-container">
          <div class="footer_address_container" id="footer_address_container_CANCUN">
            <h6>CORPORATIVO CANCÚN</h6>
            <p>
              Nube 17-MANZANA 3, LOTE 32, SMZA.4, C.P. 77500 CANCÚN, QUINTANA ROO,
              MÉXICO
            </p>
            <div class="footer_telInfo" id="footer_telInfo_Cancun">
              <span class="footer-label">Tel.</span> 0199 88853021, 0199 88406417
            </div>
          </div>

          <div class="footer_address_container" id="footer_address_container_MEXICO">
            <h6>CORPORATIVO MÉXICO</h6>
            <p>
              C. DANTE N. 36 PISO 10, COL. ANZURES, DELEGACIÓN MIGUEL HIDALGO,
              C.P. 11590 CDMX.
            </p>
            <div class="footer_telInfo">
              <span class="footer-label">Tel.</span> 5531 7107, 5531 5034
            </div>
          </div>

          <div class="footer-socialmedia-container">
            <h6 id="lblRedesSociales">REDES SOCIALES</h6>
            <p id="lblRedesSociales_detail">
              Consulta nuestra página en Facebook y entérate de nuestras vacantes
              y novedades.
            </p>
            <a
              class="footer-social-link"
              href="https://www.facebook.com/elipark.elipark.elipark/"
              target="_blank"
              rel="noopener"
              aria-label="Eli Park en Facebook (se abre en una pestaña nueva)"
            >
              <img src="../Assets/icons/white_facebook_icon.png" alt="" id="facebook_icon" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <p id="lblMission_footer">
          “Ser líderes en la administración y operación de estacionamientos
          brindando un servicio de calidad para nuestros clientes implementando
          tecnología, innovación y seguridad.”
        </p>

        <nav class="footer_menu_container" aria-label="Menú del pie de página">
          <a href="../HTML/main.html">Inicio</a>
          <a href="../HTML/estacionamientos.html">Estacionamientos</a>
          <a href="../HTML/empleo.html">Empleo</a>
          <a href="../HTML/quienesSomos.html">Quiénes Somos</a>
          <a href="../HTML/contacto.html">Contacto</a>
          <a href="../HTML/avisoDePrivacidad.html">Aviso de Privacidad</a>
        </nav>
      </div>

      <div class="footer-bottom">
        <p class="bottomText_footer" id="bottomText_elipark">
          © ${year} EliPark operadora de estacionamientos
        </p>
        <p class="bottomText_footer">Developed by Bunthong Kong</p>
      </div>
    </footer>
  `;
}

document.addEventListener("DOMContentLoaded", loadFooter);
