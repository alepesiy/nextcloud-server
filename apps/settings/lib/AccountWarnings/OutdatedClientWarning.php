<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2023 Côme Chilliet <come.chilliet@nextcloud.com>
 *
 * @author Côme Chilliet <come.chilliet@nextcloud.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
namespace OCA\Settings\AccountWarnings;

use OCP\Settings\IAccountWarning;
use OCP\IL10N;

class OutdatedClientWarning implements IAccountWarning {
	public function __construct(
		private IL10N $l10n,
		private int $count,
		private string $version,
	) {
	}

	public function getText(): string {
		return $this->l10n->t('%d users are using outdated client version "%s"', [$this->count, $this->version]);
	}

	public function getSeverity(): string {
		return IAccountWarning::SEVERITY_WARNING;
	}
}
