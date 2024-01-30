<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2023 Joas Schilling <coding@schilljs.com>
 * @copyright Copyright (c) 2023 Julius Härtl <jus@bitgrid.net>
 *
 * @author Joas Schilling <coding@schilljs.com>
 * @author Julius Härtl <jus@bitgrid.net>
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCP\DB\Events;

/**
 * Event to allow apps to register information about missing database indices
 *
 * This event will be dispatched for checking on the admin settings and when running
 * occ db:add-missing-indices which will then create those indices
 *
 * @since 28.0.0
 */
class AddMissingIndicesEvent extends \OCP\EventDispatcher\Event {
	/** @var array<array-key, array{tableName: string, indexName: string, columns: string[], options: array{}, dropUnnamedIndex: bool, uniqueIndex: bool}> */
	private array $missingIndices = [];

	/** @var array<array-key, array{tableName: string, oldIndexNames: array, newIndexName: string, columns: string[], uniqueIndex: bool, options: array{}}> */
	private array $toReplaceIndices = [];

	/**
	 * @param string[] $columns
	 * @since 28.0.0
	 */
	public function addMissingIndex(string $tableName, string $indexName, array $columns, array $options = [], bool $dropUnnamedIndex = false): void {
		$this->missingIndices[] = [
			'tableName' => $tableName,
			'indexName' => $indexName,
			'columns' => $columns,
			'options' => $options,
			'dropUnnamedIndex' => $dropUnnamedIndex,
			'uniqueIndex' => false,
		];
	}
	/**
	 * @param string[] $columns
	 * @since 28.0.0
	 */
	public function addMissingUniqueIndex(string $tableName, string $indexName, array $columns, array $options = [], bool $dropUnnamedIndex = false): void {
		$this->missingIndices[] = [
			'tableName' => $tableName,
			'indexName' => $indexName,
			'columns' => $columns,
			'options' => $options,
			'dropUnnamedIndex' => $dropUnnamedIndex,
			'uniqueIndex' => true,
		];
	}

	/**
	 * @since 28.0.0
	 * @return array<array-key, array{tableName: string, indexName: string, columns: string[], options: array{}, dropUnnamedIndex: bool, uniqueIndex: bool}>
	 */
	public function getMissingIndices(): array {
		return $this->missingIndices;
	}

	/**
	 * @param string[] $columns
	 * @since 29.0.0
	 */
	public function replaceIndex(string $tableName, array $oldIndexNames, string $newIndexName, array $columns, bool $unique, array $options = []): void {
		$this->toReplaceIndices[] = [
			'tableName' => $tableName,
			'oldIndexNames' => $oldIndexNames,
			'newIndexName' => $newIndexName,
			'columns' => $columns,
			'uniqueIndex' => $unique,
			'options' => $options,
		];
	}

	/**
	 * @since 29.0.0
	 * @return array<array-key, array{tableName: string, oldIndexNames: array, newIndexName: string, columns: string[], uniqueIndex: bool, options: array{}}>
	 */
	public function toReplaceIndices(): array {
		return $this->toReplaceIndices;
	}
}
