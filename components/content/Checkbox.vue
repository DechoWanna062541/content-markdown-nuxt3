<template>
  <div class="mb-12 pt-2 max-w-full">
    <div
      class="bg-white dark:bg-gray-900 p-4 md:p-6 rounded border-gray-300 dark:border-gray-900 border"
    >
      <h3 class="my-4 text-2xl">Checkboxes</h3>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox small</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6">
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-small-1"
                name="checkbox-small"
                type="checkbox"
                class="opd-form-checkbox-small"
              />
              <input
                id="checkbox-small-2"
                name="checkbox-small"
                type="checkbox"
                class="opd-form-checkbox-small"
                checked
              />
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox list small</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6 flex flex-col gap-y-1">
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-list-small-1"
                name="checkbox-list-small"
                type="checkbox"
                class="opd-form-checkbox-small"
              />
              <label
                for="checkbox-list-small-1"
                class="opd-form-label-checkbox-small"
                >Default checkbox</label
              >
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-list-small-2"
                name="checkbox-list-small"
                type="checkbox"
                class="opd-form-checkbox-small"
                checked
              />
              <label
                for="checkbox-list-small-2"
                class="opd-form-label-checkbox-small"
                >Checked checkbox</label
              >
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox disabled list small</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6 flex flex-col gap-y-1">
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-disabled-list-small-1"
                name="checkbox-disabled-list-small"
                type="checkbox"
                class="opd-form-checkbox-small"
                disabled
              />
              <label
                for="checkbox-disabled-list-small-1"
                class="opd-form-label-checkbox-small"
                >Disabled checkbox</label
              >
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-disabled-list-small-2"
                name="checkbox-disabled-list-small"
                type="checkbox"
                class="opd-form-checkbox-small"
                disabled
                checked
              />
              <label
                for="checkbox-disabled-list-small-2"
                class="opd-form-label-checkbox-small"
                >Disabled checked</label
              >
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox inline list small</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6 flex gap-x-6">
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-inline-list-small-1"
                name="checkbox-inline-list-small"
                type="checkbox"
                class="opd-form-checkbox-small"
              />
              <label
                for="checkbox-inline-list-small-1"
                class="opd-form-label-checkbox-small"
                >Default checkbox</label
              >
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-inline-list-small-2"
                name="checkbox-inline-list-small"
                type="checkbox"
                class="opd-form-checkbox-small"
                checked
              />
              <label
                for="checkbox-inline-list-small-2"
                class="opd-form-label-checkbox-small"
                >Checked checkbox</label
              >
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox disabled inline list small</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6 flex gap-x-6">
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-disabled-inline-list-small-1"
                name="checkbox-disabled-inline-list-small"
                type="checkbox"
                class="opd-form-checkbox-small"
                disabled
              />
              <label
                for="checkbox-disabled-inline-list-small-1"
                class="opd-form-label-checkbox-small"
                >Default checkbox</label
              >
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-disabled-inline-list-small-2"
                name="checkbox-disabled-inline-list-small"
                type="checkbox"
                class="opd-form-checkbox-small"
                disabled
                checked
              />
              <label
                for="checkbox-disabled-inline-list-small-2"
                class="opd-form-label-checkbox-small"
                >Checked checkbox</label
              >
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox list with description small</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6 flex flex-col gap-y-1">
            <div class="flex items-start gap-x-3">
              <div class="flex items-center h-6">
                <input
                  id="checkbox-list-small-description-1"
                  name="checkbox-list-small-description"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                  checked
                />
              </div>
              <div>
                <label
                  for="checkbox-list-small-description-1"
                  class="opd-form-label-checkbox-small"
                  >Comments</label
                >
                <p>so you always know what's happening.</p>
              </div>
            </div>
            <div class="flex items-start gap-x-3">
              <div class="flex items-center h-6">
                <input
                  id="checkbox-list-small-description-2"
                  name="checkbox-list-small-description"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                />
              </div>
              <div>
                <label
                  for="checkbox-list-small-description-2"
                  class="opd-form-label-checkbox-small"
                  >New candidates</label
                >
                <p>who apply for any open postings.</p>
              </div>
            </div>
            <div class="flex items-start gap-x-3">
              <div class="flex items-center h-6">
                <input
                  id="checkbox-list-small-description-3"
                  name="checkbox-list-small-description"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                />
              </div>
              <div>
                <label
                  for="checkbox-list-small-description-3"
                  class="opd-form-label-checkbox-small"
                  >Offers</label
                >
                <p>when they are accepted or rejected by candidates.</p>
              </div>
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox list with inline description small</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6 flex flex-col gap-y-2">
            <div class="flex items-center gap-x-3">
              <div class="flex items-center h-6">
                <input
                  id="checkbox-list-inline-small-description-1"
                  name="checkbox-list-inline-small-description"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                  checked
                />
              </div>
              <div class="flex items-center gap-x-1">
                <label
                  for="checkbox-list-inline-small-description-1"
                  class="opd-form-label-checkbox-small"
                  >Comments</label
                >
                <p>Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div class="flex items-center h-6">
                <input
                  id="checkbox-list-inline-small-description-2"
                  name="checkbox-list-inline-small-description"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                />
              </div>
              <div class="flex items-center gap-x-1">
                <label
                  for="checkbox-list-inline-small-description-2"
                  class="opd-form-label-checkbox-small"
                  >Candidates</label
                >
                <p>Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div class="flex items-center h-6">
                <input
                  id="checkbox-list-inline-small-description-3"
                  name="checkbox-list-inline-small-description"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                />
              </div>
              <div class="flex items-center gap-x-1">
                <label
                  for="checkbox-list-inline-small-description-3"
                  class="opd-form-label-checkbox-small"
                  >Offers</label
                >
                <p>
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">List description with checkbox on right</h4>
        <div class="max-w-md w-full">
          <!-- start -->
          <div class="my-6 flex flex-col gap-y-3">
            <div class="flex items-start gap-x-3 flex-row-reverse">
              <div class="flex items-center h-6">
                <input
                  id="list-description-checkbox-right-small-1"
                  name="list-description-checkbox-right-small"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                  checked
                />
              </div>
              <div class="grow">
                <label
                  for="list-description-checkbox-right-small-1"
                  class="opd-form-label-checkbox-small block"
                  >Checking</label
                >
                <p>CIBC ••••6610</p>
              </div>
            </div>
            <hr />
            <div class="flex items-start gap-x-3 flex-row-reverse">
              <div class="flex items-center h-6">
                <input
                  id="list-description-checkbox-right-small-2"
                  name="list-description-checkbox-right-small"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                />
              </div>
              <div class="grow">
                <label
                  for="list-description-checkbox-right-small-2"
                  class="opd-form-label-checkbox-small block"
                  >Savings</label
                >
                <p>Bank of America ••••0149</p>
              </div>
            </div>
            <hr />
            <div class="flex items-start gap-x-3 flex-row-reverse">
              <div class="flex items-center h-6">
                <input
                  id="list-description-checkbox-right-small-3"
                  name="list-description-checkbox-right-small"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                />
              </div>
              <div class="grow">
                <label
                  for="list-description-checkbox-right-small-3"
                  class="opd-form-label-checkbox-small block"
                  >Mastercard</label
                >
                <p>Capital One ••••7877</p>
              </div>
            </div>
            <hr />
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">List with checkbox on right small</h4>
        <div class="max-w-md w-full">
          <!-- start -->
          <div class="my-6 flex flex-col gap-y-3">
            <div class="flex items-start gap-x-3 flex-row-reverse">
              <div class="flex items-center h-6">
                <input
                  id="list-checkbox-right-small-1"
                  name="list-checkbox-right-small"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                  checked
                />
              </div>
              <div class="grow">
                <label
                  for="list-checkbox-right-small-1"
                  class="opd-form-label-checkbox-small block"
                  >Annette Black</label
                >
              </div>
            </div>
            <hr />
            <div class="flex items-start gap-x-3 flex-row-reverse">
              <div class="flex items-center h-6">
                <input
                  id="list-checkbox-right-small-2"
                  name="list-checkbox-right-small"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                />
              </div>
              <div class="grow">
                <label
                  for="list-checkbox-right-small-2"
                  class="opd-form-label-checkbox-small block"
                  >Cody Fisher</label
                >
              </div>
            </div>
            <hr />
            <div class="flex items-start gap-x-3 flex-row-reverse">
              <div class="flex items-center h-6">
                <input
                  id="list-checkbox-right-small-3"
                  name="list-checkbox-right-small"
                  type="checkbox"
                  class="opd-form-checkbox-small"
                />
              </div>
              <div class="grow">
                <label
                  for="list-checkbox-right-small-3"
                  class="opd-form-label-checkbox-small block"
                  >Courtney Henry</label
                >
              </div>
            </div>
            <hr />
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6">
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-1"
                name="checkbox"
                type="checkbox"
                class="opd-form-checkbox"
              />
              <input
                id="checkbox-2"
                name="checkbox"
                type="checkbox"
                class="opd-form-checkbox"
                checked
              />
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox list</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6 flex flex-col gap-y-2">
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-list-1"
                name="checkbox-list"
                type="checkbox"
                class="opd-form-checkbox"
              />
              <label for="checkbox-list-1" class="opd-form-label-checkbox"
                >Default checkbox</label
              >
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-list-2"
                name="checkbox-list"
                type="checkbox"
                class="opd-form-checkbox"
                checked
              />
              <label for="checkbox-list-2" class="opd-form-label-checkbox"
                >Checked checkbox</label
              >
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox disabled list</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6 flex flex-col gap-y-2">
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-disabled-list-1"
                name="checkbox-disabled-list"
                type="checkbox"
                class="opd-form-checkbox"
                disabled
              />
              <label
                for="checkbox-disabled-list-1"
                class="opd-form-label-checkbox"
                >Disabled checkbox</label
              >
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-disabled-list-2"
                name="checkbox-disabled-list"
                type="checkbox"
                class="opd-form-checkbox"
                disabled
                checked
              />
              <label
                for="checkbox-disabled-list-2"
                class="opd-form-label-checkbox"
                >Disabled checked</label
              >
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox inline list</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6 flex gap-x-6">
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-inline-list-1"
                name="checkbox-inline-list"
                type="checkbox"
                class="opd-form-checkbox"
              />
              <label
                for="checkbox-inline-list-1"
                class="opd-form-label-checkbox"
                >Default checkbox</label
              >
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-inline-list-2"
                name="checkbox-inline-list"
                type="checkbox"
                class="opd-form-checkbox"
                checked
              />
              <label
                for="checkbox-inline-list-2"
                class="opd-form-label-checkbox"
                >Checked checkbox</label
              >
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox disabled inline list</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6 flex gap-x-6">
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-disabled-inline-list-1"
                name="checkbox-disabled-inline-list"
                type="checkbox"
                class="opd-form-checkbox"
                disabled
              />
              <label
                for="checkbox-disabled-inline-list-1"
                class="opd-form-label-checkbox"
                >Default checkbox</label
              >
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="checkbox-disabled-inline-list-2"
                name="checkbox-disabled-inline-list"
                type="checkbox"
                class="opd-form-checkbox"
                disabled
                checked
              />
              <label
                for="checkbox-disabled-inline-list-2"
                class="opd-form-label-checkbox"
                >Checked checkbox</label
              >
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox list with description</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6 flex flex-col gap-y-2">
            <div class="flex items-start gap-x-3">
              <div class="flex items-center h-6">
                <input
                  id="checkbox-list-description-1"
                  name="checkbox-list-description"
                  type="checkbox"
                  class="opd-form-checkbox"
                  checked
                />
              </div>
              <div>
                <label
                  for="checkbox-list-description-1"
                  class="opd-form-label-checkbox"
                  >Comments</label
                >
                <p>so you always know what's happening.</p>
              </div>
            </div>
            <div class="flex items-start gap-x-3">
              <div class="flex items-center h-6">
                <input
                  id="checkbox-list-description-2"
                  name="checkbox-list-description"
                  type="checkbox"
                  class="opd-form-checkbox"
                />
              </div>
              <div>
                <label
                  for="checkbox-list-description-2"
                  class="opd-form-label-checkbox"
                  >New candidates</label
                >
                <p>who apply for any open postings.</p>
              </div>
            </div>
            <div class="flex items-start gap-x-3">
              <div class="flex items-center h-6">
                <input
                  id="checkbox-list-description-3"
                  name="checkbox-list-description"
                  type="checkbox"
                  class="opd-form-checkbox"
                />
              </div>
              <div>
                <label
                  for="checkbox-list-description-3"
                  class="opd-form-label-checkbox"
                  >Offers</label
                >
                <p>when they are accepted or rejected by candidates.</p>
              </div>
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">Checkbox list with inline description</h4>
        <div class="w-full">
          <!-- start -->
          <div class="my-6 flex flex-col gap-y-4">
            <div class="flex items-center gap-x-3">
              <div class="flex items-center h-6">
                <input
                  id="checkbox-list-inline-description-1"
                  name="checkbox-list-inline-description"
                  type="checkbox"
                  class="opd-form-checkbox"
                  checked
                />
              </div>
              <div class="flex items-center gap-x-1">
                <label
                  for="checkbox-list-inline-description-1"
                  class="opd-form-label-checkbox"
                  >Comments</label
                >
                <p>Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div class="flex items-center h-6">
                <input
                  id="checkbox-list-inline-description-2"
                  name="checkbox-list-inline-description"
                  type="checkbox"
                  class="opd-form-checkbox"
                />
              </div>
              <div class="flex items-center gap-x-1">
                <label
                  for="checkbox-list-inline-description-2"
                  class="opd-form-label-checkbox"
                  >Candidates</label
                >
                <p>Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div class="flex items-center h-6">
                <input
                  id="checkbox-list-inline-description-3"
                  name="checkbox-list-inline-description"
                  type="checkbox"
                  class="opd-form-checkbox"
                />
              </div>
              <div class="flex items-center gap-x-1">
                <label
                  for="checkbox-list-inline-description-3"
                  class="opd-form-label-checkbox"
                  >Offers</label
                >
                <p>
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">List description with checkbox on right</h4>
        <div class="max-w-md w-full">
          <!-- start -->
          <div class="my-6 flex flex-col gap-y-4">
            <div class="flex items-start gap-x-3 flex-row-reverse">
              <div class="flex items-center h-6">
                <input
                  id="list-description-checkbox-right-1"
                  name="list-description-checkbox-right"
                  type="checkbox"
                  class="opd-form-checkbox"
                  checked
                />
              </div>
              <div class="grow">
                <label
                  for="list-description-checkbox-right-1"
                  class="opd-form-label-checkbox-small block"
                  >Checking</label
                >
                <p>CIBC ••••6610</p>
              </div>
            </div>
            <hr />
            <div class="flex items-start gap-x-3 flex-row-reverse">
              <div class="flex items-center h-6">
                <input
                  id="list-description-checkbox-right-2"
                  name="list-description-checkbox-right"
                  type="checkbox"
                  class="opd-form-checkbox"
                />
              </div>
              <div class="grow">
                <label
                  for="list-description-checkbox-right-2"
                  class="opd-form-label-checkbox block"
                  >Savings</label
                >
                <p>Bank of America ••••0149</p>
              </div>
            </div>
            <hr />
            <div class="flex items-start gap-x-3 flex-row-reverse">
              <div class="flex items-center h-6">
                <input
                  id="list-description-checkbox-right-3"
                  name="list-description-checkbox-right"
                  type="checkbox"
                  class="opd-form-checkbox"
                />
              </div>
              <div class="grow">
                <label
                  for="list-description-checkbox-right-3"
                  class="opd-form-label-checkbox block"
                  >Mastercard</label
                >
                <p>Capital One ••••7877</p>
              </div>
            </div>
            <hr />
          </div>
          <!-- end -->
        </div>
      </div>

      <div class="mt-12 mb-8">
        <h4 class="mb-2">List with checkbox on right</h4>
        <div class="max-w-md w-full">
          <!-- start -->
          <div class="my-6 flex flex-col gap-y-4">
            <div class="flex items-start gap-x-3 flex-row-reverse">
              <div class="flex items-center h-6">
                <input
                  id="list-checkbox-right-1"
                  name="list-checkbox-right"
                  type="checkbox"
                  class="opd-form-checkbox"
                  checked
                />
              </div>
              <div class="grow">
                <label
                  for="list-checkbox-right-1"
                  class="opd-form-label-checkbox block"
                  >Annette Black</label
                >
              </div>
            </div>
            <hr />
            <div class="flex items-start gap-x-3 flex-row-reverse">
              <div class="flex items-center h-6">
                <input
                  id="list-checkbox-right-2"
                  name="list-checkbox-right"
                  type="checkbox"
                  class="opd-form-checkbox"
                />
              </div>
              <div class="grow">
                <label
                  for="list-checkbox-right-2"
                  class="opd-form-label-checkbox block"
                  >Cody Fisher</label
                >
              </div>
            </div>
            <hr />
            <div class="flex items-start gap-x-3 flex-row-reverse">
              <div class="flex items-center h-6">
                <input
                  id="list-checkbox-right-3"
                  name="list-checkbox-right"
                  type="checkbox"
                  class="opd-form-checkbox"
                />
              </div>
              <div class="grow">
                <label
                  for="list-checkbox-right-3"
                  class="opd-form-label-checkbox block"
                  >Courtney Henry</label
                >
              </div>
            </div>
            <hr />
          </div>
          <!-- end -->
        </div>
      </div>
    </div>
  </div>
</template>
