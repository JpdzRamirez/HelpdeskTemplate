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

/* install/update.html.twig */
class __TwigTemplate_ca1ec621095893aacb72eb2b05e3a462 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 33
        yield "
<hr>

<h2>";
        // line 36
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("One last thing before starting"), "html", null, true);
        yield "</h2>

<p>
   ";
        // line 39
        yield ($context["glpinetwork"] ?? null);
        yield "
</p>

";
        // line 42
        if ( !($context["telemetry_enabled"] ?? null)) {
            // line 43
            yield "   <hr>
   <p>
      ";
            // line 45
            yield ($context["telemetry_info"] ?? null);
            yield "
   </p>
";
        }
        // line 48
        yield "
<hr>
<p>
   ";
        // line 51
        yield ($context["reference_info"] ?? null);
        yield "
</p>

<hr>
<form action=\"update.php\" method=\"post\" data-submit-once>
   <div class=\"text-center\">
      <button type=\"submit\" class=\"btn btn-primary\">
         <i class=\"fas fa-thumbs-up me-1\"></i>
         ";
        // line 59
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(__("Use GLPI"), "html", null, true);
        yield "
      </button>
   </div>

   <input type=\"hidden\" name=\"update_end\" value=\"1\">
   <input type=\"hidden\" name=\"_glpi_csrf_token\" value=\"";
        // line 64
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Session::getNewCSRFToken(), "html", null, true);
        yield "\">
</form>
";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "install/update.html.twig";
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
        return array (  91 => 64,  83 => 59,  72 => 51,  67 => 48,  61 => 45,  57 => 43,  55 => 42,  49 => 39,  43 => 36,  38 => 33,);
    }

    public function getSourceContext()
    {
        return new Source("{#
 # ---------------------------------------------------------------------
 #
 # GLPI - Gestionnaire Libre de Parc Informatique
 #
 # http://glpi-project.org
 #
 # @copyright 2015-2024 Teclib' and contributors.
 # @copyright 2003-2014 by the INDEPNET Development Team.
 # @licence   https://www.gnu.org/licenses/gpl-3.0.html
 #
 # ---------------------------------------------------------------------
 #
 # LICENSE
 #
 # This file is part of GLPI.
 #
 # This program is free software: you can redistribute it and/or modify
 # it under the terms of the GNU General Public License as published by
 # the Free Software Foundation, either version 3 of the License, or
 # (at your option) any later version.
 #
 # This program is distributed in the hope that it will be useful,
 # but WITHOUT ANY WARRANTY; without even the implied warranty of
 # MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 # GNU General Public License for more details.
 #
 # You should have received a copy of the GNU General Public License
 # along with this program.  If not, see <https://www.gnu.org/licenses/>.
 #
 # ---------------------------------------------------------------------
 #}

<hr>

<h2>{{ __(\"One last thing before starting\") }}</h2>

<p>
   {{ glpinetwork|raw }}
</p>

{% if not telemetry_enabled %}
   <hr>
   <p>
      {{ telemetry_info|raw }}
   </p>
{% endif %}

<hr>
<p>
   {{ reference_info|raw }}
</p>

<hr>
<form action=\"update.php\" method=\"post\" data-submit-once>
   <div class=\"text-center\">
      <button type=\"submit\" class=\"btn btn-primary\">
         <i class=\"fas fa-thumbs-up me-1\"></i>
         {{ __(\"Use GLPI\") }}
      </button>
   </div>

   <input type=\"hidden\" name=\"update_end\" value=\"1\">
   <input type=\"hidden\" name=\"_glpi_csrf_token\" value=\"{{ csrf_token() }}\">
</form>
", "install/update.html.twig", "C:\\laragon\\www\\softlogy\\templates\\install\\update.html.twig");
    }
}
