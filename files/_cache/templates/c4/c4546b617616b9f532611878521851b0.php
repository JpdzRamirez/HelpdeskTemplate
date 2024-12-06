<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* pages/login.html.twig */
class __TwigTemplate_8c1c4b7415f48066e1cb3475e19c5e9e extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'content_block' => [$this, 'block_content_block'],
            'footer_block' => [$this, 'block_footer_block'],
            'javascript_block' => [$this, 'block_javascript_block'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 34
        return "layout/page_card_notlogged.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("layout/page_card_notlogged.html.twig", "pages/login.html.twig", 34);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
    }

    // line 36
    public function block_content_block($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 37
        yield "   <form action=\"";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path("front/login.php"), "html", null, true);
        yield "\" method=\"post\" autocomplete=\"off\"  data-submit-once>
      <input type=\"hidden\" name=\"noAUTO\" value=\"";
        // line 38
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["noAuto"] ?? null), "html", null, true);
        yield "\" />
      <input type=\"hidden\" name=\"redirect\" value=\"";
        // line 39
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["redirect"] ?? null), "html", null, true);
        yield "\" />
      <input type=\"hidden\" name=\"_glpi_csrf_token\" value=\"";
        // line 40
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Session::getNewCSRFToken(), "html", null, true);
        yield "\" />

      <h2 class=\"mx-auto text-center\" style=\"color:white;\">";
        // line 42
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Login to your account"), "html", null, true);
        yield "</h2>
      <label class=\"form-label\" for=\"login_password\" style=\"color:white;\">
         Usuario
      </label>
      <div class=\"input-group mb-3 input-group-prepend\">
         <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>
         <input type=\"text\" class=\"form-control\" id=\"login_name\" name=\"";
        // line 48
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["namfield"] ?? null), "html", null, true);
        yield "\" placeholder=\"Usuario\" tabindex=\"1\" />
       </div>

       <label class=\"form-label\" for=\"login_password\" style=\"color:white;\">
         ";
        // line 52
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Password"), "html", null, true);
        yield "

         ";
        // line 54
        if (($context["show_lost_password"] ?? null)) {
            // line 55
            yield "            <span class=\"form-label-description\">
               <a href=\"";
            // line 56
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\RoutingExtension']->path("front/lostpassword.php?lostpassword=1"), "html", null, true);
            yield "\">
                  ";
            // line 57
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Forgotten password?"), "html", null, true);
            yield "
               </a>
            </span>
         ";
        }
        // line 61
        yield "      </label>
       <div class=\"input-group mb-3 input-group-prepend\">
         <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>
         <input type=\"password\" class=\"form-control\" id=\"login_password\" name=\"";
        // line 64
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["pwdfield"] ?? null), "html", null, true);
        yield "\" placeholder=\"Contraseña\" autocomplete=\"off\" tabindex=\"2\" />
       </div>

      ";
        // line 67
        if (Twig\Extension\CoreExtension::constant("GLPI_DEMO_MODE")) {
            // line 68
            yield "         <div class=\"mb-3\">
            <label class=\"form-label\" for=\"dropdown_language";
            // line 69
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Language"), "html", null, true);
            yield "</label>
            ";
            // line 70
            yield ($context["languages_dropdown"] ?? null);
            yield "
         </div>
      ";
        }
        // line 73
        yield "
      ";
        // line 74
        if ($this->extensions['Glpi\Application\View\Extension\ConfigExtension']->config("display_login_source")) {
            // line 75
            yield "         <div class=\"mb-3\">
            <label class=\"form-label\" style=\"color:white;\" for=\"dropdown_auth";
            // line 76
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rand"] ?? null), "html", null, true);
            yield "\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Login source"), "html", null, true);
            yield "</label>
            ";
            // line 77
            yield ($context["auth_dropdown_login"] ?? null);
            yield "
         </div>
      ";
        }
        // line 80
        yield "
      ";
        // line 81
        if ($this->extensions['Glpi\Application\View\Extension\ConfigExtension']->config("login_remember_time")) {
            // line 82
            yield "         <div class=\"mb-2 span-centered\">
            <label class=\"form-check\" for=\"login_remember\" style=\"color:white;\">
               <input type=\"checkbox\" style=\"background-color:#0a66c2\" class=\"form-check-input\" id=\"login_remember\" name=\"";
            // line 84
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["rmbfield"] ?? null), "html", null, true);
            yield "\" ";
            yield (($this->extensions['Glpi\Application\View\Extension\ConfigExtension']->config("login_remember_default")) ? ("checked") : (""));
            yield " />
               <span class=\"form-check-label\">";
            // line 85
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Remember me"), "html", null, true);
            yield "</span>
            </label>
         </div>
      ";
        }
        // line 89
        yield "      <div class=\"form-footer\">
         <button type=\"submit\" name=\"submit\" style=\"background-color:#0a66c2; color:white;\" class=\"btn btn-primary w-100\" tabindex=\"3\">
            ";
        // line 91
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Sign in"), "html", null, true);
        yield "
         </button>
      </div>

      ";
        // line 95
        if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), ($context["errors"] ?? null)) > 0)) {
            // line 96
            yield "         <hr />
         <div class=\"alert alert-danger\" role=\"alert\">
            ";
            // line 98
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(($context["errors"] ?? null), "html", null, true);
            yield "
         </div>
      ";
        }
        // line 101
        yield "
      ";
        // line 102
        if (($context["right_panel"] ?? null)) {
            // line 103
            yield "         <div class=\"col-auto px-2 text-center\">
            ";
            // line 104
            if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), ($context["text_login"] ?? null)) > 0)) {
                // line 105
                yield "               <div class=\"rich_text_container\">
                  ";
                // line 106
                yield $this->extensions['Glpi\Application\View\Extension\DataHelpersExtension']->getSafeHtml(($context["text_login"] ?? null));
                yield "
               </div>
            ";
            }
            // line 109
            yield "
            ";
            // line 110
            if ($this->extensions['Glpi\Application\View\Extension\ConfigExtension']->config("use_public_faq")) {
                // line 111
                yield "               <hr />

               <a class=\"btn btn-outline-secondary btn-icon\" href=\"front/helpdesk.faq.php\">
                  <i class=\"fas fa-question\"></i>&nbsp;
                  ";
                // line 115
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("FAQ"), "html", null, true);
                yield "
               </a>
            ";
            }
            // line 118
            yield "
            ";
            // line 119
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Glpi\Application\View\Extension\PluginExtension']->callPluginHook(Twig\Extension\CoreExtension::constant("Glpi\\Plugin\\Hooks::DISPLAY_LOGIN")), "html", null, true);
            yield "
         </div>
      ";
        }
        // line 122
        yield "   </form>
