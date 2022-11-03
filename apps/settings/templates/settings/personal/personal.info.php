<?php

/**
 * @copyright Copyright (c) 2017 Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 * @author Thomas Citharel <tcit@tcit.fr>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

/** @var \OCP\IL10N $l */
/** @var array $_ */

script('settings', [
	'usersettings',
	'templates',
	'federationsettingsview',
	'federationscopemenu',
	'settings/personalInfo',
	'vue-settings-personal-info',
]);
?>
<?php if (!$_['isFairUseOfFreePushService']) : ?>
	<div class="section">
		<div class="warning">
			<?php p($l->t('This community release of Nextcloud is unsupported and instant notifications are unavailable.')); ?>
		</div>
	</div>
<?php endif; ?>

<div id="personal-settings">
	<h2 class="hidden-visually"><?php p($l->t('Personal info')); ?></h2>
	<div id="personal-settings-avatar-container" class="personal-settings-container">
		<div id="vue-avatar-section"></div>
		<div class="personal-settings-setting-box personal-settings-group-box section">
			<div id="vue-details-section"></div>
		</div>
	</div>

	<div class="personal-settings-container">
		<div class="personal-settings-setting-box">
			<div id="vue-displayname-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-email-section"></div>
		</div>
		<?php if ($_['profileEnabledGlobally']) : ?>
			<div class="personal-settings-setting-box">
				<div id="vue-profile-section"></div>
			</div>
		<?php endif; ?>
		<div class="personal-settings-setting-box">
			<div id="vue-phone-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-location-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-website-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-twitter-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-mastodon-section"></div>
		</div>
		<?php if ($_['profileEnabledGlobally']) : ?>
			<div class="personal-settings-setting-box">
				<div id="vue-organisation-section"></div>
			</div>
			<div class="personal-settings-setting-box">
				<div id="vue-role-section"></div>
			</div>
			<div class="personal-settings-setting-box">
				<div id="vue-headline-section"></div>
			</div>
			<div class="personal-settings-setting-box">
				<div id="vue-biography-section"></div>
			</div>
		<?php endif; ?>
		<div class="personal-settings-setting-box personal-settings-language-box">
			<div id="vue-language-section"></div>
		</div>
		<div class="personal-settings-setting-box personal-settings-locale-box">
			<div id="vue-locale-section"></div>
		</div>
		<span class="msg"></span>
	</div>

	<div id="personal-settings-group-container">

	</div>

</div>

<?php if ($_['profileEnabledGlobally']) : ?>
	<div class="personal-settings-section">
		<div id="vue-profile-visibility-section"></div>
	</div>
<?php endif; ?>
