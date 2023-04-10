<template>
  	<div class="footer-legal">
  	<p>© {{ getYear }} Netlify</p>
    	<nav class="footer-legal-nav">
      	<ul>
					<li>
						<a class="footer-link" href="https://www.netlify.com/trust-center/" id="cta-footer-trustcenter">Trust Center</a>
					</li>
					<li>
						<a class="footer-link" href="https://www.netlify.com/privacy/" id="cta-footer-privacypolicy">Privacy</a>
					</li>
					<li>
						<a class="footer-link" href="https://www.netlify.com/security/" id="cta-footer-security">Security</a>
					</li>
					<li>
						<a class="footer-link" href="https://www.netlify.com/gdpr-ccpa/" id="cta-footer-gdpr">GDPR/CCPA</a>
					</li>
					<li>
						<a class="footer-link" href="mailto:fraud@netlify.com?subject=Abuse%20report&body=Please%20include%20the%20site%20URL%20and%20reason%20for%20your%20report%2C%20and%20we%20will%20reply%20promptly." id="cta-footer-abuse" target="_blank" rel="noopener noreferrer">Abuse</a>
					</li>
				</ul>
			</nav>
	</div>
</template>

<script>
export default {
  computed: {
    getYear: function() {
      return new Date().getFullYear()
    }
  }
};
</script>

<style lang="scss" scoped>

.footer-legal {
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-inline: 1.5rem;
  margin-block-start: 1rem;
  max-width: 68.75rem;
  font-weight: 400;
}

.footer-legal-nav ul {
  padding-inline: 0;
  margin-block-start: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.5rem;
}

.footer-legal-nav li {
	display: inline;
	margin-inline-start: .5rem;
}

.footer-legal-nav a {
  color: black;
}

@media (max-width: 560px) {
	.footer-legal {
		flex-direction: column;
	}
}
</style>