﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ViewRes.User {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "16.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    public class RequestVerificationStrings {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal RequestVerificationStrings() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("VocaDb.Web.Resources.Views.User.RequestVerificationStrings", typeof(RequestVerificationStrings).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Entry of the artist whom I represent (required).
        /// </summary>
        public static string ArtistTitle {
            get {
                return ResourceManager.GetString("ArtistTitle", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to log in.
        /// </summary>
        public static string Login {
            get {
                return ResourceManager.GetString("Login", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Additional message (optional).
        /// </summary>
        public static string MessageTitle {
            get {
                return ResourceManager.GetString("MessageTitle", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to The proof is provided in the URL below.
        /// </summary>
        public static string NoPrivateMessage {
            get {
                return ResourceManager.GetString("NoPrivateMessage", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Sorry, you need to {0} or {1} to use this feature..
        /// </summary>
        public static string NotLoggedInMessage {
            get {
                return ResourceManager.GetString("NotLoggedInMessage", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Request account verification.
        /// </summary>
        public static string PageTitle {
            get {
                return ResourceManager.GetString("PageTitle", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to I will submit the proof in a private message.
        /// </summary>
        public static string PrivateMessage {
            get {
                return ResourceManager.GetString("PrivateMessage", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Send request.
        /// </summary>
        public static string Send {
            get {
                return ResourceManager.GetString("Send", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to sign up.
        /// </summary>
        public static string Signup {
            get {
                return ResourceManager.GetString("Signup", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Link to proof, for example a tweet (required).
        /// </summary>
        public static string URL {
            get {
                return ResourceManager.GetString("URL", resourceCulture);
            }
        }
    }
}
