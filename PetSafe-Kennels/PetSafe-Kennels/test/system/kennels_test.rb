require "application_system_test_case"

class KennelsTest < ApplicationSystemTestCase
  setup do
    @kennel = kennels(:one)
  end

  test "visiting the index" do
    visit kennels_url
    assert_selector "h1", text: "Kennels"
  end

  test "creating a Kennel" do
    visit kennels_url
    click_on "New Kennel"

    fill_in "Charge", with: @kennel.charge
    fill_in "Cost", with: @kennel.cost
    fill_in "Customer", with: @kennel.customer_id
    fill_in "Date", with: @kennel.date
    fill_in "Kennel type", with: @kennel.kennel_type
    fill_in "Labor", with: @kennel.labor
    fill_in "Materials", with: @kennel.materials
    click_on "Create Kennel"

    assert_text "Kennel was successfully created"
    click_on "Back"
  end

  test "updating a Kennel" do
    visit kennels_url
    click_on "Edit", match: :first

    fill_in "Charge", with: @kennel.charge
    fill_in "Cost", with: @kennel.cost
    fill_in "Customer", with: @kennel.customer_id
    fill_in "Date", with: @kennel.date
    fill_in "Kennel type", with: @kennel.kennel_type
    fill_in "Labor", with: @kennel.labor
    fill_in "Materials", with: @kennel.materials
    click_on "Update Kennel"

    assert_text "Kennel was successfully updated"
    click_on "Back"
  end

  test "destroying a Kennel" do
    visit kennels_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Kennel was successfully destroyed"
  end
end