";
        return; yield '';
    }

    // line 125
    public function block_footer_block($context, array $blocks = [])
    {
        $macros = $this->macros;
        yield "   <div class=\"d-flex justify-content-center\">
      <a href=\"https://www.linkedin.com/company/softlogy/\">Softlogy © 2024 INDEPNET Support Team</a>
   </div>
";
        return; yield '';
    }

    // line 131
    public function block_javascript_block($context, array $blocks = [])
    {
        $macros = $this->macros;
        yield "<script type=\"text/javascript\">
   \$(function () {
\$('#login_name').focus();
});
    /**
     * Preloader
     */
     const preloader = document.querySelector(\"#preloader\");
     
     if (preloader) {
         window.addEventListener(\"load\", () => {
             // Añadir clase de fade-out
             setTimeout(() => {
               preloader.classList.add(\"fade-out\");
             }, 1000);
             
             // Esperar a que termine la animación antes de eliminarlo
             setTimeout(() => {
                 preloader.remove();
               }, 1500);
         });
     }
 
</script>
";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "pages/login.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  263 => 131,  252 => 125,  246 => 122,  240 => 119,  237 => 118,  231 => 115,  225 => 111,  223 => 110,  220 => 109,  214 => 106,  211 => 105,  209 => 104,  206 => 103,  204 => 102,  201 => 101,  195 => 98,  191 => 96,  189 => 95,  182 => 91,  178 => 89,  171 => 85,  165 => 84,  161 => 82,  159 => 81,  156 => 80,  150 => 77,  144 => 76,  141 => 75,  139 => 74,  136 => 73,  130 => 70,  124 => 69,  121 => 68,  119 => 67,  113 => 64,  108 => 61,  101 => 57,  97 => 56,  94 => 55,  92 => 54,  87 => 52,  80 => 48,  71 => 42,  66 => 40,  62 => 39,  58 => 38,  53 => 37,  49 => 36,  38 => 34,);
    }

    public function getSourceContext()
    {
        return new Source("", "pages/login.html.twig", "C:\\laragon\\www\\softlogy\\templates\\pages\\login.html.twig");
    }
}
