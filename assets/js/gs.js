(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-80927481-1', 'auto');
ga('send', 'pageview');


var el = document.createElement('script');
el.type = 'application/ld+json';
el.text = JSON.stringify({
  "@context": "http://schema.org",
  "@type": "Organization",
  "url": "http://" + window.location.hostname,
  "legalName": "Cambridge Blockchain, LLC",
  "description": "Cambridge Blockchain puts control of personal identity data back in the hands of the end user. Our platform allows financial institutions to meet the strictest new data privacy rules, eliminate redundant identity compliance checks and improve the customer experience.",
  "address": [{
    "@type": "PostalAddress",
    "addressCountry": "USA",
    "addressLocality": "Cambridge",
    "addressRegion": "MA",
    "postalCode": "02142",
    "streetAddress": "14th Floor, 1 Broadway"
  }],
  "contactPoint": [{
    "@type": "ContactPoint",
    "email": "support@cambridge-blockchain.com",
    "contactType": "support",
    "url": "http://cambridge-blockchain.com/about/"
  }]
});
document.querySelector('body').appendChild(el);
