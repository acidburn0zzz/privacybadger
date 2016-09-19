/*
 *
 * This file is part of Privacy Badger <https://www.eff.org/privacybadger>
 * Copyright (C) 2016 Electronic Frontier Foundation
 *
 * Privacy Badger is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Privacy Badger is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Privacy Badger.  If not, see <http://www.gnu.org/licenses/>.
 */

require.scopes.surrogatedb = (function() {

const hostnames = {
  'www.google-analytics.com': [
    '/ga.js',
  ],
};

const surrogates = {
  // Google Analytics (legacy ga.js)
  //
  // sourced from https://github.com/uBlockOrigin/uAssets/ under GPLv3
  // https://github.com/uBlockOrigin/uAssets/blob/a821390c2c249a8241543a6eeb9632016f7f9eb7/filters/resources.txt#L149-L243
  //
  // test cases:
  // http://checkin.avianca.com/
  //
  // API reference:
  // https://developers.google.com/analytics/devguides/collection/gajs/methods/
  /* eslint-disable no-extra-semi */
  '/ga.js': '(' +
    function() {
      var noopfn = function() {
        ;
      };
      //
      var Gaq = function() {
        ;
      };
      Gaq.prototype.Na = noopfn;
      Gaq.prototype.O = noopfn;
      Gaq.prototype.Sa = noopfn;
      Gaq.prototype.Ta = noopfn;
      Gaq.prototype.Va = noopfn;
      Gaq.prototype._createAsyncTracker = noopfn;
      Gaq.prototype._getAsyncTracker = noopfn;
      Gaq.prototype._getPlugin = noopfn;
      Gaq.prototype.push = function(a) {
        if ( typeof a === 'function' ) {
          a();
        }
      };
      //
      var tracker = (function() {
        var out = {};
        var api = [
          '_addIgnoredOrganic _addIgnoredRef _addItem _addOrganic',
          '_addTrans _clearIgnoredOrganic _clearIgnoredRef _clearOrganic',
          '_cookiePathCopy _deleteCustomVar _getName _setAccount',
          '_getAccount _getClientInfo _getDetectFlash _getDetectTitle',
          '_getLinkerUrl _getLocalGifPath _getServiceMode _getVersion',
          '_getVisitorCustomVar _initData _link _linkByPost',
          '_setAllowAnchor _setAllowHash _setAllowLinker _setCampContentKey',
          '_setCampMediumKey _setCampNameKey _setCampNOKey _setCampSourceKey',
          '_setCampTermKey _setCampaignCookieTimeout _setCampaignTrack _setClientInfo',
          '_setCookiePath _setCookiePersistence _setCookieTimeout _setCustomVar',
          '_setDetectFlash _setDetectTitle _setDomainName _setLocalGifPath',
          '_setLocalRemoteServerMode _setLocalServerMode _setReferrerOverride _setRemoteServerMode',
          '_setSampleRate _setSessionTimeout _setSiteSpeedSampleRate _setSessionCookieTimeout',
          '_setVar _setVisitorCookieTimeout _trackEvent _trackPageLoadTime',
          '_trackPageview _trackSocial _trackTiming _trackTrans',
          '_visitCode'
        ].join(' ').split(/\s+/);
        var i = api.length;
        while ( i-- ) {
          out[api[i]] = noopfn;
        }
        out._getLinkerUrl = function(a) {
          return a;
        };
        return out;
      })();
      //
      var Gat = function() {
        ;
      };
      Gat.prototype._anonymizeIP = noopfn;
      Gat.prototype._createTracker = noopfn;
      Gat.prototype._forceSSL = noopfn;
      Gat.prototype._getPlugin = noopfn;
      Gat.prototype._getTracker = function() {
        return tracker;
      };
      Gat.prototype._getTrackerByName = function() {
        return tracker;
      };
      Gat.prototype._getTrackers = noopfn;
      Gat.prototype.aa = noopfn;
      Gat.prototype.ab = noopfn;
      Gat.prototype.hb = noopfn;
      Gat.prototype.la = noopfn;
      Gat.prototype.oa = noopfn;
      Gat.prototype.pa = noopfn;
      Gat.prototype.u = noopfn;
      var gat = new Gat();
      window._gat = gat;
      //
      var gaq = new Gaq();
      (function() {
        var aa = window._gaq || [];
        if ( Array.isArray(aa) ) {
          while ( aa[0] ) {
            gaq.push(aa.shift());
          }
        }
      })();
      window._gaq = gaq.qf = gaq;
    } + ')();',
    /* eslint-enable no-extra-semi */
};

const exports = {
  hostnames: hostnames,
  surrogates: surrogates,
};

return exports;
})();
