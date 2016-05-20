using System.Web;
using System.Web.Optimization;

namespace Squares
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                   "~/Scripts/angular.js","~/Scripts/angular-route.js","~/Content/components/angular-dragdrop/src/angular-dragdrop.js"));

            bundles.Add(new ScriptBundle("~/bundles/Squares")
                 .IncludeDirectory("~/Scripts/Controllers", "*.js")
                 .IncludeDirectory("~/Scripts/Services", "*.js")
                 .Include("~/Scripts/Squares.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                       "~/Scripts/jquery-{version}.js","~/Content/components/jquery-ui/jquery-ui.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular-dragdrop").Include(
                 "~/Content/components/angular-dragdrop/src/angular-dragdrop.js"));


            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/bootstrap.css","~/Content/Site.css"));

            BundleTable.EnableOptimizations = true;

        }
    }
}
